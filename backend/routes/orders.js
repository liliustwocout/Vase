import express from "express";
import Order from "../models/Order.js";
import Product from "../models/Product.js";
import Wallet from "../models/Wallet.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// Tạo đơn hàng từ giỏ hàng
router.post("/", verifyToken, async (req, res) => {
  try {
    const { items, paymentMethod } = req.body;
    if (!items || items.length === 0) {
      return res.status(400).json({ message: "Giỏ hàng trống" });
    }

    let totalAmount = 0;
    const orderItems = [];

    for (const item of items) {
      const product = await Product.findById(item.productId);
      if (!product) {
        return res
          .status(404)
          .json({ message: `Sản phẩm ${item.productId} không tìm thấy` });
      }

      if (product.inventory < item.quantity) {
        return res.status(400).json({
          message: `Sản phẩm "${product.name}" không đủ hàng (chỉ còn ${product.inventory})`,
        });
      }

      // Lấy tài khoản từ inventory
      const assignedAccounts = [];
      for (let i = 0; i < item.quantity; i++) {
        if (product.accounts.length > 0) {
          assignedAccounts.push(product.accounts.pop());
        }
      }

      if (assignedAccounts.length < item.quantity) {
        return res.status(400).json({
          message: `Không đủ tài khoản cho "${product.name}"`,
        });
      }

      // Cập nhật inventory
      product.inventory -= item.quantity;
      await product.save();

      orderItems.push({
        productId: product._id,
        productName: product.name,
        price: product.price,
        quantity: item.quantity,
        assignedAccount:
          assignedAccounts.length > 0 ? assignedAccounts[0] : null,
      });

      totalAmount += product.price * item.quantity;
    }

    const order = new Order({
      userId: req.userId,
      items: orderItems,
      totalAmount,
      paymentMethod: paymentMethod || "wallet",
      status: "pending",
    });

    await order.save();

    res.status(201).json({ order, message: "Tạo đơn hàng thành công" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Lỗi server tạo đơn hàng" });
  }
});

// Lấy danh sách đơn hàng của user
router.get("/user", verifyToken, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.userId }).sort({
      createdAt: -1,
    });
    res.json({ orders });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Lỗi server lấy đơn hàng" });
  }
});

// Lấy chi tiết đơn hàng
router.get("/:id", verifyToken, async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order)
      return res.status(404).json({ message: "Đơn hàng không tìm thấy" });

    // Kiểm tra owner
    if (order.userId.toString() !== req.userId) {
      return res.status(403).json({ message: "Không có quyền truy cập" });
    }

    res.json({ order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Lỗi server lấy chi tiết đơn hàng" });
  }
});

// [ADMIN] Cập nhật trạng thái đơn hàng
router.patch("/:id/status", async (req, res) => {
  try {
    const { status } = req.body;
    if (
      !status ||
      !["pending", "paid", "completed", "cancelled"].includes(status)
    ) {
      return res.status(400).json({ message: "Trạng thái không hợp lệ" });
    }

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true },
    );

    if (!order)
      return res.status(404).json({ message: "Đơn hàng không tìm thấy" });

    res.json({ order });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Lỗi server cập nhật trạng thái" });
  }
});

export default router;

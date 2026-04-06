import express from "express";
import Wallet from "../models/Wallet.js";
import Order from "../models/Order.js";
import User from "../models/User.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

// Lấy thông tin ví
router.get("/", verifyToken, async (req, res) => {
  try {
    let wallet = await Wallet.findOne({ userId: req.userId });
    if (!wallet) {
      wallet = new Wallet({ userId: req.userId });
      await wallet.save();
    }

    res.json({ wallet });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Lỗi server lấy thông tin ví" });
  }
});

// Nạp tiền (giả lập, thực tế cần xử lý thanh toán MoMo)
router.post("/recharge", verifyToken, async (req, res) => {
  try {
    const { amount } = req.body;
    if (!amount || amount <= 0) {
      return res.status(400).json({ message: "Số tiền nạp phải > 0" });
    }

    let wallet = await Wallet.findOne({ userId: req.userId });
    if (!wallet) {
      wallet = new Wallet({ userId: req.userId });
    }

    wallet.balance += amount;
    wallet.totalRecharged += amount;
    wallet.transactions.push({
      type: "recharge",
      amount,
      description: "Nạp tiền",
    });

    await wallet.save();

    res.json({ wallet, message: "Nạp tiền thành công" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Lỗi server nạp tiền" });
  }
});

// Thanh toán từ ví (khi đơn hàng được xác nhận)
router.post("/pay-order", verifyToken, async (req, res) => {
  try {
    const { orderId, amount } = req.body;
    if (!orderId || !amount) {
      return res.status(400).json({ message: "orderId, amount bắt buộc" });
    }

    const order = await Order.findById(orderId);
    if (!order || order.userId.toString() !== req.userId) {
      return res
        .status(404)
        .json({ message: "Đơn hàng không tồn tại hoặc không có quyền" });
    }

    if (order.status === "paid") {
      return res.status(400).json({ message: "Đơn hàng đã được thanh toán" });
    }

    let wallet = await Wallet.findOne({ userId: req.userId });
    if (!wallet) {
      wallet = new Wallet({ userId: req.userId });
    }

    if (wallet.balance < amount) {
      return res.status(400).json({ message: "Số dư không đủ" });
    }

    wallet.balance -= amount;
    wallet.totalSpent += amount;
    wallet.transactions.push({
      type: "spend",
      amount,
      description: `Thanh toán đơn hàng ${orderId}`,
      orderId,
    });

    await wallet.save();

    order.status = "paid";
    order.paymentMethod = "wallet";
    order.transactionId = `wallet_${Date.now()}`;
    await order.save();

    res.json({ wallet, order, message: "Thanh toán thành công" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Lỗi server thanh toán" });
  }
});

// Lịch sử giao dịch
router.get("/transactions", verifyToken, async (req, res) => {
  try {
    const wallet = await Wallet.findOne({ userId: req.userId });
    if (!wallet) {
      return res.json({ transactions: [] });
    }

    res.json({ transactions: wallet.transactions });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Lỗi server lấy lịch sử giao dịch" });
  }
});

export default router;

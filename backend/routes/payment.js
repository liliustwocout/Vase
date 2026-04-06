import express from "express";
import Order from "../models/Order.js";
import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();
const clientUrl = process.env.CLIENT_URL || "http://localhost:3000";

async function handlePaymentRequest(req, res) {
  try {
    const { orderId, amount } = req.body;
    const userId = req.userId;
    const order = await Order.findById(orderId);

    if (!order || order.userId.toString() !== userId) {
      return res.status(403).json({ message: "Không tìm thấy đơn hàng" });
    }

    if (order.totalAmount !== Number(amount)) {
      return res.status(400).json({ message: "Số tiền thanh toán không khớp" });
    }

    if (order.status === "paid") {
      return res.status(400).json({ message: "Đơn hàng đã được thanh toán" });
    }

    order.status = "paid";
    order.paymentMethod = req.path.includes("/momo") ? "momo" : "sepay";
    order.transactionId = `tx_${Date.now()}`;
    await order.save();

    const payUrl = `${clientUrl}/checkout/success?orderId=${orderId}`;
    return res.json({ success: true, payUrl, requestId: order.transactionId });
  } catch (err) {
    console.error("Payment error:", err);
    return res.status(500).json({ message: "Lỗi tạo thanh toán" });
  }
}

router.post("/sepay", verifyToken, handlePaymentRequest);
router.post("/momo", verifyToken, handlePaymentRequest);

router.get("/status/:orderId", verifyToken, async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId);
    if (!order || order.userId.toString() !== req.userId) {
      return res.status(403).json({ message: "Không tìm thấy đơn hàng" });
    }

    res.json({
      status: order.status,
      totalAmount: order.totalAmount,
      paymentMethod: order.paymentMethod,
      transactionId: order.transactionId,
    });
  } catch (err) {
    console.error("Status check error:", err);
    res.status(500).json({ message: "Lỗi kiểm tra trạng thái" });
  }
});

export default router;

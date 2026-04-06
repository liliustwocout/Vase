import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    items: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
        productName: String,
        price: Number,
        quantity: Number,
        assignedAccount: { username: String, password: String }, // tài khoản được gán
      },
    ],
    totalAmount: { type: Number, required: true },
    status: {
      type: String,
      enum: ["pending", "paid", "completed", "cancelled"],
      default: "pending",
    },
    paymentMethod: String, // "momo", "bank", "wallet"
    transactionId: String, // ID thanh toán từ MoMo/Bank
    notes: String,
  },
  { timestamps: true },
);

const Order = mongoose.models.Order || mongoose.model("Order", orderSchema);
export default Order;

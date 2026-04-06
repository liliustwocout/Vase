import mongoose from "mongoose";

const walletSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
    balance: { type: Number, default: 0 }, // số dư hiện tại (đơn vị: đồng)
    totalSpent: { type: Number, default: 0 }, // tổng tiêu
    totalRecharged: { type: Number, default: 0 }, // tổng nạp
    transactions: [
      {
        type: { type: String, enum: ["recharge", "spend"], required: true },
        amount: { type: Number, required: true },
        description: String,
        orderId: mongoose.Schema.Types.ObjectId,
        timestamp: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true },
);

const Wallet = mongoose.models.Wallet || mongoose.model("Wallet", walletSchema);
export default Wallet;

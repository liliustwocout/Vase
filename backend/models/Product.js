import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true }, // giá bán
    category: { type: String, required: true }, // VD: ChatGPT, Netflix, Spotify
    icon: { type: String }, // URL hình ảnh
    inventory: { type: Number, default: 0 }, // số lượng tồn kho
    accounts: [{ accountId: String, username: String, password: String }], // độc lập với đơn hàng
    active: { type: Boolean, default: true },
  },
  { timestamps: true },
);

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export default Product;

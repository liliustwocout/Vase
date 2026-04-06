import express from "express";
import Product from "../models/Product.js";

const router = express.Router();

// Lấy danh sách sản phẩm (có filter)
router.get("/", async (req, res) => {
  try {
    const { category, page = 1, limit = 12 } = req.query;
    const skip = (page - 1) * limit;

    const filter = { active: true };
    if (category) {
      filter.category = category;
    }

    const products = await Product.find(filter)
      .select("-accounts")
      .skip(skip)
      .limit(Number(limit));

    const total = await Product.countDocuments(filter);

    res.json({
      products,
      pagination: { page: Number(page), limit: Number(limit), total },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Lỗi server lấy danh sách sản phẩm" });
  }
});

// Lấy chi tiết sản phẩm
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).select("-accounts");
    if (!product)
      return res.status(404).json({ message: "Sản phẩm không tìm thấy" });
    res.json({ product });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Lỗi server lấy chi tiết sản phẩm" });
  }
});

// [ADMIN] Tạo sản phẩm
router.post("/", async (req, res) => {
  try {
    const { name, description, price, category, icon, inventory } = req.body;
    if (!name || !price || !category) {
      return res
        .status(400)
        .json({ message: "name, price, category bắt buộc" });
    }

    const product = new Product({
      name,
      description,
      price,
      category,
      icon,
      inventory: inventory || 0,
    });
    await product.save();

    res.status(201).json({ product });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Lỗi server tạo sản phẩm" });
  }
});

// [ADMIN] Cập nhật sản phẩm
router.patch("/:id", async (req, res) => {
  try {
    const { name, description, price, category, icon, inventory, active } =
      req.body;

    const product = await Product.findByIdAndUpdate(
      req.params.id,
      { name, description, price, category, icon, inventory, active },
      { new: true },
    );

    if (!product)
      return res.status(404).json({ message: "Sản phẩm không tìm thấy" });

    res.json({ product });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Lỗi server cập nhật sản phẩm" });
  }
});

export default router;

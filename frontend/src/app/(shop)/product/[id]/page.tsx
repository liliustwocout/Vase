// Trang chi tiết sản phẩm — /product/[id]
'use client';

import { ArrowLeft, ShoppingCart, Star, Shield, Zap } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import { useParams } from 'next/navigation';

const products: Record<string, any> = {
  '1': { id: '1', name: 'ChatGPT Plus', description: 'Tài khoản ChatGPT Plus chính chủ, truy cập GPT-4, DALL·E 3 và hơn thế nữa. Phù hợp cho học sinh, sinh viên và nhân viên văn phòng muốn tối ưu năng suất làm việc.', price: 450000, originalPrice: 600000, category: 'AI Chat', emoji: '🤖', rating: 4.9, reviews: 312, duration: '1 tháng', includes: ['Truy cập GPT-4 Turbo', 'DALL·E 3 tạo ảnh AI', 'Ưu tiên tốc độ cao nhất', 'Dùng trên mọi thiết bị'] },
  '2': { id: '2', name: 'Midjourney Pro', description: 'Tài khoản Midjourney Pro cho phép tạo hình ảnh AI không giới hạn, chất lượng Ultra HD. Sử dụng các model mới nhất để tạo ra những hình ảnh chuyên nghiệp.', price: 380000, category: 'AI Art', emoji: '🎨', rating: 4.8, reviews: 204, duration: '1 tháng', includes: ['Tạo ảnh không giới hạn', 'Chất lượng Ultra HD', 'Mode nhanh không chờ đợi', 'Lịch sử ảnh 6 tháng'] },
  '3': { id: '3', name: 'Claude Pro', description: 'Tài khoản Claude Pro với khả năng viết lách, phân tích và lập trình mạnh mẽ. Context window 200K token — xử lý được cả quyển sách.', price: 420000, originalPrice: 550000, category: 'AI Chat', emoji: '⚡', rating: 4.9, reviews: 187, duration: '1 tháng', includes: ['200K context window', 'Claude claude-opus-4-20250805 đầy đủ', 'Ưu tiên truy cập cao điểm', 'Projects workspace riêng'] },
};

export default function ProductDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const product = products[id] || products['1'];
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      emoji: product.emoji,
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Breadcrumb */}
      <Link href="/explore" className="inline-flex items-center gap-1.5 text-sm text-[#6b7280] hover:text-[#4647d3] mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Quay lại khám phá
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ——— Nội dung bên trái ——— */}
        <div className="lg:col-span-2">
          {/* Header sản phẩm */}
          <div className="bg-white rounded-xl p-8 mb-5">
            <div className="flex items-start gap-5">
              <div className="w-20 h-20 bg-[#e8e8fc] rounded-2xl flex items-center justify-center text-4xl shrink-0">
                {product.emoji}
              </div>
              <div>
                <span className="text-xs font-medium text-[#4647d3] bg-[#e8e8fc] px-2 py-1 rounded-full">{product.category}</span>
                <h1 className="text-[1.5rem] font-bold text-[#1a1a2e] mt-2 mb-1">{product.name}</h1>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200 fill-gray-200'}`} />
                    ))}
                  </div>
                  <span className="text-sm font-medium text-[#1a1a2e]">{product.rating}</span>
                  <span className="text-sm text-[#6b7280]">({product.reviews} đánh giá)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Mô tả + tính năng */}
          <div className="bg-white rounded-xl p-8 mb-5">
            <h2 className="font-semibold text-[#1a1a2e] mb-3">Mô tả sản phẩm</h2>
            <p className="text-sm text-[#6b7280] leading-relaxed mb-6">{product.description}</p>

            <h2 className="font-semibold text-[#1a1a2e] mb-4">Bao gồm</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {product.includes.map((item: string) => (
                <li key={item} className="flex items-center gap-2 text-sm text-[#1a1a2e]">
                  <div className="w-5 h-5 bg-[#e8e8fc] rounded-full flex items-center justify-center text-[#4647d3] text-xs font-bold shrink-0">✓</div>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Đảm bảo */}
          <div className="bg-white rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-5 h-5 text-[#4647d3]" />
              <span className="font-semibold text-sm text-[#1a1a2e]">Cam kết của Vase</span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm text-[#6b7280]">
              <div>✓ Tài khoản chính hãng 100%</div>
              <div>✓ Giao hàng tức thì sau thanh toán</div>
              <div>✓ Hỗ trợ đổi hàng nếu lỗi</div>
              <div>✓ Bảo hành theo thời gian đã mua</div>
            </div>
          </div>
        </div>

        {/* ——— Panel giá bên phải ——— */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6 sticky top-20">
            <div className="mb-6">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-[2rem] font-bold text-[#4647d3]">
                  {product.price.toLocaleString('vi-VN')}₫
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-[#6b7280] line-through">
                    {product.originalPrice.toLocaleString('vi-VN')}₫
                  </span>
                )}
              </div>
              {product.originalPrice && (
                <span className="text-xs font-semibold text-orange-500 bg-orange-50 px-2 py-1 rounded-full">
                  Tiết kiệm {((1 - product.price / product.originalPrice) * 100).toFixed(0)}%
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 text-xs text-[#6b7280] bg-[#f5f7f9] rounded-lg px-3 py-2 mb-5">
              <Zap className="w-3.5 h-3.5 text-[#4647d3]" />
              Thời hạn: <strong className="text-[#1a1a2e]">{product.duration}</strong>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full btn-primary py-3 font-semibold text-sm flex items-center justify-center gap-2 mb-3"
            >
              <ShoppingCart className="w-4 h-4" /> Thêm vào giỏ hàng
            </button>
            <Link
              href="/checkout"
              onClick={handleAddToCart}
              className="w-full bg-[#e8e8fc] text-[#4647d3] font-semibold text-sm py-3 rounded-lg hover:bg-[#d0d0f8] transition-colors flex items-center justify-center"
            >
              Mua ngay
            </Link>

            <p className="text-xs text-center text-[#6b7280] mt-4">
              Giao hàng tự động sau khi thanh toán
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

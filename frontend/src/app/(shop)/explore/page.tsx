// Trang khám phá sản phẩm — /explore
'use client';
import { useState } from 'react';
import { SlidersHorizontal } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

const allProducts = [
  { id: '1', name: 'ChatGPT Plus', description: 'Truy cập GPT-4, DALL·E 3 và nhiều tính năng AI tiên tiến nhất.', price: 450000, originalPrice: 600000, category: 'AI Chat', emoji: '🤖', badge: 'Hot' },
  { id: '2', name: 'Midjourney Pro', description: 'Tạo hình ảnh AI không giới hạn, chất lượng Ultra HD.', price: 380000, category: 'AI Art', emoji: '🎨' },
  { id: '3', name: 'Claude Pro', description: 'AI viết lách, phân tích văn bản và lập trình mạnh mẽ.', price: 420000, originalPrice: 550000, category: 'AI Chat', emoji: '⚡', badge: 'Mới' },
  { id: '4', name: 'Cursor Pro', description: 'IDE AI tự động hoàn thành code, refactor và debug siêu nhanh.', price: 350000, category: 'Dev Tool', emoji: '💻' },
  { id: '5', name: 'Perplexity Pro', description: 'AI tìm kiếm với trích dẫn nguồn, thay thế hoàn toàn Google.', price: 290000, category: 'AI Search', emoji: '🔍' },
  { id: '6', name: 'Notion AI', description: 'Workspace thông minh với AI tích hợp cho mọi dự án.', price: 260000, category: 'Productivity', emoji: '📝' },
  { id: '7', name: 'Adobe Firefly', description: 'Tạo và chỉnh sửa hình ảnh thương mại an toàn bằng AI.', price: 320000, category: 'AI Art', emoji: '🔥' },
  { id: '8', name: 'GitHub Copilot', description: 'AI pair programmer cho mọi ngôn ngữ lập trình phổ biến.', price: 280000, category: 'Dev Tool', emoji: '🐙' },
  { id: '9', name: 'Jasper AI', description: 'Công cụ viết content marketing AI hàng đầu cho doanh nghiệp.', price: 390000, category: 'Productivity', emoji: '✍️' },
];

const categories = ['Tất cả', 'AI Chat', 'AI Art', 'Dev Tool', 'AI Search', 'Productivity'];

export default function ExplorePage() {
  const [activeCategory, setActiveCategory] = useState('Tất cả');
  const [maxPrice, setMaxPrice] = useState(600000);

  const filtered = allProducts.filter((p) => {
    const categoryMatch = activeCategory === 'Tất cả' || p.category === activeCategory;
    const priceMatch = p.price <= maxPrice;
    return categoryMatch && priceMatch;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-[1.75rem] font-semibold text-[#1a1a2e] mb-1">Khám phá sản phẩm</h1>
      <p className="text-sm text-[#6b7280] mb-8">Tất cả tài khoản AI được xác minh, giao hàng tự động</p>

      <div className="flex gap-8">
        {/* ——— Sidebar lọc ——— */}
        <aside className="hidden lg:block w-56 shrink-0">
          <div className="bg-white rounded-xl p-5 sticky top-20">
            <div className="flex items-center gap-2 mb-5">
              <SlidersHorizontal className="w-4 h-4 text-[#4647d3]" />
              <span className="font-semibold text-sm text-[#1a1a2e]">Bộ lọc</span>
            </div>

            {/* Danh mục */}
            <div className="mb-6">
              <p className="text-xs font-medium text-[#6b7280] mb-3 uppercase tracking-wide">Danh mục</p>
              <div className="flex flex-col gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-left text-sm px-3 py-1.5 rounded-lg transition-colors ${
                      activeCategory === cat
                        ? 'bg-[#e8e8fc] text-[#4647d3] font-medium'
                        : 'text-[#6b7280] hover:bg-[#f5f7f9]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Giá tối đa */}
            <div>
              <p className="text-xs font-medium text-[#6b7280] mb-3 uppercase tracking-wide">Giá tối đa</p>
              <input
                type="range"
                min={0}
                max={600000}
                step={10000}
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-[#4647d3]"
              />
              <div className="flex justify-between text-xs text-[#6b7280] mt-1">
                <span>0₫</span>
                <span className="text-[#4647d3] font-medium">{maxPrice.toLocaleString('vi-VN')}₫</span>
              </div>
            </div>
          </div>
        </aside>

        {/* ——— Grid sản phẩm ——— */}
        <div className="flex-1">
          <div className="flex items-center justify-between mb-5">
            <span className="text-sm text-[#6b7280]">{filtered.length} sản phẩm</span>
            <select className="text-sm bg-white border-none rounded-lg px-3 py-1.5 text-[#6b7280] outline-none cursor-pointer">
              <option>Phổ biến nhất</option>
              <option>Giá thấp → cao</option>
              <option>Giá cao → thấp</option>
              <option>Mới nhất</option>
            </select>
          </div>

          {filtered.length === 0 ? (
            <div className="text-center py-20 text-[#6b7280]">Không có sản phẩm phù hợp</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {filtered.map((p) => (
                <ProductCard key={p.id} {...p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

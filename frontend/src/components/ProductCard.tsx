// ProductCard — thẻ sản phẩm theo DESIGN.md (no-border rule)
'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/lib/cart-context';

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  emoji: string;
  badge?: string;
}

export default function ProductCard({
  id,
  name,
  description,
  price,
  originalPrice,
  category,
  emoji,
  badge,
}: ProductCardProps) {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id,
      name,
      price,
      category,
      emoji,
    });
  };

  return (
    <Link href={`/product/${id}`} className="block">
      <div className="bg-white rounded-xl p-5 hover:shadow-[0_8px_40px_rgba(70,71,211,0.08)] transition-shadow duration-300 h-full flex flex-col group">
        {/* Icon + Chip danh mục */}
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#e8e8fc] flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
            {emoji}
          </div>
          <span className="text-xs font-medium text-[#4647d3] bg-[#e8e8fc] px-2 py-1 rounded-full">
            {category}
          </span>
        </div>

        {/* Badge flash sale */}
        {badge && (
          <span className="text-[10px] font-semibold text-orange-500 bg-orange-50 px-2 py-0.5 rounded-full mb-2 w-fit">
            {badge}
          </span>
        )}

        {/* Tên & mô tả */}
        <div className="flex-1">
          <h3 className="font-semibold text-[#1a1a2e] text-sm mb-1 line-clamp-1 group-hover:text-[#4647d3] transition-colors">{name}</h3>
          <p className="text-xs text-[#6b7280] line-clamp-2 mb-4 leading-relaxed">{description}</p>
        </div>

        {/* Giá + nút thêm giỏ */}
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#f5f7f9]">
          <div>
            <span className="font-bold text-[#4647d3] text-base">
              {price.toLocaleString('vi-VN')}₫
            </span>
            {originalPrice && (
              <p className="text-[10px] text-[#6b7280] line-through">
                {originalPrice.toLocaleString('vi-VN')}₫
              </p>
            )}
          </div>
          <button
            onClick={handleAddToCart}
            className="p-2 rounded-lg bg-[#e8e8fc] text-[#4647d3] hover:bg-[#4647d3] hover:text-white hover:scale-105 active:scale-95 transition-all duration-200"
            title="Thêm vào giỏ hàng"
          >
            <ShoppingCart className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Link>
  );
}

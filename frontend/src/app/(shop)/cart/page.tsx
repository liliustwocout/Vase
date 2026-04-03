// Trang giỏ hàng — /cart
'use client';
import { useState } from 'react';
import { Trash2, ArrowRight, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';

export default function CartPage() {
  const { items, removeItem, totalPrice } = useCart();
  const [coupon, setCoupon] = useState('');

  const discount = 0;
  const finalTotal = totalPrice - discount;

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center">
        <ShoppingBag className="w-16 h-16 text-[#d0d0f8] mx-auto mb-4" />
        <h1 className="text-xl font-semibold text-[#1a1a2e] mb-2">Giỏ hàng trống</h1>
        <p className="text-sm text-[#6b7280] mb-6">Hãy thêm sản phẩm để bắt đầu mua sắm</p>
        <Link href="/explore" className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold">
          Khám phá sản phẩm <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <h1 className="text-[1.75rem] font-semibold text-[#1a1a2e] mb-8">Giỏ hàng ({items.length})</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ——— Danh sách sản phẩm ——— */}
        <div className="lg:col-span-2 flex flex-col gap-3">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-xl p-5 flex items-center gap-4">
              <div className="w-14 h-14 bg-[#e8e8fc] rounded-xl flex items-center justify-center text-2xl shrink-0">
                {item.emoji}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-[#1a1a2e] text-sm">{item.name}</p>
                <p className="text-xs text-[#6b7280] mt-0.5">{item.category} · 1 tháng</p>
              </div>
              <div className="text-right shrink-0">
                <p className="font-bold text-[#4647d3] text-sm">{item.price.toLocaleString('vi-VN')}₫</p>
                <button
                  onClick={() => removeItem(item.id)}
                  className="mt-1 text-xs text-[#6b7280] hover:text-red-500 flex items-center gap-1 ml-auto transition-colors"
                >
                  <Trash2 className="w-3 h-3" /> Xóa
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ——— Tóm tắt đơn hàng ——— */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6 sticky top-20">
            <h2 className="font-semibold text-[#1a1a2e] mb-4">Tóm tắt đơn hàng</h2>

            {/* Tạm tính */}
            <div className="flex justify-between text-sm text-[#6b7280] mb-2">
              <span>Tạm tính</span>
              <span>{totalPrice.toLocaleString('vi-VN')}₫</span>
            </div>
            {discount > 0 && (
              <div className="flex justify-between text-sm text-green-600 mb-2">
                <span>Giảm giá</span>
                <span>-{discount.toLocaleString('vi-VN')}₫</span>
              </div>
            )}

            <div className="h-px bg-[#f5f7f9] my-4" />

            {/* Tổng cộng */}
            <div className="flex justify-between font-bold text-[#1a1a2e] mb-5">
              <span>Tổng cộng</span>
              <span className="text-[#4647d3]">{finalTotal.toLocaleString('vi-VN')}₫</span>
            </div>

            {/* Mã giảm giá */}
            <div className="flex gap-2 mb-5">
              <input
                type="text"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                placeholder="Nhập mã giảm giá"
                className="flex-1 text-sm bg-[#f5f7f9] rounded-lg px-3 py-2 outline-none placeholder-[#6b7280] text-[#1a1a2e]"
              />
              <button className="text-sm font-medium text-[#4647d3] bg-[#e8e8fc] px-3 py-2 rounded-lg hover:bg-[#d0d0f8] transition-colors">
                Áp dụng
              </button>
            </div>

            {/* Nút thanh toán */}
            <Link 
              href="/checkout"
              className="w-full btn-primary py-3 font-semibold text-sm flex items-center justify-center gap-2"
            >
              Thanh toán <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Phương thức thanh toán chấp nhận */}
            <p className="text-xs text-center text-[#6b7280] mt-4">
              Chấp nhận: MoMo · VNPay · Chuyển khoản
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

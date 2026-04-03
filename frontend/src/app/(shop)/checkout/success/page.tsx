// Trang thanh toán thành công — /checkout/success
'use client';
import { CheckCircle, Package, ArrowRight, Mail } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function CheckoutSuccessPage() {
  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    // Giả lập tạo mã đơn hàng
    setOrderId('VASE-' + Math.random().toString(36).substr(2, 9).toUpperCase());
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-6 py-20 text-center">
      <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-green-100 animate-bounce">
        <CheckCircle className="w-10 h-10 text-green-500" />
      </div>

      <h1 className="text-3xl font-bold text-[#1a1a2e] mb-4">Thanh toán hoàn tất!</h1>
      <p className="text-[#6b7280] mb-8 text-lg">Cảm ơn bạn đã mua sắm tại Vase. Đơn hàng {orderId} đã được xử lý.</p>

      <div className="bg-white rounded-2xl p-8 mb-10 shadow-[0_8px_40px_rgba(70,71,211,0.05)] text-left">
        <h2 className="font-bold text-[#1a1a2e] mb-5 flex items-center gap-2">
          <Package className="w-5 h-5 text-[#4647d3]" /> Bước tiếp theo
        </h2>
        
        <div className="space-y-6">
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-[#e8e8fc] rounded-full flex items-center justify-center text-[#4647d3] font-bold shrink-0">1</div>
            <div>
              <p className="font-semibold text-[#1a1a2e]">Kiểm tra Email</p>
              <p className="text-sm text-[#6b7280]">Bạn sẽ nhận được thông tin đăng nhập và hướng dẫn sử dụng trong email sau vài phút.</p>
            </div>
          </div>
          
          <div className="flex gap-4">
            <div className="w-8 h-8 bg-[#e8e8fc] rounded-full flex items-center justify-center text-[#4647d3] font-bold shrink-0">2</div>
            <div>
              <p className="font-semibold text-[#1a1a2e]">Quản lý tài khoản</p>
              <p className="text-sm text-[#6b7280]">Bạn cũng có thể xem tất cả tài khoản đã mua trong trang <Link href="/orders" className="text-[#4647d3] hover:underline font-medium">Lịch sử đơn hàng</Link>.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link href="/explore" className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 text-sm font-bold w-full sm:w-auto">
          Tiếp tục mua sắm <ArrowRight className="w-4 h-4" />
        </Link>
        <Link href="/orders" className="bg-white text-[#4647d3] font-bold text-sm px-8 py-3.5 rounded-lg hover:bg-[#eef1f3] transition-colors w-full sm:w-auto">
          Xem đơn hàng
        </Link>
      </div>
    </div>
  );
}

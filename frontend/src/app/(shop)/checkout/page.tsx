// Trang thanh toán — /checkout
'use client';
import { useState } from 'react';
import { useCart } from '@/lib/cart-context';
import { ArrowLeft, Shield, CreditCard, Wallet, Landmark } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function CheckoutPage() {
  const { items, totalPrice, clearCart } = useCart();
  const [email, setEmail] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('momo');
  const router = useRouter();

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return alert('Vui lòng nhập Email để nhận tài khoản');
    
    // Giả lập xử lý thanh toán
    console.log('Processing payment...', { email, paymentMethod, items });
    
    // Xóa giỏ hàng và chuyển hướng đến trang thành công (sẽ tạo sau)
    clearCart();
    router.push('/checkout/success');
  };

  if (items.length === 0) {
    if (typeof window !== 'undefined') router.push('/cart');
    return null;
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <Link href="/cart" className="inline-flex items-center gap-1.5 text-sm text-[#6b7280] hover:text-[#4647d3] mb-8 transition-colors">
        <ArrowLeft className="w-4 h-4" /> Quay lại giỏ hàng
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* ——— Form thông tin ——— */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          <section className="bg-white rounded-xl p-8">
            <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Thông tin nhận hàng</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-[#6b7280] mb-2">Email nhận tài khoản</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-[#f5f7f9] rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-[#4647d3]/20 placeholder-[#6b7280] text-[#1a1a2e] transition-all"
                />
                <p className="text-xs text-[#6b7280] mt-2">Tài khoản và hướng dẫn sẽ được gửi đến email này ngay sau khi thanh toán.</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-xl p-8">
            <h2 className="text-xl font-bold text-[#1a1a2e] mb-6">Phương thức thanh toán</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'momo', name: 'MoMo', icon: <Wallet className="w-5 h-5 text-[#ae3980]" /> },
                { id: 'vnpay', name: 'VNPay', icon: <CreditCard className="w-5 h-5 text-[#005ba1]" /> },
                { id: 'bank', name: 'Chuyển khoản', icon: <Landmark className="w-5 h-5 text-[#4647d3]" /> },
              ].map((method) => (
                <button
                  key={method.id}
                  onClick={() => setPaymentMethod(method.id)}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${
                    paymentMethod === method.id 
                      ? 'border-[#4647d3] bg-[#e8e8fc]/50' 
                      : 'border-transparent bg-[#f5f7f9] hover:bg-[#eef1f3]'
                  }`}
                >
                  {method.icon}
                  <span className="text-sm font-semibold mt-2">{method.name}</span>
                </button>
              ))}
            </div>
          </section>
        </div>

        {/* ——— Tóm tắt đơn hàng ——— */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6 sticky top-20">
            <h2 className="font-semibold text-[#1a1a2e] mb-4">Tóm tắt đơn hàng</h2>
            
            <div className="space-y-3 mb-6">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between items-center text-sm">
                  <span className="text-[#6b7280]">{item.qty}x {item.name}</span>
                  <span className="font-medium">{(item.price * item.qty).toLocaleString('vi-VN')}₫</span>
                </div>
              ))}
            </div>

            <div className="h-px bg-[#f5f7f9] my-4" />
            
            <div className="flex justify-between font-bold text-lg text-[#1a1a2e] mb-6">
              <span>Tổng cộng</span>
              <span className="text-[#4647d3]">{totalPrice.toLocaleString('vi-VN')}₫</span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full btn-primary py-4 font-bold text-sm flex items-center justify-center gap-2 mb-4"
            >
              Hoàn tất thanh toán
            </button>

            <div className="flex items-center gap-2 justify-center text-xs text-[#6b7280]">
              <Shield className="w-3.5 h-3.5 text-green-500" />
              Thanh toán an toàn & bảo mật
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

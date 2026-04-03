// Trang đăng ký — /register
'use client';
import { useState } from 'react';
import { Mail, Lock, User, ArrowRight, Github, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return alert('Mật khẩu xác nhận không khớp');
    }
    // Giả lập xử lý đăng ký
    console.log('Registering...', formData);
    router.push('/login');
  };

  return (
    <div className="flex-1 flex items-center justify-center py-20 px-6 bg-[#f5f7f9]">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4647d3] to-[#9396ff] flex items-center justify-center">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <span className="font-bold text-[#1a1a2e] text-2xl tracking-tight">Vase</span>
          </Link>
          <h1 className="text-2xl font-bold text-[#1a1a2e] mb-2">Tạo tài khoản mới</h1>
          <p className="text-sm text-[#6b7280]">Bắt đầu khám phá thế giới AI Tools ngay hôm nay.</p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(70,71,211,0.06)] border-white border-2">
          <form className="space-y-4" onSubmit={handleRegister}>
            <div>
              <label className="block text-sm font-medium text-[#1a1a2e] mb-1.5">Họ và tên</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b7280] group-focus-within:text-[#4647d3] transition-colors" />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Nguyễn Văn A"
                  className="w-full bg-[#f5f7f9] rounded-xl pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-[#4647d3]/20 placeholder-[#6b7280] text-[#1a1a2e] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1a1a2e] mb-1.5">Email</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b7280] group-focus-within:text-[#4647d3] transition-colors" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="name@example.com"
                  className="w-full bg-[#f5f7f9] rounded-xl pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-[#4647d3]/20 placeholder-[#6b7280] text-[#1a1a2e] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1a1a2e] mb-1.5">Mật khẩu</label>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b7280] group-focus-within:text-[#4647d3] transition-colors" />
                <input
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                  placeholder="••••••••"
                  className="w-full bg-[#f5f7f9] rounded-xl pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-[#4647d3]/20 placeholder-[#6b7280] text-[#1a1a2e] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#1a1a2e] mb-1.5">Xác nhận mật khẩu</label>
              <div className="relative group">
                <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b7280] group-focus-within:text-[#4647d3] transition-colors" />
                <input
                  type="password"
                  required
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                  placeholder="••••••••"
                  className="w-full bg-[#f5f7f9] rounded-xl pl-11 pr-4 py-3 outline-none focus:ring-2 focus:ring-[#4647d3]/20 placeholder-[#6b7280] text-[#1a1a2e] transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full btn-primary py-3.5 font-bold text-sm shadow-lg shadow-[#4647d3]/20 flex items-center justify-center gap-2 mt-2"
            >
              Đăng ký tài khoản <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="relative my-6 text-center">
            <span className="bg-white px-4 text-xs text-[#6b7280] relative z-10 font-medium">Hoặc đăng ký bằng</span>
            <div className="absolute top-1/2 left-0 w-full h-px bg-[#f5f7f9]"></div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 p-3 bg-[#f5f7f9] rounded-xl hover:bg-[#eef1f3] transition-colors">
              <Github className="w-4 h-4" />
              <span className="text-xs font-semibold">Github</span>
            </button>
            <button className="flex items-center justify-center gap-2 p-3 bg-[#f5f7f9] rounded-xl hover:bg-[#eef1f3] transition-colors">
              <div className="w-4 h-4 bg-red-400 rounded-full" />
              <span className="text-xs font-semibold">Google</span>
            </button>
          </div>
        </div>

        <p className="text-center mt-8 text-sm text-[#6b7280]">
          Đã có tài khoản?{' '}
          <Link href="/login" className="text-[#4647d3] font-bold hover:underline">Đăng nhập</Link>
        </p>
      </div>
    </div>
  );
}

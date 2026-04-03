// Trang đăng nhập — /login
'use client';
import { useState } from 'react';
import { Mail, Lock, User, ArrowRight, Github } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Giả lập xử lý đăng nhập
    console.log('Logging in...', { email, password });
    router.push('/');
  };

  return (
    <div className="flex-1 flex items-center justify-center py-20 px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#4647d3] to-[#9396ff] flex items-center justify-center">
              <span className="text-white font-bold text-lg">V</span>
            </div>
            <span className="font-bold text-[#1a1a2e] text-2xl tracking-tight">Vase</span>
          </Link>
          <h1 className="text-3xl font-bold text-[#1a1a2e] mb-2">Chào mừng trở lại!</h1>
          <p className="text-sm text-[#6b7280]">Đăng nhập để quản lý các tài khoản AI của bạn.</p>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-[0_20px_50px_rgba(70,71,211,0.06)] border-white border-2 backdrop-blur-xl">
          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-[#1a1a2e] mb-2">Email</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b7280] group-focus-within:text-[#4647d3] transition-colors" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full bg-[#f5f7f9] rounded-xl pl-11 pr-4 py-3.5 outline-none focus:ring-2 focus:ring-[#4647d3]/20 placeholder-[#6b7280] text-[#1a1a2e] transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-[#1a1a2e]">Mật khẩu</label>
                <Link href="#" className="underline text-xs text-[#4647d3] hover:text-[#9396ff] font-medium">Quên mật khẩu?</Link>
              </div>
              <div className="relative group">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b7280] group-focus-within:text-[#4647d3] transition-colors" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#f5f7f9] rounded-xl pl-11 pr-4 py-3.5 outline-none focus:ring-2 focus:ring-[#4647d3]/20 placeholder-[#6b7280] text-[#1a1a2e] transition-all"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full btn-primary py-4 font-bold text-sm shadow-lg shadow-[#4647d3]/20 flex items-center justify-center gap-2"
            >
              Đăng nhập <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="relative my-8 text-center">
            <span className="bg-white px-4 text-xs text-[#6b7280] relative z-10 font-medium">Hoặc đăng nhập bằng</span>
            <div className="absolute top-1/2 left-0 w-full h-px bg-[#f5f7f9]"></div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 p-3.5 bg-[#f5f7f9] rounded-xl hover:bg-[#eef1f3] transition-colors">
              <Github className="w-4 h-4" />
              <span className="text-xs font-semibold">Github</span>
            </button>
            <button className="flex items-center justify-center gap-2 p-3.5 bg-[#f5f7f9] rounded-xl hover:bg-[#eef1f3] transition-colors">
              <div className="w-4 h-4 bg-red-400 rounded-full" />
              <span className="text-xs font-semibold">Google</span>
            </button>
          </div>
        </div>

        <p className="text-center mt-10 text-sm text-[#6b7280]">
          Chưa có tài khoản?{' '}
          <Link href="/register" className="text-[#4647d3] font-bold hover:underline">Đăng ký ngay</Link>
        </p>
      </div>
    </div>
  );
}

'use client';
import { useState } from 'react';
import Link from 'next/link';
import { 
  Mail, 
  Lock, 
  User, 
  ArrowRight, 
  Eye, 
  EyeOff, 
  CheckCircle2, 
  Github, 
  Chrome,
  Zap
} from 'lucide-react';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-6">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-50/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-50/50 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>

      <div className="w-full max-w-md bg-white rounded-[2rem] border border-[rgba(70,71,211,0.05)] shadow-2xl shadow-indigo-100/50 p-8 md:p-10 animate-in fade-in zoom-in-95 duration-500">
        
        {/* Brand Header */}
        <div className="text-center mb-10">
          <Link href="/" className="inline-block text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#4647d3] via-[#9396ff] to-[#a78bfa] mb-4">
            Vase
          </Link>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
            {isLogin ? 'Chào mừng trở lại!' : 'Bắt đầu cùng Vase'}
          </h2>
          <p className="text-slate-400 mt-2 text-sm">
            {isLogin ? 'Vui lòng đăng nhập để sử dụng dịch vụ của chúng tôi.' : 'Gia nhập cộng đồng người dùng thông minh ngay hôm nay.'}
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          {!isLogin && (
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Họ và tên</label>
              <div className="relative group">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-[#4647d3] transition-colors" />
                <input 
                  type="text" 
                  placeholder="Nhập họ tên đầy đủ..." 
                  className="w-full bg-slate-50 border-none rounded-xl pl-11 pr-4 py-3.5 focus:ring-2 focus:ring-[#4647d3]/10 outline-none placeholder-slate-300 transition-all text-sm"
                />
              </div>
            </div>
          )}

          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest px-1">Email</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-[#4647d3] transition-colors" />
              <input 
                type="email" 
                placeholder="email@example.com" 
                className="w-full bg-slate-50 border-none rounded-xl pl-11 pr-4 py-3.5 focus:ring-2 focus:ring-[#4647d3]/10 outline-none placeholder-slate-300 transition-all text-sm"
              />
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between px-1">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Mật khẩu</label>
              {isLogin && <button className="text-[10px] font-bold text-[#4647d3] hover:underline">Quên mật khẩu?</button>}
            </div>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 group-focus-within:text-[#4647d3] transition-colors" />
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="••••••••" 
                className="w-full bg-slate-50 border-none rounded-xl pl-11 pr-12 py-3.5 focus:ring-2 focus:ring-[#4647d3]/10 outline-none placeholder-slate-300 transition-all text-sm"
              />
              <button 
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-300 hover:text-slate-500 transition-colors"
                type="button"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
          </div>

          <button className="w-full btn-primary py-4 rounded-xl font-bold flex items-center justify-center gap-2 group transition-all shadow-xl shadow-[#4647d3]/20">
            {isLogin ? 'Đăng nhập' : 'Tạo tài khoản'}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Divider */}
        <div className="relative my-8 text-center">
          <div className="absolute top-1/2 left-0 w-full h-px bg-slate-100 -z-10"></div>
          <span className="px-4 bg-white text-[10px] font-bold text-slate-300 uppercase tracking-widest">Hoặc tiếp tục với</span>
        </div>

        {/* Social Auth */}
        <div className="grid grid-cols-2 gap-4 mb-10">
          <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition-all font-bold text-xs text-slate-600">
            <Chrome size={18} className="text-red-500" />
            Google
          </button>
          <button className="flex items-center justify-center gap-2 py-3 rounded-xl border border-slate-100 hover:bg-slate-50 transition-all font-bold text-xs text-slate-600">
            <Github size={18} className="text-slate-900" />
            GitHub
          </button>
        </div>

        {/* Footer Link */}
        <p className="text-center text-sm font-medium text-slate-400">
          {isLogin ? 'Bạn chưa có tài khoản?' : 'Bạn đã có tài khoản?'}
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 font-bold text-[#4647d3] hover:underline"
          >
            {isLogin ? 'Đăng ký ngay' : 'Đăng nhập ngay'}
          </button>
        </p>

        {/* Features Minimal Grid */}
        {!isLogin && (
          <div className="mt-8 pt-8 border-t border-slate-50 grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={12} className="text-emerald-500" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Mật khẩu mã hóa</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={12} className="text-orange-500" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Kích hoạt tức thì</span>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

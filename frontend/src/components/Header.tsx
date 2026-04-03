// Header component với glassmorphism theo DESIGN.md
'use client';

import Link from 'next/link';
import { ShoppingCart, Bell, User, Search } from 'lucide-react';
import { useCart } from '@/lib/cart-context';

export default function Header() {
  const { totalItems } = useCart();

  return (
    <header className="glass sticky top-0 z-50 border-b border-[rgba(70,71,211,0.08)]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-3xl font-black bg-clip-text text-transparent bg-gradient-to-r from-[#4647d3] via-[#9396ff] to-[#a78bfa] tracking-tighter hover:opacity-80 transition-opacity"
        >
          Vase
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 translate-x-4">
          <Link href="/" className="text-sm font-bold text-[#1a1a2e] hover:text-[#4647d3] transition-colors">Trang chủ</Link>
          <Link href="/explore" className="text-sm font-bold text-[#6b7280] hover:text-[#4647d3] transition-colors">Khám phá</Link>
          <Link href="/services" className="text-sm font-bold text-[#6b7280] hover:text-[#4647d3] transition-colors">Dịch vụ</Link>
          <Link href="#" className="text-sm font-bold text-[#6b7280] hover:text-[#4647d3] transition-colors">Hỗ trợ</Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-xl px-3 py-2 mr-2 group focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
            <Search size={16} className="text-slate-400 group-focus-within:text-[#4647d3]" />
            <input 
              type="text" 
              placeholder="Tìm kiếm..." 
              className="bg-transparent text-xs font-bold text-slate-600 outline-none w-32 focus:w-48 transition-all"
            />
          </div>

          <Link href="/cart" className="relative p-2.5 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
            <ShoppingCart className="w-5 h-5 text-[#6b7280]" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#4647d3] text-white text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-white">
                {totalItems}
              </span>
            )}
          </Link>
          
          <button className="p-2.5 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
            <Bell className="w-5 h-5 text-[#6b7280]" />
          </button>

          <div className="h-6 w-px bg-slate-100 mx-1 hidden sm:block" />

          <Link href="/auth" className="hidden sm:block text-sm font-bold text-[#6b7280] hover:text-[#4647d3] transition-colors px-2">
            Đăng nhập
          </Link>

          <Link href="/profile" className="p-2.5 rounded-full bg-[#f1f2ff] hover:bg-[#e8e8fc] transition-all flex items-center justify-center border-2 border-white shadow-sm hover:scale-105 active:scale-95">
            <User className="w-5 h-5 text-[#4647d3]" />
          </Link>
        </div>
      </div>
    </header>
  );
}

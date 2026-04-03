'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Users, 
  Settings, 
  LogOut,
  ChevronRight
} from 'lucide-react';

const MENU_ITEMS = [
  { icon: LayoutDashboard, label: 'Tổng quan', href: '/admin' },
  { icon: Package, label: 'Sản phẩm', href: '/admin/products' },
  { icon: ShoppingCart, label: 'Đơn hàng', href: '/admin/orders' },
  { icon: Users, label: 'Người dùng', href: '/admin/users' },
  { icon: Settings, label: 'Cài đặt', href: '/admin/settings' },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white min-h-screen border-r border-[rgba(70,71,211,0.05)] flex flex-col sticky top-0">
      <div className="p-6 h-16 flex items-center border-b border-[rgba(70,71,211,0.05)]">
        <Link href="/admin">
          <span className="font-extrabold text-2xl tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-[#4647d3] to-[#9396ff]">
            Vase Admin
          </span>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {MENU_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-between px-3 py-2.5 rounded-lg transition-all group ${
                isActive 
                  ? 'bg-[rgba(70,71,211,0.08)] text-[#4647d3]' 
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <item.icon size={20} className={isActive ? 'text-[#4647d3]' : 'text-slate-400 group-hover:text-slate-600'} />
                <span className="font-medium text-sm">{item.label}</span>
              </div>
              {isActive && <ChevronRight size={16} className="text-[#4647d3]" />}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-[rgba(70,71,211,0.05)]">
        <button className="flex items-center gap-3 px-3 py-2.5 w-full text-slate-500 hover:text-red-500 hover:bg-red-50/50 rounded-lg transition-all">
          <LogOut size={20} />
          <span className="font-medium text-sm">Đăng xuất</span>
        </button>
      </div>
    </aside>
  );
}

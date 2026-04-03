import AdminSidebar from '@/components/AdminSidebar';
import { Search, Bell, User } from 'lucide-react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[#f8fafc]">
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col">
        {/* Admin Header */}
        <header className="h-16 bg-white border-b border-[rgba(70,71,211,0.05)] flex items-center justify-between px-8 sticky top-0 z-40">
          <div className="flex items-center gap-4 bg-slate-50 px-4 py-2 rounded-full w-96 group focus-within:ring-2 focus-within:ring-[#4647d3]/20 transition-all">
            <Search size={18} className="text-slate-400 group-focus-within:text-[#4647d3]" />
            <input 
              type="text" 
              placeholder="Tìm kiếm nhanh..." 
              className="bg-transparent border-none outline-none text-sm w-full placeholder:text-slate-400"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-50 transition-colors relative">
              <Bell size={20} />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-[1px] bg-slate-100 mx-2"></div>
            <button className="flex items-center gap-3 pl-2 pr-4 py-1.5 rounded-full hover:bg-slate-50 transition-colors">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#4647d3] to-[#9396ff] flex items-center justify-center text-white font-bold text-xs">
                AD
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-slate-700">Administrator</p>
                <p className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">Quản trị viên</p>
              </div>
            </button>
          </div>
        </header>

        {/* Admin Content */}
        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}

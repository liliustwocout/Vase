'use client';
import { useState } from 'react';
import { 
  User, 
  Wallet, 
  ShoppingBag, 
  Settings, 
  LogOut, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  CreditCard,
  ShieldCheck,
  Zap,
  ArrowUpRight
} from 'lucide-react';

const USER_DATA = {
  name: 'Nguyễn Văn An',
  email: 'an.nguyen@gmail.com',
  balance: '1.250.000đ',
  totalSpent: '4.850.000đ',
  rank: 'Vàng (Gold)',
  joined: '12/01/2026',
  avatar: 'A'
};

const RECENT_ORDERS = [
  { id: 'ORD-8291', service: 'TikTok Follow', amount: '150.000đ', status: 'Completed', date: '03/04/2026' },
  { id: 'ORD-8255', service: 'ChatGPT Plus', amount: '450.000đ', status: 'Completed', date: '28/03/2026' },
  { id: 'ORD-8212', service: 'Facebook Like', amount: '85.000đ', status: 'Processing', date: '25/03/2026' },
];

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Sidebar */}
        <div className="lg:col-span-3 space-y-4">
          <div className="bg-white rounded-3xl border border-[rgba(70,71,211,0.05)] shadow-xl shadow-indigo-50/20 overflow-hidden">
            <div className="p-8 text-center bg-gradient-to-b from-indigo-50/50 to-white">
              <div className="w-20 h-20 bg-gradient-to-tr from-[#4647d3] to-[#9396ff] rounded-2xl mx-auto flex items-center justify-center text-3xl font-black text-white shadow-lg shadow-indigo-200 mb-4 transition-transform hover:scale-105 cursor-pointer">
                {USER_DATA.avatar}
              </div>
              <h3 className="text-xl font-bold text-slate-800">{USER_DATA.name}</h3>
              <p className="text-xs font-bold text-[#4647d3] uppercase tracking-widest mt-1 opacity-70">{USER_DATA.rank} Member</p>
            </div>
            <div className="p-2 space-y-1">
              {[
                { id: 'overview', label: 'Tổng quan', icon: User },
                { id: 'orders', label: 'Đơn hàng', icon: ShoppingBag },
                { id: 'wallet', label: 'Ví tiền', icon: Wallet },
                { id: 'settings', label: 'Cài đặt', icon: Settings },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-6 py-3.5 rounded-2xl text-sm font-bold transition-all ${
                    activeTab === item.id 
                      ? 'bg-[#4647d3] text-white shadow-lg shadow-indigo-100' 
                      : 'text-slate-400 hover:bg-slate-50 hover:text-slate-600'
                  }`}
                >
                  <item.icon size={18} />
                  {item.label}
                </button>
              ))}
              <div className="h-px bg-slate-50 my-2 mx-6" />
              <button className="w-full flex items-center gap-3 px-6 py-3.5 rounded-2xl text-sm font-bold text-red-400 hover:bg-red-50 hover:text-red-500 transition-all">
                <LogOut size={18} />
                Đăng xuất
              </button>
            </div>
          </div>

          <div className="bg-slate-900 rounded-3xl p-6 text-white overflow-hidden relative group">
            <Zap className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10 group-hover:scale-110 transition-transform" />
            <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-2">Hỗ trợ 24/7</p>
            <h4 className="font-bold mb-4 text-sm">Gặp khó khăn khi sử dụng dịch vụ?</h4>
            <button className="w-full py-2.5 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-bold backdrop-blur-md transition-all">
              Liên hệ CSKH
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-9 animate-in fade-in slide-in-from-right-4 duration-500">
          
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-[2rem] border border-[rgba(70,71,211,0.05)] shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Số dư hiện tại</p>
                    <h4 className="text-3xl font-black text-[#4647d3] tracking-tight">{USER_DATA.balance}</h4>
                    <button className="mt-4 flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-indigo-600 transition-colors">
                      Nạp thêm tiền <ArrowUpRight size={14} />
                    </button>
                  </div>
                  <div className="p-4 bg-indigo-50 rounded-2xl text-[#4647d3]">
                    <Wallet size={32} />
                  </div>
                </div>
                <div className="bg-white p-8 rounded-[2rem] border border-[rgba(70,71,211,0.05)] shadow-sm flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Tổng chi tiêu</p>
                    <h4 className="text-3xl font-black text-slate-800 tracking-tight">{USER_DATA.totalSpent}</h4>
                    <p className="mt-4 text-[10px] font-bold text-emerald-500 px-2 py-1 bg-emerald-50 rounded-full inline-block">TIẾT KIỆM 12% QUA RANK</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-2xl text-slate-400">
                    <ShoppingBag size={32} />
                  </div>
                </div>
              </div>

              {/* Recent Orders */}
              <div className="bg-white rounded-[2rem] border border-[rgba(70,71,211,0.05)] shadow-sm overflow-hidden">
                <div className="p-8 border-b border-slate-50 flex items-center justify-between">
                  <h3 className="font-black text-slate-800 tracking-tight">Đơn hàng gần đây</h3>
                  <button onClick={() => setActiveTab('orders')} className="text-sm font-bold text-[#4647d3] hover:underline">Xem tất cả</button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <tbody className="divide-y divide-slate-50">
                      {RECENT_ORDERS.map((order) => (
                        <tr key={order.id} className="hover:bg-slate-50/50 transition-colors">
                          <td className="px-8 py-6 text-sm font-bold text-slate-700">{order.service}</td>
                          <td className="px-8 py-6 text-xs text-slate-400 font-mono">{order.id}</td>
                          <td className="px-8 py-6 font-bold text-slate-800">{order.amount}</td>
                          <td className="px-8 py-6">
                            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase ${
                              order.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' : 'bg-blue-50 text-blue-600'
                            }`}>
                              {order.status === 'Completed' ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                              {order.status === 'Completed' ? 'Thành công' : 'Đang xử lý'}
                            </span>
                          </td>
                          <td className="px-8 py-6 text-right">
                            <button className="p-2 text-slate-300 hover:text-slate-600 transition-colors">
                              <ChevronRight size={20} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div className="bg-white rounded-[2rem] border border-[rgba(70,71,211,0.05)] shadow-sm p-10 space-y-10">
              <div>
                <h3 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
                  <ShieldCheck className="text-[#4647d3]" /> Thông tin cá nhân
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Tên hiển thị</label>
                    <input type="text" defaultValue={USER_DATA.name} className="w-full bg-slate-50 border-none rounded-xl px-4 py-3.5 text-sm font-medium outline-none focus:ring-2 focus:ring-indigo-100" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest px-1">Địa chỉ Email</label>
                    <input type="email" defaultValue={USER_DATA.email} disabled className="w-full bg-slate-50 border-none rounded-xl px-4 py-3.5 text-sm font-medium opacity-60 cursor-not-allowed" />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
                  <CreditCard className="text-[#4647d3]" /> Bảo mật
                </h3>
                <div className="space-y-6">
                  <button className="flex items-center justify-between w-full p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-all group">
                    <div className="text-left">
                      <h4 className="font-bold text-slate-700 text-sm">Thay đổi mật khẩu</h4>
                      <p className="text-xs text-slate-400">Cập nhật mật khẩu mới cho tài khoản của bạn.</p>
                    </div>
                    <ChevronRight size={20} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="flex items-center justify-between w-full p-6 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-all group">
                    <div className="text-left">
                      <h4 className="font-bold text-slate-700 text-sm">Xác thực 2 yếu tố (2FA)</h4>
                      <p className="text-xs text-slate-400 text-emerald-500 font-bold uppercase tracking-widest mt-1">Đang bật</p>
                    </div>
                    <ChevronRight size={20} className="text-slate-300 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-50">
                <button className="px-8 py-3 bg-[#4647d3] text-white rounded-xl font-bold text-sm shadow-xl shadow-indigo-100 hover:bg-[#3b3cb0] transition-all">Lưu thay đổi</button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

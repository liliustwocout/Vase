'use client';
import { useState } from 'react';
import { 
  Save, 
  Globe, 
  Lock, 
  CreditCard, 
  Bell, 
  ShieldCheck, 
  Mail, 
  MessageSquare,
  Smartphone,
  Eye,
  EyeOff,
  ToggleLeft as Toggle,
  Settings as SettingsIcon,
  HelpCircle
} from 'lucide-react';

export default function AdminSettings() {
  const [showApiKey, setShowApiKey] = useState(false);
  const [activeTab, setActiveTab] = useState('general');

  const TABS = [
    { id: 'general', label: 'Chung', icon: Globe },
    { id: 'payment', label: 'Thanh toán', icon: CreditCard },
    { id: 'security', label: 'Bảo mật', icon: Lock },
    { id: 'notifications', label: 'Thông báo', icon: Bell },
  ];

  return (
    <div className="max-w-4xl space-y-6 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Cấu hình hệ thống</h1>
          <p className="text-slate-500 mt-1">Quản lý các thiết lập vận hành cho Vase.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2.5 bg-[#4647d3] text-white rounded-xl font-bold hover:bg-[#3b3cb0] transition-all shadow-lg shadow-indigo-100">
          <Save size={18} />
          <span>Lưu thay đổi</span>
        </button>
      </div>

      {/* Settings Navigation */}
      <div className="flex p-1 bg-white rounded-2xl border border-[rgba(70,71,211,0.05)] shadow-sm overflow-x-auto no-scrollbar">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all whitespace-nowrap ${
              activeTab === tab.id 
                ? 'bg-slate-900 text-white shadow-md' 
                : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
            }`}
          >
            <tab.icon size={18} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Settings Content */}
      <div className="bg-white rounded-3xl border border-[rgba(70,71,211,0.05)] shadow-sm overflow-hidden">
        
        {activeTab === 'general' && (
          <div className="p-8 space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <label className="block">
                  <span className="text-sm font-bold text-slate-700 block mb-2 uppercase tracking-wider text-[10px]">Tên Website</span>
                  <input type="text" defaultValue="Vase - Soft Precision" className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#4647d3]/20 outline-none" />
                </label>
                <label className="block">
                  <span className="text-sm font-bold text-slate-700 block mb-2 uppercase tracking-wider text-[10px]">Email hỗ trợ</span>
                  <input type="email" defaultValue="support@vase.vn" className="w-full bg-slate-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#4647d3]/20 outline-none" />
                </label>
              </div>
              <div className="space-y-4 text-center p-6 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                <div className="w-16 h-16 bg-white rounded-2xl shadow-sm mx-auto flex items-center justify-center text-2xl font-black text-[#4647d3] mb-4">V</div>
                <p className="text-xs font-bold text-slate-500 mb-2">Logo Website (SVG/PNG)</p>
                <button className="px-4 py-2 bg-white text-slate-700 rounded-lg text-xs font-bold border border-slate-200 hover:bg-slate-50">Thay đổi logo</button>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
              <div>
                <h4 className="text-sm font-bold text-slate-800">Chế độ bảo trì</h4>
                <p className="text-xs text-slate-500">Khóa website để nâng cấp hệ thống.</p>
              </div>
              <div className="w-12 h-6 bg-slate-200 rounded-full relative cursor-pointer">
                <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'payment' && (
          <div className="p-8 space-y-8">
            <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl flex gap-3">
              <ShieldCheck className="text-blue-500" size={20} />
              <p className="text-xs text-blue-700 leading-relaxed font-medium">Lưu ý: Mọi giao dịch thành công sẽ được hệ thống nạp tự động vào ví khách hàng dựa trên nội dung chuyển khoản.</p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center font-black text-pink-500">M</div>
                  <div>
                    <h5 className="text-sm font-bold text-slate-800">Cổng MoMo</h5>
                    <p className="text-xs text-slate-400">Tự động check giao dịch 24/7</p>
                  </div>
                </div>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-bold uppercase">Đang chạy</span>
              </div>

              <div className="space-y-4">
                <label className="block">
                  <span className="text-sm font-bold text-slate-700 block mb-2 uppercase tracking-wider text-[10px]">MoMo Api Key</span>
                  <div className="relative">
                    <input type={showApiKey ? "text" : "password"} defaultValue="momo_sk_test_51MzS24Lp0X..." className="w-full bg-slate-50 border-none rounded-xl pl-4 pr-12 py-3 text-sm font-mono focus:ring-2 focus:ring-[#4647d3]/20 outline-none" />
                    <button 
                      onClick={() => setShowApiKey(!showApiKey)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      {showApiKey ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </label>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'security' && (
          <div className="p-8 space-y-6">
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-slate-800">Đổi mật khẩu Admin</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="password" placeholder="Mật khẩu hiện tại" className="bg-slate-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#4647d3]/20 outline-none" />
                <div />
                <input type="password" placeholder="Mật khẩu mới" className="bg-slate-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#4647d3]/20 outline-none" />
                <input type="password" placeholder="Xác nhận mật khẩu" className="bg-slate-50 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-[#4647d3]/20 outline-none" />
              </div>
            </div>
          </div>
        )}

      </div>

      {/* Support Info */}
      <div className="flex items-center justify-between px-4">
        <div className="flex items-center gap-2 text-slate-400">
          <HelpCircle size={16} />
          <span className="text-xs font-medium italic">Vase Admin Engine v1.0.4</span>
        </div>
        <p className="text-xs text-slate-400 font-medium">Cập nhật lần cuối: 10/03/2026</p>
      </div>
    </div>
  );
}

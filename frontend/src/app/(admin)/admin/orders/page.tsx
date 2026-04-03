'use client';
import { useState } from 'react';
import { 
  Search, 
  Filter, 
  MoreVertical, 
  Eye, 
  Download, 
  CheckCircle2, 
  Clock, 
  XCircle,
  AlertCircle,
  CreditCard,
  User,
  Calendar
} from 'lucide-react';

const ORDERS = [
  { id: 'ORD-8291', customer: 'Nguyễn Văn A', email: 'anguyen@gmail.com', total: '150.000đ', status: 'Completed', date: '03/04/2026', type: 'TikTok Follow' },
  { id: 'ORD-8290', customer: 'Lê Thị Kim', email: 'kimle@yahoo.com', total: '450.000đ', status: 'Processing', date: '03/04/2026', type: 'ChatGPT Plus' },
  { id: 'ORD-8289', customer: 'Trần Minh Tâm', email: 'tam.tm@fpt.com', total: '1.200.000đ', status: 'Pending', date: '02/04/2026', type: 'Midjourney Pro' },
  { id: 'ORD-8288', customer: 'Phạm Hoàng', email: 'hoangp@gmail.com', total: '85.000đ', status: 'Cancelled', date: '02/04/2026', type: 'FB Like' },
  { id: 'ORD-8287', customer: 'Hoàng Anh', email: 'anhh@gmail.com', total: '250.000đ', status: 'Completed', date: '01/04/2026', type: 'Canva Pro' },
];

const STATUS_MAP = {
  Completed: { label: 'Hoàn tất', color: 'bg-emerald-50 text-emerald-600', icon: <CheckCircle2 size={12} /> },
  Processing: { label: 'Đang chạy', color: 'bg-blue-50 text-blue-600', icon: <Clock size={12} /> },
  Pending: { label: 'Chờ xử lý', color: 'bg-orange-50 text-orange-600', icon: <AlertCircle size={12} /> },
  Cancelled: { label: 'Đã hủy', color: 'bg-red-50 text-red-600', icon: <XCircle size={12} /> },
};

export default function AdminOrders() {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Quản lý đơn hàng</h1>
        <p className="text-slate-500 mt-1">Theo dõi và xử lý các giao dịch từ khách hàng.</p>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Tổng đơn hôm nay', val: '124', icon: <CreditCard className="text-[#4647d3]" />, bg: 'bg-indigo-50' },
          { label: 'Đang xử lý', val: '12', icon: <Clock className="text-blue-500" />, bg: 'bg-blue-50' },
          { label: 'Đã hoàn thành', val: '108', icon: <CheckCircle2 className="text-emerald-500" />, bg: 'bg-emerald-50' },
          { label: 'Doanh thu ngày', val: '4.2Mđ', icon: <CreditCard className="text-slate-700" />, bg: 'bg-slate-100' },
        ].map((s, i) => (
          <div key={i} className="bg-white p-4 rounded-2xl border border-[rgba(70,71,211,0.05)] flex items-center gap-4 shadow-sm">
            <div className={`p-3 rounded-xl ${s.bg}`}>{s.icon}</div>
            <div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{s.label}</p>
              <p className="text-lg font-bold text-slate-800">{s.val}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white p-2 rounded-2xl border border-[rgba(70,71,211,0.05)] shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex p-1 bg-slate-50 rounded-xl w-full md:w-auto overflow-x-auto no-scrollbar">
          {['All', 'Pending', 'Processing', 'Completed', 'Cancelled'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                activeTab === tab 
                  ? 'bg-white text-[#4647d3] shadow-sm' 
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              {tab === 'All' ? 'Tất cả' : tab === 'Pending' ? 'Chờ duyệt' : tab === 'Processing' ? 'Đang chạy' : tab === 'Completed' ? 'Hoàn tất' : 'Đã hủy'}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto px-2">
          <div className="relative flex-1 md:w-64">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Tìm mã đơn, tên..." 
              className="w-full pl-9 pr-4 py-2 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-[#4647d3]/20 outline-none"
            />
          </div>
          <button className="p-2 bg-slate-50 text-slate-500 rounded-xl hover:bg-slate-100 transition-all">
            <Download size={18} />
          </button>
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-2xl border border-[rgba(70,71,211,0.05)] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-slate-400 text-[10px] font-bold uppercase tracking-widest border-b border-slate-100">
                <th className="px-6 py-4">Mã đơn & Ngày</th>
                <th className="px-6 py-4">Khách hàng</th>
                <th className="px-6 py-4">Sản phẩm</th>
                <th className="px-6 py-4">Tổng cộng</th>
                <th className="px-6 py-4">Trạng thái</th>
                <th className="px-6 py-4 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 text-sm">
              {ORDERS.map((order) => (
                <tr key={order.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <p className="font-mono text-xs font-bold text-[#4647d3] mb-1">{order.id}精</p>
                    <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-medium leading-none">
                      <Calendar size={10} />
                      {order.date}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400">
                        <User size={16} />
                      </div>
                      <div>
                        <p className="font-bold text-slate-700 leading-tight">{order.customer}</p>
                        <p className="text-[10px] text-slate-400">{order.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-medium text-slate-600">{order.type}</p>
                  </td>
                  <td className="px-6 py-4 font-bold text-slate-800">
                    {order.total}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${STATUS_MAP[order.status as keyof typeof STATUS_MAP].color}`}>
                      {STATUS_MAP[order.status as keyof typeof STATUS_MAP].icon}
                      {STATUS_MAP[order.status as keyof typeof STATUS_MAP].label}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-slate-400 hover:text-[#4647d3] hover:bg-indigo-50 rounded-lg transition-all">
                        <Eye size={16} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-all">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

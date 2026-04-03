'use client';
import { useState } from 'react';
import { 
  Search, 
  UserPlus, 
  MoreVertical, 
  Shield, 
  User, 
  Ban, 
  History, 
  Wallet,
  Mail,
  Calendar,
  CheckCircle,
  Filter
} from 'lucide-react';

const USERS = [
  { id: 1, name: 'Nguyễn Văn An', email: 'an.nguyen@gmail.com', role: 'Admin', balance: '1.500.000đ', joined: '12/01/2026', status: 'Active' },
  { id: 2, name: 'Trần Thị Mai', email: 'maitran@yahoo.com', role: 'User', balance: '245.000đ', joined: '15/02/2026', status: 'Active' },
  { id: 3, name: 'Lê Hoàng Minh', email: 'minh.lh@gmail.com', role: 'User', balance: '0đ', joined: '01/03/2026', status: 'Banned' },
  { id: 4, name: 'Phạm Minh Đức', email: 'ducpm@fpt.edu.vn', role: 'User', balance: '850.000đ', joined: '10/03/2026', status: 'Active' },
  { id: 5, name: 'Vũ Hải Yến', email: 'yen.vu@gmail.com', role: 'User', balance: '12.000đ', joined: '25/03/2026', status: 'Active' },
];

export default function AdminUsers() {
  const [search, setSearch] = useState('');

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Quản lý người dùng</h1>
          <p className="text-slate-500 mt-1">Quản lý danh sách khách hàng và phân quyền hệ thống.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
          <UserPlus size={18} />
          <span>Thêm thành viên</span>
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-[rgba(70,71,211,0.05)] shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-indigo-50 text-[#4647d3] rounded-xl">
              <User size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Tổng thành viên</p>
              <p className="text-2xl font-bold text-slate-800 tracking-tight">1,284</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-[rgba(30,41,59,0.03)] shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl">
              <Wallet size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Tổng số dư</p>
              <p className="text-2xl font-bold text-slate-800 tracking-tight">85.4Mđ</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-[rgba(30,41,59,0.03)] shadow-sm">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-red-50 text-red-500 rounded-xl">
              <Ban size={24} />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Tài khoản bị khóa</p>
              <p className="text-2xl font-bold text-slate-800 tracking-tight">14</p>
            </div>
          </div>
        </div>
      </div>

      {/* Control Bar */}
      <div className="bg-white p-4 rounded-2xl border border-[rgba(70,71,211,0.05)] shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input 
            type="text" 
            placeholder="Tìm theo email, tên hoặc ID..." 
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-[#4647d3]/20 outline-none transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-50 text-slate-600 rounded-xl text-sm font-bold hover:bg-slate-100 transition-all">
            <Filter size={16} />
            <span>Lọc</span>
          </button>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl border border-[rgba(70,71,211,0.05)] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 text-slate-400 text-[10px] font-bold uppercase tracking-widest border-b border-slate-100">
                <th className="px-6 py-4">Người dùng</th>
                <th className="px-6 py-4">Vai trò</th>
                <th className="px-6 py-4">Số dư</th>
                <th className="px-6 py-4">Ngày tham gia</th>
                <th className="px-6 py-4">Trạng thái</th>
                <th className="px-6 py-4 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 text-sm">
              {USERS.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center font-bold text-[#4647d3] border border-slate-200/50 shadow-sm">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-slate-700">{user.name}</p>
                        <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-medium">
                          <Mail size={10} />
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5">
                      {user.role === 'Admin' ? (
                        <span className="flex items-center gap-1 px-2 py-0.5 bg-indigo-50 text-[#4647d3] rounded-lg font-bold text-[10px] uppercase">
                          <Shield size={10} />
                          Admin
                        </span>
                      ) : (
                        <span className="text-slate-500 font-medium italic">Thành viên</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-slate-800">{user.balance}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1.5 text-slate-500 font-medium">
                      <Calendar size={14} className="opacity-50" />
                      {user.joined}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${
                      user.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'
                    }`}>
                      {user.status === 'Active' ? <CheckCircle size={10} /> : <Ban size={10} />}
                      {user.status === 'Active' ? 'Hoạt động' : 'Đang khóa'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-slate-400 hover:text-[#4647d3] hover:bg-indigo-50 rounded-lg transition-all" title="Lịch sử giao dịch">
                        <History size={16} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all" title="Khóa tài khoản">
                        <Ban size={16} />
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

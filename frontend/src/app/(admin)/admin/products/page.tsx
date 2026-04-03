'use client';
import { useState } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Edit2, 
  Trash2, 
  ExternalLink,
  Package,
  AlertCircle,
  Tag
} from 'lucide-react';

const PRODUCTS = [
  { id: 1, name: 'ChatGPT Plus (1 Tháng)', category: 'AI Tools', price: '450.000đ', stock: 15, status: 'In Stock', image: 'https://cdn.oaistatic.com/_next/static/media/apple-touch-icon.59f2e898.png' },
  { id: 2, name: 'Midjourney Pro', category: 'Design AI', price: '1.200.000đ', stock: 5, status: 'Low Stock', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6A6R_N_X_vS_t_v8_l_X_X_X_X_X_X_X_X_X_X&s' },
  { id: 3, name: 'Youtube Premium (1 Năm)', category: 'Entertainment', price: '350.000đ', stock: 0, status: 'Out of Stock', image: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png' },
  { id: 4, name: 'Buff 1000 Follow TikTok', category: 'Social Interaction', price: '150.000đ', stock: 999, status: 'In Stock', icon: 'TikTok' },
  { id: 5, name: 'Canva Pro vĩnh viễn', category: 'Design AI', price: '250.000đ', stock: 42, status: 'In Stock', image: 'https://upload.wikimedia.org/wikipedia/en/3/3b/Canva_Logo.png' },
];

export default function AdminProducts() {
  const [search, setSearch] = useState('');

  return (
    <div className="space-y-6 animate-in slide-in-from-bottom-4 duration-500">
      {/* Header Actions */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Quản lý sản phẩm</h1>
          <p className="text-slate-500 mt-1">Quản lý tất cả tài khoản AI và dịch vụ mạng xã hội.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-[#4647d3] text-white rounded-xl font-bold hover:bg-[#3b3cb0] transition-all shadow-lg shadow-indigo-100">
          <Plus size={20} />
          <span>Thêm sản phẩm mới</span>
        </button>
      </div>

      {/* Filters & Search */}
      <div className="bg-white p-4 rounded-2xl border border-[rgba(70,71,211,0.05)] shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96 group">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#4647d3] transition-colors" />
          <input 
            type="text" 
            placeholder="Tìm theo tên hoặc mã SP..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-[#4647d3]/20 outline-none transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 w-full md:w-auto">
          <button className="flex items-center gap-2 px-4 py-2 bg-slate-50 text-slate-600 rounded-xl text-sm font-medium hover:bg-slate-100 transition-all border border-slate-100">
            <Filter size={16} />
            <span>Bộ lọc</span>
          </button>
          <select className="bg-slate-50 text-slate-600 rounded-xl text-sm font-medium px-4 py-2 border border-slate-100 outline-none focus:ring-2 focus:ring-[#4647d3]/20 transition-all">
            <option>Tất cả danh mục</option>
            <option>AI Tools</option>
            <option>Social Interaction</option>
            <option>Design AI</option>
          </select>
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-2xl border border-[rgba(70,71,211,0.05)] shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 text-slate-400 text-[10px] font-bold uppercase tracking-widest border-b border-slate-100">
                <th className="px-6 py-4">Sản phẩm</th>
                <th className="px-6 py-4">Danh mục</th>
                <th className="px-6 py-4">Giá bán</th>
                <th className="px-6 py-4">Kho</th>
                <th className="px-6 py-4">Trạng thái</th>
                <th className="px-6 py-4 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50 text-sm">
              {PRODUCTS.map((product) => (
                <tr key={product.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center overflow-hidden border border-slate-200/50">
                        {product.image ? (
                          <img src={product.image} alt="" className="w-full h-full object-cover" />
                        ) : (
                          <Tag size={20} className="text-slate-400" />
                        )}
                      </div>
                      <div>
                        <p className="font-bold text-slate-700">{product.name}</p>
                        <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">ID: VAS-{1000 + product.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-500 rounded-lg text-xs font-medium">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-bold text-[#4647d3]">
                    {product.price}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Package size={14} className="text-slate-400" />
                      <span className="font-mono text-slate-600">{product.stock}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wide ${
                      product.status === 'In Stock' ? 'bg-emerald-50 text-emerald-600' :
                      product.status === 'Low Stock' ? 'bg-orange-50 text-orange-600' :
                      'bg-red-50 text-red-600'
                    }`}>
                      {product.status === 'In Stock' ? 'Còn hàng' :
                       product.status === 'Low Stock' ? 'Sắp hết' : 'Hết hàng'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-slate-400 hover:text-[#4647d3] hover:bg-indigo-50 rounded-lg transition-all" title="Chỉnh sửa">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all" title="Xóa">
                        <Trash2 size={16} />
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
        
        {/* Pagination */}
        <div className="p-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between">
          <p className="text-xs text-slate-500 font-medium">Hiển thị 1-5 trong tổng số 42 sản phẩm</p>
          <div className="flex gap-2">
            <button disabled className="px-3 py-1.5 text-xs font-bold text-slate-400 bg-white border border-slate-200 rounded-lg cursor-not-allowed">Trước</button>
            <button className="px-3 py-1.5 text-xs font-bold text-slate-700 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-all">Sau</button>
          </div>
        </div>
      </div>

      {/* Inventory Health Banner */}
      <div className="bg-orange-50/60 border border-orange-100 p-4 rounded-2xl flex items-start gap-4">
        <div className="p-2 bg-orange-100 text-orange-600 rounded-xl">
          <AlertCircle size={20} />
        </div>
        <div>
          <h4 className="text-sm font-bold text-orange-800">Cảnh báo tồn kho</h4>
          <p className="text-xs text-orange-700 mt-0.5">Bạn có 3 sản phẩm đang ở mức báo động (dưới 5 account). Vui lòng nạp thêm tài liệu cho hệ thống.</p>
        </div>
      </div>
    </div>
  );
}

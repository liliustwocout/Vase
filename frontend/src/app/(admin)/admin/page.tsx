import { 
  TrendingUp, 
  ShoppingCart, 
  Users, 
  Activity,
  ArrowUpRight,
  ArrowDownRight,
  Package,
  CheckCircle2,
  Clock,
  AlertCircle
} from 'lucide-react';

const STATS = [
  { label: 'Doanh thu tháng', value: '45.280.000đ', trend: '+12.5%', isUp: true, icon: TrendingUp, color: 'text-emerald-500', bg: 'bg-emerald-50' },
  { label: 'Đơn hàng mới', value: '1,284', trend: '+18.2%', isUp: true, icon: ShoppingCart, color: 'text-[#4647d3]', bg: 'bg-indigo-50' },
  { label: 'Khách hàng mới', value: '842', trend: '-2.4%', isUp: false, icon: Users, color: 'text-orange-500', bg: 'bg-orange-50' },
  { label: 'Tỉ lệ thành công', value: '98.5%', trend: '+0.2%', isUp: true, icon: Activity, color: 'text-blue-500', bg: 'bg-blue-50' },
];

const RECENT_ORDERS = [
  { id: '#ORD-7234', customer: 'Nguyễn Văn A', service: 'Buff Follow TikTok', amount: '150.000đ', status: 'Completed', time: '2 phút trước' },
  { id: '#ORD-7233', customer: 'Trần Thị B', service: 'Tài khoản ChatGPT Plus', amount: '450.000đ', status: 'Processing', time: '15 phút trước' },
  { id: '#ORD-7232', customer: 'Lê Văn C', service: 'Buff Like Facebook', amount: '85.000đ', status: 'Pending', time: '1 giờ trước' },
  { id: '#ORD-7231', customer: 'Phạm Minh D', service: 'Youtube Premium 1 năm', amount: '350.000đ', status: 'Completed', time: '3 giờ trước' },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Welcome Section */}
      <div>
        <h1 className="text-2xl font-bold text-slate-800">Chào buổi sáng, Admin! 👋</h1>
        <p className="text-slate-500 mt-1">Dưới đây là tóm tắt tình hình kinh doanh của Vase hôm nay.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STATS.map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl border border-[rgba(70,71,211,0.05)] shadow-sm hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-full ${stat.isUp ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-600'}`}>
                {stat.isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {stat.trend}
              </div>
            </div>
            <p className="text-sm font-medium text-slate-400 mb-1">{stat.label}</p>
            <h3 className="text-2xl font-bold text-slate-800 tracking-tight">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Orders Table */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-[rgba(70,71,211,0.05)] shadow-sm overflow-hidden">
          <div className="p-6 border-b border-[rgba(70,71,211,0.05)] flex items-center justify-between">
            <h3 className="font-bold text-slate-800">Đơn hàng gần đây</h3>
            <button className="text-sm font-semibold text-[#4647d3] hover:underline">Xem tất cả</button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-slate-50 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                  <th className="px-6 py-4">Mã đơn</th>
                  <th className="px-6 py-4">Khách hàng</th>
                  <th className="px-6 py-4">Dịch vụ</th>
                  <th className="px-6 py-4">Số tiền</th>
                  <th className="px-6 py-4">Trạng thái</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 text-sm">
                {RECENT_ORDERS.map((order, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                    <td className="px-6 py-4 font-mono text-xs text-slate-500">{order.id}</td>
                    <td className="px-6 py-4 font-medium text-slate-700">{order.customer}</td>
                    <td className="px-6 py-4 text-slate-600">{order.service}</td>
                    <td className="px-6 py-4 font-bold text-slate-800">{order.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                        order.status === 'Completed' ? 'bg-emerald-50 text-emerald-600' :
                        order.status === 'Processing' ? 'bg-blue-50 text-blue-600' :
                        'bg-orange-50 text-orange-600'
                      }`}>
                        {order.status === 'Completed' ? 'Hoàn tất' :
                         order.status === 'Processing' ? 'Đang xử lý' : 'Chờ xử lý'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* System Overview */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-[rgba(30,41,59,0.03)] shadow-sm">
            <h3 className="font-bold text-slate-800 mb-6">Trình trạng hệ thống</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                <div className="flex items-center gap-3">
                  <Package size={20} className="text-slate-400" />
                  <div>
                    <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">Kho hàng AI</p>
                    <p className="text-xs text-slate-400">12 account sắp hết hạn</p>
                  </div>
                </div>
                <AlertCircle size={18} className="text-orange-500" />
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                <div className="flex items-center gap-3">
                  <Activity size={20} className="text-slate-400" />
                  <div>
                    <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">API Buff</p>
                    <p className="text-xs text-slate-400">3/4 server đang hoạt động</p>
                  </div>
                </div>
                <Clock size={18} className="text-blue-500" />
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50">
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-slate-400" />
                  <div>
                    <p className="text-xs font-bold text-slate-700 uppercase tracking-wider">Thanh toán</p>
                    <p className="text-xs text-slate-400">MoMo, VNPay: OK</p>
                  </div>
                </div>
                <CheckCircle2 size={18} className="text-emerald-500" />
              </div>
            </div>
            <button className="w-full mt-6 py-3 rounded-xl bg-slate-900 text-white text-sm font-bold hover:bg-slate-800 transition-all">
              Báo cáo chi tiết
            </button>
          </div>

          <div className="bg-gradient-to-tr from-[#4647d3] to-[#9396ff] p-6 rounded-2xl text-white shadow-lg shadow-indigo-100">
            <p className="text-xs font-bold uppercase tracking-widest opacity-70 mb-2">Thông báo</p>
            <h4 className="font-bold mb-4">Bạn có 15 yêu cầu hỗ trợ mới cần phản hồi.</h4>
            <button className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg text-sm font-bold backdrop-blur-md transition-all">
              Xử lý ngay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

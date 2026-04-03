// Trang dịch vụ tương tác mạng xã hội — /services
'use client';
import { useState, useMemo } from 'react';
import { 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  MessageCircle, 
  Heart, 
  Users, 
  Eye, 
  Instagram, 
  Youtube, 
  Music2, 
  ExternalLink,
  ShoppingCart,
  Facebook
} from 'lucide-react';
import { useCart } from '@/lib/cart-context';

// Định nghĩa dữ liệu dịch vụ
const SERVICE_DATA = {
  tiktok: {
    name: 'TikTok',
    icon: <Music2 className="w-5 h-5 text-[#ff0050]" />,
    color: '#ff0050',
    options: [
      { id: 'tt-follow', name: 'Tăng Follow', icon: <Users className="w-4 h-4" />, price: 85, unit: 'follower' },
      { id: 'tt-like', name: 'Tăng Tim (Like)', icon: <Heart className="w-4 h-4" />, price: 45, unit: 'tim' },
      { id: 'tt-view', name: 'Tăng View', icon: <Eye className="w-4 h-4" />, price: 5, unit: 'view' },
      { id: 'tt-comment', name: 'Tăng Bình luận', icon: <MessageCircle className="w-4 h-4" />, price: 250, unit: 'cmt' },
    ]
  },
  facebook: {
    name: 'Facebook',
    icon: <Facebook className="w-5 h-5 text-[#1877f2]" />,
    color: '#1877f2',
    options: [
      { id: 'fb-like', name: 'Tăng Like bài viết', icon: <Heart className="w-4 h-4" />, price: 65, unit: 'like' },
      { id: 'fb-follow', name: 'Tăng Follow Profile', icon: <Users className="w-4 h-4" />, price: 110, unit: 'follower' },
      { id: 'fb-page', name: 'Tăng Like Fanpage', icon: <Heart className="w-4 h-4" />, price: 150, unit: 'like' },
      { id: 'fb-view', name: 'Tăng View Video', icon: <Eye className="w-4 h-4" />, price: 12, unit: 'view' },
    ]
  },
  instagram: {
    name: 'Instagram',
    icon: <Instagram className="w-5 h-5 text-[#e1306c]" />,
    color: '#e1306c',
    options: [
      { id: 'ig-follow', name: 'Tăng Follow', icon: <Users className="w-4 h-4" />, price: 95, unit: 'follower' },
      { id: 'ig-like', name: 'Tăng Like', icon: <Heart className="w-4 h-4" />, price: 55, unit: 'like' },
      { id: 'ig-view', name: 'Tăng View Video', icon: <Eye className="w-4 h-4" />, price: 8, unit: 'view' },
    ]
  },
  youtube: {
    name: 'YouTube',
    icon: <Youtube className="w-5 h-5 text-[#ff0000]" />,
    color: '#ff0000',
    options: [
      { id: 'yt-sub', name: 'Đăng ký (Sub)', icon: <Users className="w-4 h-4" />, price: 450, unit: 'sub' },
      { id: 'yt-like', name: 'Tăng Like', icon: <Heart className="w-4 h-4" />, price: 120, unit: 'like' },
      { id: 'yt-view', name: 'Tăng View', icon: <Eye className="w-4 h-4" />, price: 75, unit: 'view' },
    ]
  }
};

type Platform = keyof typeof SERVICE_DATA;

export default function ServicesPage() {
  const { addItem } = useCart();
  const [platform, setPlatform] = useState<Platform>('tiktok');
  const [optionId, setOptionId] = useState(SERVICE_DATA.tiktok.options[0].id);
  const [quantity, setQuantity] = useState(100);
  const [link, setLink] = useState('');

  const currentPlatform = SERVICE_DATA[platform];
  const selectedOption = useMemo(() => 
    currentPlatform.options.find(opt => opt.id === optionId) || currentPlatform.options[0]
  , [currentPlatform, optionId]);

  const totalPrice = selectedOption.price * quantity;

  const handleAddToCart = () => {
    if (!link) {
      alert('Vui lòng nhập Link/URL cần tăng');
      return;
    }
    if (quantity < 10) {
      alert('Số lượng tối thiểu là 10');
      return;
    }

    const platformEmojis: Record<Platform, string> = {
      tiktok: '🎵',
      facebook: '🔵',
      instagram: '📸',
      youtube: '📺'
    };

    addItem({
      id: `${selectedOption.id}-${Date.now()}`,
      name: `${selectedOption.name} ${currentPlatform.name}`,
      price: totalPrice,
      category: 'Dịch vụ MXH',
      emoji: platformEmojis[platform],
      metadata: { link, quantity, platform: currentPlatform.name }
    });

    setLink('');
    alert('Đã thêm dịch vụ vào giỏ hàng!');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="mb-10 text-center lg:text-left">
        <h1 className="text-[2.5rem] font-bold text-[#1a1a2e] mb-2">Dịch vụ Tương tác</h1>
        <p className="text-sm text-[#6b7280]">Tăng tương tác cho mạng xã hội của bạn — Nhanh chóng, An toàn, Bảo mật.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* ——— Cột bên trái: Chọn dịch vụ ——— */}
        <div className="lg:col-span-8 space-y-6">
          
          {/* Chọn Platform */}
          <section className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(70,71,211,0.04)]">
            <h3 className="text-xs font-bold text-[#6b7280] uppercase tracking-widest mb-4">Bước 1: Chọn Nền tảng</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {(Object.keys(SERVICE_DATA) as Platform[]).map((p) => (
                <button
                  key={p}
                  onClick={() => {
                    setPlatform(p);
                    setOptionId(SERVICE_DATA[p].options[0].id);
                  }}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl transition-all ${
                    platform === p 
                      ? 'bg-[#e8e8fc] text-[#4647d3] ring-2 ring-[#4647d3]/20' 
                      : 'bg-[#f5f7f9] text-[#6b7280] hover:bg-[#eef1f3]'
                  }`}
                >
                  <div className="mb-2 scale-125">{SERVICE_DATA[p].icon}</div>
                  <span className="text-sm font-semibold">{SERVICE_DATA[p].name}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Chọn Loại dịch vụ */}
          <section className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(70,71,211,0.04)]">
            <h3 className="text-xs font-bold text-[#6b7280] uppercase tracking-widest mb-4">Bước 2: Chọn Loại hình</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {currentPlatform.options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setOptionId(opt.id)}
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all text-left ${
                    optionId === opt.id 
                      ? 'border-[#4647d3]/30 bg-[#e8e8fc]/30' 
                      : 'border-transparent bg-[#f5f7f9] hover:bg-[#eef1f3]'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    optionId === opt.id ? 'bg-white text-[#4647d3]' : 'bg-[#eef1f3] text-[#6b7280]'
                  }`}>
                    {opt.icon}
                  </div>
                  <div className="flex-1">
                    <p className={`text-sm font-bold ${optionId === opt.id ? 'text-[#4647d3]' : 'text-[#1a1a2e]'}`}>
                      {opt.name}
                    </p>
                    <p className="text-[10px] text-[#6b7280]">Giá: {opt.price}₫ / 1 {opt.unit}</p>
                  </div>
                  {optionId === opt.id && <CheckCircle className="w-5 h-5 text-[#4647d3]" />}
                </button>
              ))}
            </div>
          </section>

          {/* Nhập Link & Số lượng */}
          <section className="bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(70,71,211,0.04)]">
            <h3 className="text-xs font-bold text-[#6b7280] uppercase tracking-widest mb-4">Bước 3: Nhập thông tin</h3>
            <div className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-[#1a1a2e] mb-2 uppercase">Link bài viết / profile</label>
                <div className="relative group">
                  <ExternalLink className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6b7280] group-focus-within:text-[#4647d3]" />
                  <input
                    type="url"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    placeholder="https://www.facebook.com/user/posts/..."
                    className="w-full bg-[#f5f7f9] rounded-xl pl-11 pr-4 py-3.5 outline-none focus:ring-2 focus:ring-[#4647d3]/20 placeholder-[#6b7280] text-sm transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#1a1a2e] mb-2 uppercase">Số lượng cần mua</label>
                  <input
                    type="number"
                    min={10}
                    step={10}
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(0, Number(e.target.value)))}
                    className="w-full bg-[#f5f7f9] rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-[#4647d3]/20 text-sm font-bold transition-all"
                  />
                </div>
                <div className="bg-[#e8e8fc]/20 rounded-xl p-4 flex flex-col justify-center">
                  <p className="text-[10px] text-[#6b7280] uppercase font-bold mb-1">Thành tiền tạm tính</p>
                  <p className="text-xl font-bold text-[#4647d3]">{totalPrice.toLocaleString('vi-VN')}₫</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ——— Cột bên phải: Tóm tắt & Đặt hàng ——— */}
        <div className="lg:col-span-4 sticky top-24">
          <div className="bg-white rounded-2xl p-6 shadow-[0_15px_60px_rgba(70,71,211,0.06)] border-2 border-white/50 backdrop-blur-md">
            <h2 className="font-bold text-[#1a1a2e] mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5 text-[#4647d3]" /> Chi tiết đơn hàng
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#6b7280]">Dịch vụ:</span>
                <span className="font-bold text-[#1a1a2e]">{selectedOption.name}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#6b7280]">Nền tảng:</span>
                <div className="flex items-center gap-1.5 font-bold text-[#1a1a2e]">
                  {currentPlatform.icon}
                  {currentPlatform.name}
                </div>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#6b7280]">Số lượng:</span>
                <span className="font-bold text-[#1a1a2e]">{quantity.toLocaleString('vi-VN')} {selectedOption.unit}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-[#6b7280]">Đơn giá:</span>
                <span className="font-medium text-[#4647d3]">{selectedOption.price}₫ / {selectedOption.unit}</span>
              </div>
            </div>

            <div className="h-px bg-[#f5f7f9] mb-6" />

            <div className="flex justify-between items-end mb-8">
              <span className="text-sm text-[#6b7280] mb-1">Tổng cộng</span>
              <span className="text-3xl font-bold text-[#4647d3] leading-none">
                {totalPrice.toLocaleString('vi-VN')}₫
              </span>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full btn-primary py-4 rounded-xl font-bold text-sm shadow-lg shadow-[#4647d3]/20 flex items-center justify-center gap-2 group transition-all"
            >
              <ShoppingCart className="w-4 h-4" /> 
              Thêm vào giỏ hàng
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="mt-6 space-y-3">
              {[
                { label: 'Giao hàng tức thì 24/7', color: 'text-green-500' },
                { label: 'Không yêu cầu mật khẩu', color: 'text-green-500' },
                { label: 'Bảo hành tụt 1-1', color: 'text-[#4647d3]' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[11px] font-medium text-[#6b7280]">
                  <CheckCircle className={`w-3.5 h-3.5 ${item.color}`} />
                  {item.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQs nhanh */}
      <section className="mt-20 max-w-3xl mx-auto">
        <h3 className="text-xl font-bold text-[#1a1a2e] mb-6 text-center">Câu hỏi thường gặp</h3>
        <div className="space-y-4">
          {[
            { q: 'Dịch vụ có yêu cầu mật khẩu không?', a: 'Tuyệt đối không. Chúng tôi chỉ cần link profile hoặc link bài viết công khai của bạn.' },
            { q: 'Bao lâu thì dịch vụ bắt đầu chạy?', a: 'Hệ thống tự động xử lý ngay sau khi bạn thanh toán thành công. Thông thường mất từ 5-30 phút để bắt đầu.' },
            { q: 'Có bị tụt follow/like sau khi mua không?', a: 'Mọi dịch vụ đều có tỉ lệ tụt tự nhiên rất thấp. Nếu tụt quá 10%, chúng tôi có chính sách bảo hành bù lại miễn phí.' }
          ].map((faq, i) => (
            <div key={i} className="bg-white p-5 rounded-2xl shadow-[0_4px_20px_rgba(70,71,211,0.03)]">
              <p className="font-bold text-sm text-[#1a1a2e] mb-2">{faq.q}</p>
              <p className="text-xs text-[#6b7280] leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

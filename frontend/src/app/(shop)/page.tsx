// Trang chủ — Landing page của Vase
import Link from 'next/link';
import { ArrowRight, Shield, Zap, Users } from 'lucide-react';
import ProductCard from '@/components/ProductCard';

// Dữ liệu mẫu sản phẩm nổi bật
const featuredProducts = [
  { id: '1', name: 'ChatGPT Plus', description: 'Tài khoản ChatGPT Plus chính chủ, truy cập GPT-4, DALL·E 3 và hơn thế nữa.', price: 450000, originalPrice: 600000, category: 'AI Chat', emoji: '🤖', badge: 'Hot' },
  { id: '2', name: 'Midjourney', description: 'Tài khoản Midjourney Pro — tạo hình ảnh AI chất lượng cao không giới hạn.', price: 380000, category: 'AI Art', emoji: '🎨' },
  { id: '3', name: 'Claude Pro', description: 'Tài khoản Claude Pro — AI viết lách, phân tích và lập trình cực mạnh.', price: 420000, originalPrice: 550000, category: 'AI Chat', emoji: '⚡', badge: 'Mới' },
  { id: '4', name: 'Cursor Pro', description: 'IDE AI cho lập trình viên — tự động hoàn thành code và refactor siêu tốc.', price: 350000, category: 'Dev Tool', emoji: '💻' },
  { id: '5', name: 'Perplexity Pro', description: 'AI tìm kiếm thông minh với nguồn trích dẫn rõ ràng, thay thế Google.', price: 290000, category: 'AI Search', emoji: '🔍' },
  { id: '6', name: 'Notion AI', description: 'Workspace thông minh với AI tích hợp — viết, lập kế hoạch và phân tích.', price: 260000, category: 'Productivity', emoji: '📝' },
];

const stats = [
  { value: '12,000+', label: 'Khách hàng tin dùng' },
  { value: '99.9%', label: 'Tỉ lệ giao hàng thành công' },
  { value: '50+', label: 'Loại tài khoản AI' },
  { value: '24/7', label: 'Hỗ trợ khách hàng' },
];

export default function HomePage() {
  return (
    <>
      {/* ——— Hero Section ——— */}
      <section className="relative overflow-hidden">
        {/* Nền gradient nhẹ phía trên */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#e8e8fc]/40 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 pt-20 pb-16 text-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#4647d3] bg-[#e8e8fc] px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 bg-[#4647d3] rounded-full animate-pulse" />
            Nền tảng tài khoản AI #1 Việt Nam
          </span>

          {/* Tiêu đề lớn */}
          <h1 className="text-[3.5rem] font-bold text-[#1a1a2e] leading-tight max-w-3xl mx-auto mb-5">
            Nâng tầm công việc với{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4647d3] to-[#9396ff]">
              AI Tools
            </span>{' '}
            tốt nhất
          </h1>

          <p className="text-base text-[#6b7280] max-w-xl mx-auto mb-8">
            Mua tài khoản AI chính hãng, giao hàng tự động tức thì. Không cần thẻ quốc tế, thanh toán đơn giản qua MoMo.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <Link
              href="/explore"
              className="inline-flex items-center gap-2 btn-primary px-6 py-3 font-semibold text-sm"
            >
              Khám phá sản phẩm <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-white text-[#4647d3] font-semibold text-sm px-6 py-3 rounded-lg hover:bg-[#eef1f3] transition-colors"
            >
              Xem dịch vụ
            </Link>
          </div>
        </div>
      </section>

      {/* ——— Featured Products ——— */}
      <section className="max-w-7xl mx-auto px-6 pb-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-[1.75rem] font-semibold text-[#1a1a2e]">Sản phẩm nổi bật</h2>
            <p className="text-sm text-[#6b7280] mt-1">Được mua nhiều nhất tuần này</p>
          </div>
          <Link href="/explore" className="text-sm font-medium text-[#4647d3] hover:underline flex items-center gap-1">
            Xem tất cả <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>

      {/* ——— Stats / Social Proof ——— */}
      <section className="bg-[#eef1f3] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center mb-12">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-[2.5rem] font-bold text-[#4647d3] leading-none mb-2">{stat.value}</div>
                <div className="text-sm text-[#6b7280]">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Testimonial */}
          <blockquote className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-[#1a1a2e] font-medium mb-4">
              &ldquo;Mình đã tiết kiệm được hàng triệu đồng mỗi tháng nhờ mua tài khoản ChatGPT Plus qua Vase. Giao hàng tự động, không cần chờ đợi.&rdquo;
            </p>
            <cite className="text-sm text-[#6b7280] not-italic">— Nguyễn Minh Trí, Developer tại TP.HCM</cite>
          </blockquote>
        </div>
      </section>

      {/* ——— Tính năng nổi bật ——— */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-[1.75rem] font-semibold text-[#1a1a2e] text-center mb-10">
          Tại sao chọn Vase?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Zap className="w-6 h-6" />, title: 'Giao hàng tự động', desc: 'Nhận tài khoản ngay sau khi thanh toán, 24/7 không cần chờ admin.' },
            { icon: <Shield className="w-6 h-6" />, title: 'Bảo mật tuyệt đối', desc: 'Tài khoản được mã hóa và bảo vệ. Hỗ trợ đổi hàng nếu có sự cố.' },
            { icon: <Users className="w-6 h-6" />, title: 'Hỗ trợ 24/7', desc: 'Đội ngũ hỗ trợ luôn sẵn sàng giải quyết mọi vấn đề của bạn.' },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-6">
              <div className="w-12 h-12 bg-[#e8e8fc] rounded-xl flex items-center justify-center text-[#4647d3] mb-4">
                {item.icon}
              </div>
              <h3 className="font-semibold text-[#1a1a2e] mb-2">{item.title}</h3>
              <p className="text-sm text-[#6b7280] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ——— CTA Banner ——— */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-gradient-to-r from-[#4647d3] to-[#9396ff] rounded-2xl p-10 text-center text-white">
          <h2 className="text-[1.75rem] font-bold mb-3">Sẵn sàng nâng tầm công nghệ?</h2>
          <p className="text-white/80 mb-6 text-sm">Tham gia cùng hơn 12,000 người dùng đang tiết kiệm với Vase mỗi ngày.</p>
          <Link
            href="/explore"
            className="inline-flex items-center gap-2 bg-white text-[#4647d3] font-semibold text-sm px-6 py-3 rounded-lg hover:bg-[#f5f7f9] transition-colors"
          >
            Bắt đầu ngay <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

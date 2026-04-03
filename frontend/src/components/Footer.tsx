// Footer component đơn giản cho Vase
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#eef1f3] mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo + bản quyền */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#4647d3] to-[#9396ff] flex items-center justify-center">
            <span className="text-white font-bold text-xs">V</span>
          </div>
          <span className="text-sm text-[#6b7280]">© 2025 Vase. All rights reserved.</span>
        </div>

        {/* Liên kết */}
        <nav className="flex items-center gap-6">
          {['Về chúng tôi', 'Điều khoản', 'Bảo mật', 'Liên hệ'].map((item) => (
            <Link key={item} href="#" className="text-sm text-[#6b7280] hover:text-[#4647d3] transition-colors">
              {item}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}

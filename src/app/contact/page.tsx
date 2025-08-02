'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Menu, X, ArrowRight } from 'lucide-react';
import { useState } from 'react';

import Link from 'next/link';


// 헤더(상단 네비게이션) 컴포넌트
function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Our Work", href: "/our-work" },
    { label: "Pricing", href: "/#pricing" },
    { label: "About", href: "/about" },
    { label: "Effects", href: "/analysis" },
  ];

  return (
    <header className="w-full px-4 sm:px-8 py-4 flex items-center justify-between border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
              {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/">
            <span className="font-extrabold text-xl sm:text-2xl tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity">
              SnapPlug
            </span>
          </Link>
        </div>
      {/* Right: Navigation and Actions */}
      <div className="flex items-center gap-2 sm:gap-6">
        {/* 데스크탑 메뉴 */}
        <nav className="hidden sm:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium text-sm sm:text-base"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* 데스크탑 Get Started 버튼 */}
        <Link href="/contact">
        <Button size="sm" className="hidden sm:flex bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full w-full sm:w-aut">
          <span className="hidden sm:inline">상담 신청</span>
          <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
        </Button>
        </Link>
        {/* 모바일 햄버거 아이콘 */}
        <button
          className="flex sm:hidden items-center justify-center p-2"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-7 h-7" />
        </button>
      </div>
      {/* 모바일 오버레이 메뉴 */}
      {open && (
        <div className="fixed inset-0 z-50 bg-[#181e29] flex-col">
          <div className="flex items-center justify-between px-6 py-4">
            <Link href="/">
              <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity">
                SnapPlug
              </span>
            </Link>
            <button
              className="p-2"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-7 h-7 text-white" />
            </button>
          </div>
          {/* 내부 메뉴/버튼 영역에만 배경색 적용 */}
          <div className="flex flex-col flex-1 bg-black/90">
            <nav className="flex flex-col gap-6 px-8 mt-8 ">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-white-900 text-base font-medium"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto px-8 pb-8 pt-8">
              <Link href="/contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full w-full sm:w-auto"
              >
                상담 신청 <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 폼 제출 로직
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white pb-48 md:pb-0">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-12 md:py-20 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-gray-900 to-red-900 opacity-30"></div>
        <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-6xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-4 leading-tight">
            <span className="block sm:inline">상담을 시작해보세요.</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 px-4">
            <span className="block sm:inline">AI 자동화 시스템 구축의 가장 중요한 단계는 </span>
            <span className="block sm:inline">바로 상담입니다. 그만큼 간단합니다.</span>
          </p>
        </div>
      </section>
      
      {/* Cal.com Booking Calendar Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Cal.com iframe */}
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              <iframe
                src="https://cal.com/snap-plug/60분-진단컨설팅?language=ko"
                width="100%"
                height="600"
                frameBorder="0"
                title="SnapPlug 상담 예약"
                className="w-full"
              />
            </div>
            
            <div className="text-center mt-4 md:mt-6">
              <p className="text-xs md:text-sm text-gray-400 px-4">
                <span className="block sm:inline">예약이 어려우시다면 </span>
                <span className="block sm:inline">아래 연락처로 직접 문의해주세요.</span>
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          
          {/* Left Section - Contact Form */}
          <div className="space-y-6 md:space-y-8">
            <div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                <span className="block sm:inline">Contact us</span>
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                <span className="block sm:inline">대표님의 AI 자동화 시스템을 구축해보세요. </span>
                <span className="block sm:inline">프로젝트에 대해 알려주시면 </span>
                <span className="block sm:inline">빠른 시일 내에 시작할 수 있도록 도와드리겠습니다.</span>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-300 mb-2">
                  이름
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 rounded-lg p-3 md:p-4 h-10 md:h-12 text-sm"
                  placeholder="이름을 입력해주세요"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-300 mb-2">
                  이메일
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 rounded-lg p-3 md:p-4 h-10 md:h-12 text-sm"
                  placeholder="이메일을 입력해주세요"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-300 mb-2">
                  프로젝트에 대해
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-800/50 border-gray-600 text-white placeholder-gray-400 rounded-lg p-3 md:p-4 min-h-[100px] md:min-h-[120px] resize-none text-sm"
                  placeholder="프로젝트에 대해 자세히 설명해주세요..."
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full w-full sm:w-auto"
              >
                메시지 보내기
              </Button>
            </form>
          </div>

          {/* Right Section - Contact Information */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4 md:space-y-6">
              {/* Email Information */}
              <div className="flex items-start space-x-3 md:space-x-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 md:h-6 md:w-6 text-gray-300" />
                </div>
                <div>
                  <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wide mb-1">
                    이메일
                  </p>
                  <p className="text-sm md:text-lg text-white font-medium">
                    hello@snapplug.app
                  </p>
                </div>
              </div>

              {/* Location Information */}
              <div className="flex items-start space-x-3 md:space-x-4">
               
               
              </div>
            </div>

            {/* Additional Information */}
            <div className="bg-gray-800/50 rounded-lg p-4 md:p-6 border border-gray-700">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">상담 안내</h3>
              <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-gray-300">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400">•</span>
                  <span>1시간 무료 상담으로 프로젝트 분석</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400">•</span>
                  <span>맞춤형 AI 자동화 솔루션 제안</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400">•</span>
                  <span>2주 이내 시스템 구축 가능</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-400">•</span>
                  <span>100% 만족 보장 또는 환불</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
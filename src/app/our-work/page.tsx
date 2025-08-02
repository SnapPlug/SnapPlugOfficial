'use client';


import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, Clock, TrendingUp, Users, Zap, Menu, X } from 'lucide-react';
import { useState } from 'react';


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

export default function OurWorkPage() {
  const portfolios = [
    {
      id: 1,
      title: "R종합학원",
      category: "교육업",
      image: "https://snapplug.vercel.app/images/Demo1.png",
      description: "R종합학원은 학생 상담 시 진단 테스트를 진행해서 학생별 맞춤 상담 및 성적 향상 로드맵을 제공하는 특장점이 있는 학원입니다. 기존의 상담 프로세스는 전화나 문자로 상담예약을 받아서 일정을 조율하고 진단테스트가 포함된 상담을 수동으로 처리하고 있었습니다. R종합학원 원장님은 하루에 12시간 이상 일을 하셨는데, 수업과 상담을 병행할 시간이 부족했습니다.",
              solution: "R종합학원은 SnapPlug와 함께 학생 상담 프로세스를 완전 자동화했습니다. 상담 예약부터 진단 테스트, 맞춤 상담, 성적 향상 로드맵 제공까지 모든 과정을 AI 기반 시스템으로 처리하도록 구축했습니다. 이를 통해 원장님의 업무 시간을 대폭 단축하고 학생들에게 더 나은 서비스를 제공할 수 있게 되었습니다.",
        effect: {
          automationValue: 2250,
          improvementTime: 43.5,
          satisfaction: 100
        },
      
    },
    {
      id: 2,
      title: "A필라테스 스튜디오",
      category: "피트니스",
      image: "https://snapplug.vercel.app/images/Demo2.png",
      description: "A필라테스 스튜디오는 원장님 1:1 특별 케어가 장점인 곳입니다. 그러나 기존에는 예약, 상담요청, 수업시간변경 등을 문자나 카카오톡으로 받아서 수기로 정리를 했었고, 고객들에게 주기적으로 보내는 안내나 마케팅 메시지를 수동으로 보내고 있었습니다. 원장님이 수업중에는 고객 상담이 어려웠고 수동으로 관리하다보니 예약 누락, 고객 만족도 저하, 신규 회원 유치에 어려움이 있었습니다.",
              solution: "A필라테스 스튜디오는 SnapPlug와 함께 예약 시스템과 고객 관리 시스템을 완전 자동화했습니다. 웹사이트를 통해 고객이 예약가능한 시간을 선택할 수 있게 했고 안내 및 마케팅 메세지를 자동으로 발송하는 시스템을 구축했습니다. 이를 통해 원장님의 업무 시간을 대폭 단축하고 고객들에게 더 나은 서비스를 제공할 수 있게 되었습니다.",
        effect: {
          automationValue: 2040,
          improvementTime: 21.7,
          satisfaction: 100
        },
    },
    {
      id: 3,
      title: "H산부인과",
      category: "병원",
      image: "https://snapplug.vercel.app/images/Demo4.png",
      description: "H산부인과는 기존 병원예약 플랫폼으로 환자 예약 및 관리를 자동화하고 계셨다가 불만족하셔서 기존 플랫폼을 버리고 수동으로 환자들을 관리하게된 케이스입니다. 심층컨설팅을 해본 결과, 예약프로세스에 문제가 있었던 것이 아니라 진료 전에 환자들의 상태를 점검하는 '예진' 프로세스에 비효율이 있었습니다. 환자 1명당 간호사 1명이 10분이상 걸리는 예진 프로세스의 개선이 필요했습니다.",
              solution: "H산부인과는 예진/문진 시스템을 완전 자동화 했습니다. 수기로 진행된 예진/문진표를 디지털화 했고, 결과를 실시간으로 취합해서 환자 진료시 참고하여 환자, 간호사, 의사 모두의 만족도를 높였습니다.",
        effect: {
          automationValue: 3125,
          improvementTime: 43.5,
          satisfaction: 100
        },
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white pb-32 md:pb-0">
      <Header />
      {/* Hero Section */}
      <section className="relative py-12 md:py-32 flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-gray-900 to-red-900 opacity-30"></div>
        <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-6xl">
          
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight px-2">
            <span className="block sm:inline">SnapPlug와 함께한 </span>
            <span className="block sm:inline">경험을 확인해보세요.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 px-4 leading-relaxed">
          <span className="block sm:inline">대표님의 시간도 아끼고 싶다면 </span>
          <span className="block sm:inline">지금 바로 상담 신청하세요.</span>
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm sm:text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full shadow-lg flex items-center mx-auto"
            >
              상담 신청하기 <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Portfolio Projects */}
      <section className="py-12 md:py-24 bg-gray-900">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          {portfolios.map((portfolio, index) => (
            <div key={portfolio.id} className="mb-16 md:mb-32 last:mb-0 border border-gray-600 rounded-2xl p-4 md:p-8 shadow-xl bg-gray-800/30">
              {/* Project Layout: Left Text + Right Image */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left: Text Content */}
                <div className="space-y-4 md:space-y-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-700 text-gray-300 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">AI 자동화</span>
                    <span className="bg-gray-700 text-gray-300 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">{portfolio.category}</span>
                    <span className="bg-gray-700 text-gray-300 px-2 md:px-3 py-1 rounded-full text-xs md:text-sm">시스템 구축</span>
                  </div>        
                  {/* Effect */}
                  <div className="mt-6 md:mt-8 bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-xl p-4 md:p-6 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6 leading-tight">
                      {portfolio.title}
                    </h2>
                    <div className="grid grid-cols-3 gap-3 md:gap-6">
                      <div className="text-center rounded-lg p-3 md:p-4">
                        <div className="text-gray-300 mb-2" style={{ fontSize: '0.625rem' }}>자동화 효과</div>
                        <div className="text-xl md:text-3xl lg:text-4xl font-bold text-blue-400">
                          {portfolio.effect.automationValue.toLocaleString()}
                        </div>
                        <div className="text-gray-300" style={{ fontSize: '0.625rem' }}>만원/1년</div>
                      </div>
                      <div className="text-center rounded-lg p-3 md:p-4">
                        <div className="text-gray-300 mb-2" style={{ fontSize: '0.625rem' }}>개선 시간</div>
                        <div className="text-xl md:text-3xl lg:text-4xl font-bold text-blue-300">
                          {portfolio.effect.improvementTime}
                        </div>
                        <div className="text-gray-300" style={{ fontSize: '0.625rem' }}>시간/월</div>
                      </div>
                      <div className="text-center rounded-lg p-3 md:p-4 ">
                        <div className="text-gray-300 mb-2" style={{ fontSize: '0.625rem' }}>만족도</div>
                        <div className="text-xl md:text-3xl lg:text-4xl font-bold text-purple-300">
                          {portfolio.effect.satisfaction}
                        </div>
                        <div className="text-gray-300" style={{ fontSize: '0.625rem' }}>%</div>
                      </div>
                    </div>
                  </div>    
                  {/* Description */}
                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                    {portfolio.description}
                  </p>
                  {/* Solution */}
                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                    {portfolio.solution}
                  </p>               

                </div>

                {/* Right: Project Image */}
                <div className="relative">
                  <div className="relative w-full">
                    <img
                      src={portfolio.image}
                      alt={portfolio.title}
                      className="rounded-lg shadow-2xl w-full border border-gray-600"
                    />
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-900 via-gray-900 to-purple-900">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-white">
            대표님의 비즈니스도 자동화해보세요
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto px-4 leading-relaxed">
            <span className="block sm:inline">SnapPlug와 함께라면 2주 안에 </span>
            <span className="block sm:inline">대표님만의 AI 자동화 시스템을 </span>
            <span className="block sm:inline">구축할 수 있습니다.</span>
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm sm:text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full shadow-lg flex items-center mx-auto"
            >
              무료 상담 신청하기 <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
} 
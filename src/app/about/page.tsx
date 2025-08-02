'use client';

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/splite";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AnimatedText } from "@/components/ui/animated-text";
import { ThemeProvider } from "@/components/theme-provider";
import { 
  ArrowRight, 
  Check, 
  Zap, 
  Shield, 
  Users, 
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Star,
  Menu,
  X,
  Search,
  Settings,
  BarChart3,
  FileText,
  MessageSquare,
  Activity,
  Headphones,
  TrendingUp,
  Heart,
  Target,
  Clock,
  Infinity,
  Sparkles,
  Lightbulb,
  Handshake,
  Rocket,
  Coffee
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import Image from "next/image";
import { Component as ImageAutoSlider } from "@/components/ui/image-auto-slider";
import { Marquee3D } from "@/components/ui/marquee-3d";
import { PixelImage } from "@/components/magicui/pixel-image";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { BrandsGrid } from "@/components/ui/brands";
import { PinContainer } from "@/components/ui/3d-pin";
import { FeatureCard } from "@/components/ui/grid-feature-cards";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Link from "next/link";

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

// 푸터(하단) 컴포넌트
function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8 md:py-12 mb-48 md:mb-0">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-6 md:gap-8">
          <div>
            <h3 className="font-bold text-lg md:text-xl mb-3 md:mb-4">SnapPlug</h3>
            <p className="text-gray-400 mb-3 md:mb-4 text-sm md:text-base">
              AI 기술로 업무 생산성을 혁신하는 플랫폼
            </p>
            <p className="text-gray-400 mb-3 md:mb-4 text-xs md:text-sm">
              상호명: 스냅플러그 (SnapPlug)
              <br/>
              대표: 정해성
              <br/>
              사업자등록번호: 551-10-02859
              <br/>  
              Email: hello@snapplug.app
              <br/>
            </p>
          </div>
        </div>
        
        <Separator className="my-6 md:my-8 bg-gray-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-xs md:text-sm">
            © 2025 SnapPlug. All rights reserved.
          </p>
          <div className="flex gap-4 md:gap-6 text-xs md:text-sm text-gray-400 mt-3 md:mt-0">
            <a href="#" className="hover:text-white transition">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition">이용약관</a>
            <a href="#" className="hover:text-white transition">쿠키 정책</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// About 페이지 메인 컴포넌트
export default function AboutPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <Header />
      <main className="bg-gray-900 pb-0 md:pb-0">
        {/* Hero Section */}
        <section className="relative py-12 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-900 to-purple-900 opacity-30"></div>
          <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="text-center">
              <Badge variant="secondary" className="mb-4 md:mb-6 bg-blue-600 text-white text-sm">
                ✨ About
              </Badge>
              <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 leading-tight px-2">
                <span className="text-white">
                  <span className="block sm:inline">우리가 SnapPlug를 </span>
                  <span className="block sm:inline">시작한 이유</span>
                </span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
                <span className="text-blue-400 font-semibold">
                  <span className="block sm:inline">혼자서도 사업을 할 수 있지만, </span>
                  <span className="block sm:inline">혼자서는 너무 버거운 대표님을 위해</span>
                </span>
                <br />
                <span className="block sm:inline">우리는 사람 중심의 AI 자동화 </span>
                <span className="block sm:inline">서비스를 시작했습니다.</span>
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 md:py-20 bg-gray-800">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div>
                <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold mb-4 md:mb-3 text-white leading-tight">
                  <span className="block sm:inline">우리는 대표님의 일을 </span>
                  <span className="block sm:inline">대신하지 않습니다</span>
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed mb-4 md:mb-6">
                  <span className="block sm:inline">대신 대표님과 함께 앉아, 이야기를 듣고, </span>
                  <span className="block sm:inline">흐름을 그려보고, 그 안에서 반복되는 </span>
                  <span className="block sm:inline">수고와 비효율을 발견해냅니다. </span>
                  <span className="block sm:inline">그리고 그 자리에 AI를 정확히 꽂아 넣습니다.</span>
                </p>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                  <span className="block sm:inline">개발부터 납품까지 단 2주 안에 이뤄지고, </span>
                  <span className="block sm:inline">고객이 처음에 정의한 범위 안에서라면, </span>
                  <span className="block sm:inline">무제한으로 수정하며 함께 개선해 나갑니다.</span>
                </p>
              </div>
              <div className="relative">
                <Card className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 border border-blue-500/20 md:p-4">
                  <CardHeader>
                    <CardTitle className="text-white flex items-center gap-1 text-2xl md:text-3xl">
                      SnapPlug의 철학
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs md:text-base text-gray-300 leading-relaxed">
                      <span className="block sm:inline">SnapPlug는 기술보다 사람이 먼저인 팀입니다. </span>
                      <span className="block sm:inline">AI는 어디에나 있지만, 대표님의 일을 진심으로 이해하고 제대로 자동화해주는 팀은 드물다고 생각합니다.</span>
                    </p>
                    <p className="text-xs md:text-base text-gray-300 leading-relaxed mt-4">
                      그래서 우리는 이 일을 직접 하기로 했습니다.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="py-12 md:py-20 bg-gray-900">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white leading-tight">
                <span className="block sm:inline">SnapPlug의 가치</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed">
                <span className="block sm:inline">우리가 추구하는 가치와 철학을 통해 </span>
                <span className="block sm:inline">대표님의 비즈니스를 혁신합니다.</span>
              </p>
            </div>
            
            <div className="space-y-6 md:space-y-8">
              {/* Philosophy 1 */}
              <Card className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/20">
                <CardContent className="p-4 md:p-8">
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center">
                        <Target className="h-4 w-4 md:h-6 md:w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 leading-tight">
                        <span className="block sm:inline">진짜 자동화는, 진짜 이해에서 </span>
                        <span className="block sm:inline">시작됩니다</span>
                      </h3>
                      <p className="text-xs md:text-base text-gray-300 leading-relaxed">
                        <span className="block sm:inline">우리는 &ldquo;이 버튼 눌러보세요&rdquo; 같은 </span>
                        <span className="block sm:inline">매뉴얼을 만들지 않습니다. </span>
                        <span className="block sm:inline">우리는 &ldquo;대표님의 일이 어떻게 돌아가는지&rdquo;부터 </span>
                        <span className="block sm:inline">함께 알아갑니다. </span>
                        <span className="block sm:inline">자동화는 기술이 아니라 해석이고, 설계입니다.</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Philosophy 2 */}
              <Card className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/20">
                <CardContent className="p-4 md:p-8">
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 md:w-12 md:h-12 bg-purple-600 rounded-full flex items-center justify-center">
                        <Handshake className="h-4 w-4 md:h-6 md:w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 leading-tight">
                        <span className="block sm:inline">일은 혼자 하시더라도, </span>
                        <span className="block sm:inline">설계는 함께합니다</span>
                      </h3>
                      <p className="text-xs md:text-base text-gray-300 leading-relaxed">
                        <span className="block sm:inline">1인 사업가는 누구보다 많은 역할을 감당합니다. </span>
                        <span className="block sm:inline">디자이너, 마케터, 고객응대, 예약관리… </span>
                        <span className="block sm:inline">SnapPlug는 대표님의 이야기를 듣고, AI가 대신할 수 있는 부분과, 대표님만이 할 수 있는 일을 찾아줍니다.</span>
                        
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Philosophy 3 */}
              <Card className="bg-gradient-to-br from-green-900/30 to-blue-900/30 border border-green-500/20">
                <CardContent className="p-4 md:p-8">
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 md:w-12 md:h-12 bg-green-600 rounded-full flex items-center justify-center">
                        <Clock className="h-4 w-4 md:h-6 md:w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 leading-tight">
                        <span className="block sm:inline">2주라는 시간, </span>
                        <span className="block sm:inline">단단한 결과</span>
                      </h3>
                      <p className="text-xs md:text-base text-gray-300 leading-relaxed">
                        <span className="block sm:inline">진단 → 설계 → 개발 → 테스트 </span>
                        <span className="block sm:inline">진단이 완료된 후 정확히 2주 안에 끝납니다. </span>
                        <span className="block sm:inline">짧지만 밀도 있는 2주간의 협업을 통해, </span>
                        <span className="block sm:inline">완성도 높은 맞춤형 자동화 시스템을 제공합니다.</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Philosophy 4 */}
              <Card className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/20">
                <CardContent className="p-4 md:p-8">
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 md:w-12 md:h-12 bg-orange-600 rounded-full flex items-center justify-center">
                        <Infinity className="h-4 w-4 md:h-6 md:w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 leading-tight">
                        <span className="block sm:inline">&ldquo;무제한 수정&rdquo;이라는 </span>
                        <span className="block sm:inline">약속의 의미</span>
                      </h3>
                      <p className="text-xs md:text-base text-gray-300 leading-relaxed">
                        <span className="block sm:inline">처음 함께 정의한 범위 내라면, </span>
                        <span className="block sm:inline">디테일은 무제한으로 조율합니다. </span>
                        <span className="block sm:inline">대표님이 &ldquo;정말 만족했다&rdquo;고 느낄 때까지, </span>
                        <span className="block sm:inline">우리는 계속 다듬고, 개선하고, 함께 갑니다. </span>
                        <span className="text-xs md:text-sm text-gray-400 block mt-2">
                          (단, 새로운 기능 추가나 구조 변경은 별도 협의가 필요합니다.)
                        </span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Philosophy 5 */}
              <Card className="bg-gradient-to-br from-indigo-900/30 to-blue-900/30 border border-indigo-500/20">
                <CardContent className="p-4 md:p-8">
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-8 h-8 md:w-12 md:h-12 bg-indigo-600 rounded-full flex items-center justify-center">
                        <Coffee className="h-4 w-4 md:h-6 md:w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white mb-3 md:mb-4 leading-tight">
                        <span className="block sm:inline">기술은 수단, 목적은 </span>
                        <span className="block sm:inline">대표님의 여유입니다</span>
                      </h3>
                      <p className="text-xs md:text-base text-gray-300 leading-relaxed">
                        <span className="block sm:inline">SnapPlug의 목표는 단 하나입니다. </span>
                        <span className="block sm:inline">대표님이 정말 중요한 일에만 집중할 수 있도록, </span>
                        <span className="block sm:inline">시간과 에너지를 돌려드리는 것.</span>
                      </p>
                      <p className="text-xs md:text-base text-gray-300 leading-relaxed">
                        <span className="block sm:inline">대표님은 더 이상, </span>
                        <span className="block sm:inline">메일을 보내고, 고객을 응대하고, 예약을 정리하느라 밤을 새우지 않아도 됩니다.</span>
                       
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-20 bg-gradient-to-r from-blue-900 via-gray-900 to-purple-900">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-white leading-tight px-2">
                <span className="block sm:inline">SnapPlug는 대표님이 </span>
                <span className="block sm:inline">&ldquo;혼자라서 막막했던 일들&rdquo;에 </span>
                <span className="block sm:inline">가장 현실적인 자동화 파트너가 </span>
                <span className="block sm:inline">되겠습니다</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed px-4">
                <span className="block sm:inline">지금까지 미뤄왔던 자동화, </span>
                <span className="block sm:inline">지금 우리와 함께 시작해보세요. </span>
                <span className="text-blue-400 font-semibold block sm:inline"> 정말로 바뀝니다.</span>
              </p>
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full w-full sm:w-auto"
                >
                  지금 시작하기 <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </ThemeProvider>
  );
} 
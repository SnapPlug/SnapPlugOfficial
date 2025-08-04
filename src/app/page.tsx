'use client';

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AboutUsSection } from "@/components/ui/about-us-section";
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
  MessageCircle,
  Clock,
  RefreshCw
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion } from 'motion/react';
import { SlidingNumber } from '@/components/ui/sliding-number';
import Script from 'next/script';

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
import { ReactLenis } from 'lenis/react';
import HeroScrollAnimation from "@/components/ui/hero-scroll-animation";
import { TestimonialsMarquee } from "@/components/ui/testimonials-marquee";

import Link from "next/link";
import { generateAvatar, generatePersonaAvatar, generateBoringAvatar } from "@/lib/utils";
import { trackConsultationClick, trackScrollDepth } from "@/components/analytics";

// SEO를 위한 구조화된 데이터
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SnapPlug",
  "description": "AI 자동화 시스템 전문 기업",
  "url": "https://snapplug-oouowsxsn-jasonjeongs-projects.vercel.app",
  "logo": "https://snapplug-oouowsxsn-jasonjeongs-projects.vercel.app/images/SnapPlugLogo.png",
  "sameAs": [
    "https://github.com/SnapPlug"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": "Korean"
  },
  "service": {
    "@type": "Service",
    "name": "AI 자동화 시스템 개발",
    "description": "2주 안에 완성되는 맞춤형 AI 자동화 시스템",
    "provider": {
      "@type": "Organization",
      "name": "SnapPlug"
    },
    "areaServed": "KR",
    "serviceType": "AI 자동화 솔루션"
  }
};

// SlidingNumberBasic 컴포넌트
function SlidingNumberBasic() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue1(prev => {
        if (prev >= 2470) {
          clearInterval(interval);
          return 2470;
        }
        return prev + 50;
      });
    }, 90);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue2(prev => {
        if (prev >= 36.2) {
          clearInterval(interval);
          return 36.2;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue3(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 25);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ y: 0, fontSize: "24px" }}
      animate={{ y: 0, fontSize: "24px" }}
      transition={{
        ease: [1, 0, 0.35, 0.95],
        duration: 1.5,
        delay: 0.3,
      }}
      className="leading-none text-black dark:text-white"
    >
      <div className="grid grid-cols-3 gap-8 font-mono">
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="text-sm text-gray-600 dark:text-gray-300">자동화 가치</div>
          <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-800 dark:text-blue-600 text-center">
            <SlidingNumber value={value1} />
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">만원/1년</div>
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="text-sm text-gray-600 dark:text-gray-300">개선 시간</div>
          <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-600 dark:text-blue-400 text-center">
            <SlidingNumber value={value2} />
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">시간/월</div>
        </div>
        <div className="flex flex-col items-center gap-2 text-center">
          <div className="text-sm text-gray-600 dark:text-gray-300">대표님 만족도</div>
                      <div className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-purple-600 dark:text-purple-400 text-center">
              {value3}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">%</div>
        </div>
      </div>
    </motion.div>
  );
}

// 전체 페이지 컴포넌트 및 주요 섹션별 주석 추가

// Next.js 및 UI 컴포넌트 import

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

// HeroSection: 메인 랜딩(첫 화면) 섹션
function HeroSection() {
  // 스크롤 깊이 추적
  useEffect(() => {
    const cleanup = trackScrollDepth();
    return cleanup;
  }, []);

  return (
    <section className="relative min-h-400 flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900">
            {/* Mobile layout - 3D 배경에 텍스트 오버레이 */}
      <div className="md:hidden relative min-h-[60vh] flex items-center px-4">
        {/* Background 3D Element - 전체 화면 배경 */}
        <div className="absolute inset-0 flex justify-end items-start">
          <div className="w-full h-full scale-80 opacity-50">
            <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
          </div>
        </div>
        
        {/* Text Content - 배경 위에 오버레이 */}
        <div className="relative z-0 w-full">
          <Badge variant="secondary" className="mb-3 text-xs">
            ✨ 나만의 AI 자동화 시스템
          </Badge>
          <h1 className="text-2xl sm:text-2xl font-bold mb-3 text-white leading-tight">
            대표님은 퇴근하세요.
            <br />
            이젠, AI가 출근합니다.
          </h1>
          
          <div className="mb-4">
            <span className="text-blue-400 text-3xl sm:text-3xl font-bold">
              <AnimatedText 
                phrases={[
                  "2주 안에 완성되는",
                  "나만의 AI 자동화 시스템"
                ]}
                interval={2000}
                className="inline-block"
              />
            </span>
          </div>
          
          <p className="text-xs sm:text-sm text-gray-300 mb-4 mt-10 leading-relaxed">
            매일 직접해야 했던 예약 문자, 고객 관리, 알림 전송…
            <br />혼자서 버겁지 않으셨나요? 
            <br />이젠 AI가 대신합니다.
            <br />단 2주만에 대표님만을 위한 AI 자동화 시스템이 완성됩니다.
          </p>
          
          <div className="flex flex-col gap-3">
            <Link href="/contact">
              <Button 
                size="sm" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full w-full sm:w-auto"
                onClick={trackConsultationClick}
              >
                상담 일정 잡기
                <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Desktop: 이미지처럼 왼쪽 텍스트, 오른쪽 3D 요소 */}
      <div className="hidden md:flex container mx-auto px-4 md:px-8 items-center justify-between min-h-screen">
        {/* Left: Text Content */}
        <div className="flex-1 max-w-2xl pr-8">
          <Badge variant="secondary" className="mb-6 text-sm">
            ✨ 나만의 AI 자동화 시스템
          </Badge>
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-white leading-tight">
            대표님은 퇴근하세요.
            <br />
            이젠, AI가 출근합니다.
          </h1>
          
          <div className="mb-24">
            <span className="text-blue-400 text-5xl lg:text-6xl font-bold">
                <AnimatedText 
                  phrases={[
                    "2주 안에 완성되는",
                    "나만의 AI 자동화 시스템"
                  ]}
                  interval={2000}
                  className="inline-block"
                />
              </span>
            </div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
            매일 직접해야 했던 예약 문자, 고객 관리, 알림 전송…
            <br />혼자서 버겁지 않으셨나요? 
            <br />이젠 AI가 대신합니다.
            <br />단 2주만에 대표님만을 위한 AI 자동화 시스템이 완성됩니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full w-full sm:w-auto"
                onClick={trackConsultationClick}
              >
              상담 일정 잡기
                <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </Link>
          </div>
        </div>
        
        {/* Right: 3D Element */}
        <div className="flex-1 flex items-center justify-center">
          <div className="w-full max-w-2xl h-[600px]">
            <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
            </div>
        </div>
      </div>
    </section>
  );
}


// 서비스 소개 섹션 (SnapPlug의 3가지 약속 등)
function ServicesSection() {
  const services = [
    {
      icon: MessageCircle,
      title: "먼저 듣겠습니다.",
      description: "묻지 않고 만드는 자동화는 의미 없습니다.\n일, 고민, 그리고 혼자 감당해온 반복된 수고까지.\n그 모든 이야기를 바탕으로,\nAI 자동화가 필요한 ‘진짜 이유’부터 찾아냅니다."
    },
    {
      icon: Clock,
      title: "2주면 충분합니다.",
      description: "대표님 맞춤형 자동화 시스템을\n딱 2주 안에 완성해드립니다."
    },
    {
      icon: RefreshCw,
      title: "불만족? 망설이지 마세요.",
      description: "100% 환불 또는 무제한 업데이트\n심층 컨설팅을 통해 정해진 스코프 내에서\n대표님이 만족할 때까지 무제한 업데이트를 드립니다."
    },
    
  ];

  return (
    <section id="services" className="py-8 sm:py-12 md:py-20 bg-gray-800 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-6 sm:mb-8 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3 md:mb-4 text-gray-900 dark:text-white">SnapPlug의 3가지 약속</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
            AI는 반복을, 대표님은 중요한 일을 하세요.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-8 mb-8 sm:mb-12">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardHeader className="pb-3 sm:pb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2 sm:mb-3 md:mb-4">
                  <service.icon className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
                </div>
                <CardTitle className="text-base sm:text-lg md:text-xl text-gray-900 dark:text-white leading-tight">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xs sm:text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
// 포트폴리오(Portfolio) 섹션: 상단 문구, PixelImage, ImageAutoSlider, Marquee3D
function PortfolioSection() {
  return (
    <section id="portfolio" className="py-12 md:py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-8">
        {/* 상단 문구 */}
        <div className="flex flex-col items-center mb-8 md:mb-16">
          <span className="inline-block px-3 py-1 mb-4 md:mb-6 rounded-full bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-200 text-xs font-semibold tracking-widest uppercase">✨ Our Work</span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-center mb-3 md:mb-4 text-gray-900 dark:text-white leading-relaxed px-4">
            <span className="block md:inline">대표님의 시간을 벌어주는 </span>
            <span className="block md:inline">경험을 만듭니다.</span>
          </h1>
        </div>
        
        {/* SlidingNumber 애니메이션 */}
        <div className="flex justify-center mb-4 md:mb-4">
          <SlidingNumberBasic />
        </div>
        
        {/* 무한 스크롤 이미지 슬라이더 */}
        <ImageAutoSlider />
        
        {/* 더 알아보기 버튼 */}
        <div className="flex justify-center mt-8 md:mt-12 px-4">
          <Link href="/our-work">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full w-full sm:w-auto"
            >
              자세히 보기
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}


// 단계별 로드맵 섹션
function RoadmapSection() {
  const steps = [
    {
      step: "Step 1",
      title: "오직 대표님만의 맞춤형 솔루션을 찾아보세요.",
      
      
    },
    {
      step: "Step 2",
      image: "/images/demo3.png"
    },
    {
      step: "Step 3", 
      title: "대표님의 시간을 아껴보세요.",
      description: "대표님의 고민을 함께 해결해드립니다.",
      status: "In Progress"
    }
  ];

  return (
    <section className="py-8 sm:py-12 bg-gray-900 dark:bg-gray-900 flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center mb-8 sm:mb-16 px-4">
      <span className="inline-block px-3 sm:px-4 py-1 mb-4 sm:mb-6 rounded-full bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-200 text-xs font-semibold tracking-widest uppercase">✨ Our Process</span>
              <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white leading-relaxed">
                <span className="block sm:inline">지금, 대표님만의 AI 자동화 </span>
                <span className="block sm:inline">시스템을 만나보세요.</span>
        </h1>
        {steps.map((stepData, index) => (
          <div key={index} className="mb-12 sm:mb-16 last:mb-0 mt-8 sm:mt-12">
            {/* Step Header */}
            <div className="text-center mb-6 sm:mb-8 px-4">
              <div className="inline-block bg-gray-700 text-white px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                {stepData.step}
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 leading-relaxed">
                {stepData.step === "Step 1" ? (
                  <>
                    <span className="block sm:inline">오직 대표님만의 맞춤형 </span>
                    <span className="block sm:inline">솔루션을 찾아보세요.</span>
                  </>
                ) : stepData.step === "Step 3" ? (
                  <>
                    <span className="block sm:inline">대표님은 퇴근하세요. </span>
                    <span className="block sm:inline">이젠, AI가 출근합니다. </span>
                    <p className="text-xs sm:text-sm md:text-base text-gray-200 max-w-2xl mx-auto leading-relaxed">
                          반복되고 귀찮은 일은 이제 그만! 대표님은 중요한 일을 하세요.
                        </p>
                  </>

                ) : (
                  stepData.title
                )}
              </h2>
              
            </div>

            {/* Grid Feature Cards for Step 1 */}
            {stepData.step === "Step 1" && (
              <div className="max-w-6xl mx-auto mb-6 sm:mb-8 px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  <FeatureCard
                    feature={{
                      title: "대표님의 이야기를 들려주세요.",
                      icon: Search,
                      description: "1시간이면 충분해요.\n저희는 듣고, 물어보고, 대표님이 겪고 있던 문제를 찾아냅니다.\n200만원 상당의 진단 컨설팅을 무료로 받아보세요."
                    }}
                    className="bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-lg [&>h3]:text-white [&>p]:text-white [&>svg]:text-white"
                  />
                  <FeatureCard
                    feature={{
                      title: "AI 자동화, 진짜 필요한 곳에만",
                      icon: BarChart3,
                      description: "원하시는 모든 것을 자동화 할 수 있습니다.\n그러나, 아무거나 자동화 해드리지 않습니다.\n함께 나눴던 대화를 토대로 대표님의 사업에 도움이 되는 진짜 솔루션에만 집중합니다."
                    }}
                    className="bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-lg [&>h3]:text-white [&>p]:text-white [&>svg]:text-white"
                  />
                  <FeatureCard
                    feature={{
                      title: "가장 효과적이고 확실한 해결책",
                      icon: Settings,
                      description: "대표님이 겪고있는 문제를 제대로 이해하고,\n비즈니스 목표에 도움이 되는 가장 효과적이고 확실한 솔루션을 제공해드리겠습니다."
                    }}
                    className="bg-gradient-to-r from-gray-800 to-gray-700 border border-gray-600 rounded-lg [&>h3]:text-white [&>p]:text-white [&>svg]:text-white"
                  />
                </div>
              </div>
            )}

            {/* Step 2 오버레이 */}
            {stepData.step === "Step 2" && (
              <div className="flex justify-center mb-6 sm:mb-8 px-4">
                <div className="max-w-4xl w-full relative">
                  <Image
                    src={stepData.image as string}
                    alt={stepData.title || "AI 자동화 시스템 이미지"}
                    width={800}
                    height={600}
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                  {/* Step 2 오버레이 */}
                  <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                    <div className="text-center text-white p-4 sm:p-6 md:p-8">

                      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 sm:mb-4 leading-relaxed">
                        2주 안에 나만의 AI 자동화 <br/>시스템을 완성해보세요.
                      </h2>
                          <p className="text-xs sm:text-sm md:text-base text-gray-200 max-w-2xl mx-auto leading-relaxed">
                          14일이면 충분합니다. 대표님 시간을 아껴보세요.
                        </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            


          </div>
        ))}
      </div>
    </section>
  );
}

// 가격(플랜) 섹션
function PricingSection() {
  return (
    <section id="pricing" className="bg-gradient-to-r from-blue-900 via-gray-900 to-purple-900 pt-4 sm:pt-8 pb-8 sm:pb-12">
      <ReactLenis root>
        <div className="container mx-auto px-4 md:px-8">
          {/* Pricing 배지 */}
          <div className="text-center mb-3 sm:mb-4">
            <Badge variant="secondary" className="mb-2 sm:mb-3 bg-gray-700 text-white text-xs sm:text-sm">
              Pricing
            </Badge>
          </div>

          {/* 상단 가격 섹션 */}
                      <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-xl sm:text-xl md:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8 leading-tight px-2">
                <span className="block sm:inline">2주 안에 만나는 </span>
                <span className="block sm:inline">나만의 AI 자동화 시스템</span>
              </h1>
              <div className="text-xl sm:text-xl md:text-3xl lg:text-4xl text-white mb-8 sm:mb-10 leading-tight">
                1:1 맞춤형 가격
              </div>
              
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full w-full sm:w-auto"
                >
                  시작하기
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
              <p className="text-sm sm:text-base md:text-lg text-gray-400 leading-relaxed px-6">
                1시간 무료 진단 후 대표님의 시간을 아껴드리겠습니다.
              </p>
          </div>

          
        </div>
      </ReactLenis>
    </section>
  );
}

// 고객 후기 섹션
function TestimonialsSection() {
  const testimonials = [
    {
      author: {
        name: "김**",
        handle: "종합학원 원장",
        avatar: "/images/avatar1.png"
      },
      text: "학생 상담 프로세스를 자동화했어요. 혼자서 학원 운영하고 있어서 수업하랴 상담하랴 시간이 너무 부족했었는데, 스냅플러그 자동화 도입하고 시간이 정말 많이 아껴졌고 학생들에 더 집중할 수 있게 되었어요."
    },
    {
      author: {
        name: "이**",
        handle: "필라테스 운영자",
        avatar: "/images/avatar2.png"
      },
      text: "고객 예약을 하나하나 카카오톡으로 했었어요. 시간도 많이 들고 비효율적이었는데, 예약, 고객 맞춤 메시지 발송, 회원 관리를 자동화로 해결했어요. 진짜 강추!!"
    },
    {
      author: {
        name: "오**",
        handle: "산부인과 원장",
        avatar: "/images/avatar3.png"
      },
      text: "기존 병원예약플랫폼을 썼는데도 업무 효율이 높아지지 않아서 사용하지 않게 되었어요. 그러다 우연히 스냅플러그와 상담을 하게 되었는데, 진짜 우리 병원의 문제가 뭐였는지 제대로 진단을 해주셔서 예약 프로세스가 아니라 환자 예진을 하는 프로세스의 비효율을 발견해주셔서 바로 개발 요청 드렸어요. 빠르게 응대해주시고 제대로된 방법을 찾아주셔서 함께 일하는 간호사들이 정말 좋아하고 만족합니다."
    }
    
  ];

  return (
    <section className="bg-gray-900 dark:bg-gray-900 py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
            고객들의 생생한 후기
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            <span className="block sm:inline">SnapPlug와 함께한 고객들의 </span>
            <span className="block sm:inline">실제 경험담을 들어보세요</span>
          </p>
        </div>

        <TestimonialsMarquee testimonials={testimonials} />
      </div>
    </section>
  );
}


// 푸터(하단) 컴포넌트
function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        
        <Separator className="my-8 bg-gray-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 SnapPlug. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
}




// 전체 페이지 컴포넌트
export default function HomePage() {
  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="dark" 
      enableSystem={false}
      forcedTheme="dark"
      disableTransitionOnChange={false}
    >
      <Header />
      <main>
        <HeroSection />
        <PortfolioSection />
        <TestimonialsSection />
        <ServicesSection />
        <AboutUsSection />
        <RoadmapSection />
        <PricingSection />
        <Footer />
      </main>
      <Script id="structured-data" type="application/ld+json">
        {JSON.stringify(structuredData)}
      </Script>
    </ThemeProvider>
  );
}
'use client';

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Spotlight } from "@/components/ui/spotlight";
import { SplineScene } from "@/components/ui/splite";
import { ThemeToggle } from "@/components/theme-toggle";
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
  Star
} from "lucide-react";
import { useState, useEffect } from "react";
import { FeaturesSectionWithHoverEffects } from "@/components/blocks/feature-section-with-hover-effects";
import Image from "next/image";

function Header() {
  return (
    <header className="w-full px-4 sm:px-8 py-4 flex items-center justify-between border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
      {/* Left: Logo */}
      <div className="flex items-center">
        <span className="font-extrabold text-xl sm:text-2xl tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          SnapPlug
        </span>
      </div>
      
      {/* Right: Navigation and Actions */}
      <div className="flex items-center gap-2 sm:gap-6">
        <a href="#services" className="hidden sm:block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium text-sm sm:text-base">서비스소개</a>
        <a href="#portfolio" className="hidden sm:block text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition font-medium text-sm sm:text-base">포트폴리오</a>
        <ThemeToggle />
        <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-xs sm:text-sm px-2 sm:px-4">
          <span className="hidden sm:inline">Get Started</span>
          <span className="sm:hidden">시작</span>
          <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
        </Button>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-900">
      {/* Spotlight background effect - REMOVED */}
      {/* <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" /> */}
      
      {/* Centered robot for desktop */}
      <div className="hidden md:flex absolute inset-0 items-center justify-center z-0">
        <div className="w-full max-w-3xl h-[700px] flex items-center justify-center">
          <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
        </div>
      </div>
      
      {/* Mobile layout */}
      <div className="md:hidden container mx-auto px-4 py-12 sm:py-16 relative z-10 flex flex-col items-center justify-center min-h-screen">
        {/* Mobile: Main text */}
        <div className="text-center w-full max-w-sm mx-auto">
          <Badge variant="secondary" className="mb-4 sm:mb-6 text-xs sm:text-sm">
            ✨ AI 자동화 웹 시스템
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent leading-tight">
          당신의 시간을 아껴드립니다.
            <br />
            <span className="text-blue-600 dark:text-blue-400 text-2xl sm:text-3xl">
              <AnimatedText 
                phrases={[
                "2주안에 완성되는",
                "나만의 AI 자동화 시스템"
                ]}
                interval={2000}
                className="inline-block"
              />
            </span>
          </h1>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed">
            SnapPlug는 단순 웹 제작이 아닙니다.
            <br/>상담·예약·DB·알림까지 자동화된 시스템으로 시간을 벌어주는 서비스입니다.
            <br/>단, 14일이면 충분합니다.
          </p>
          <div className="flex flex-col gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 w-full sm:w-auto">
              2주 자동화 서비스 도입 신청하기
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="text-sm sm:text-base px-4 sm:px-6 py-3 sm:py-4 w-full sm:w-auto">
              무엇을 자동화할 수 있나요?
            </Button>
          </div>
        </div>
        
        {/* Mobile: Robot */}
        <div className="w-full max-w-xs sm:max-w-sm h-[200px] sm:h-[250px] flex items-center justify-center mt-8">
          <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
        </div>
      </div>
      
      {/* Desktop: Overlay text on robot */}
      <div className="hidden md:flex absolute inset-0 items-center justify-center z-10">
        <div className="text-center max-w-4xl px-8">
          <Badge variant="secondary" className="mb-6">
            ✨ AI 자동화 서비스
          </Badge>
          <h1 className="text-6xl lg:text-6xl font-bold mb-8 text-gray-900 dark:text-white">
            혼자서 다 하지 마세요!
            <br />
            <div className="flex justify-center w-full mb-4">
              <span className="text-blue-600 dark:text-blue-400 text-center text-6xl">
                <AnimatedText 
                  phrases={[
                    "2주안에 완성되는",
                    "나만의 AI 자동화 시스템"
                  ]}
                  interval={2000}
                  className="inline-block"
                />
              </span>
            </div>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mt-16 mb-10 leading-relaxed mx-auto">
            <br/>매일 해야 했던 예약 문자, 고객 관리, 알림 전송…
            <br/>혼자서 버거웠던 그 일들, 이제 시스템이 알아서 합니다.
            <br/>당신만을 위한 자동화, 단 14일이면 충분해요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-xl px-10 py-8">
              2주 자동화 서비스 도입 신청하기
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            <Button variant="outline" size="lg" className="text-xl px-10 py-8">
              무엇을 자동화할 수 있나요?
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: Zap,
      title: "2주 동안, 단 하나의 프로젝트만 ",
      description: "저희는 고객을 여러 명 동시에 받지 않습니다.\n한 번에 오직 한 명의 고객만을 위해\n2주동안 프로젝트에 집중합니다."
    },
    {
      icon: Shield,
      title: "AI 자동화 설계 & 운영 최적화",
      description: "단순히 '예쁜 사이트'만 만들지 않습니다.\n고객의 업무를 분석하여, 예약, 응답, 알림, DB, 후속 관리까지 자동화된 시스템을 설계합니다."
    },
    {
      icon: Users,
      title: " 100% 환불 or 무제한 수정",
      description: "결과가 만족스럽지 않다면, 무조건 환불해드립니다.\n혹은, 마음에 들 때까지 무제한 수정이 가능합니다."
    },
    
  ];

  return (
    <section id="services" className="py-12 sm:py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">SnapPlug의 3가지 약속</h2>
          <p className="text-sm sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            &ldquo;SnapPlug는 &lsquo;다르게&rsquo; 만듭니다.&rdquo; 빠르게, 정확하게, 책임있게.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
              <CardHeader className="pb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <service.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <CardTitle className="text-lg sm:text-xl text-gray-900 dark:text-white leading-tight">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Feature Section with Hover Effects */}
        <section className="max-w-7xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              SnapPlug가 자동화해드리는 것들
            </h3>
            <p className="text-sm sm:text-lg text-gray-600 dark:text-gray-300">
              <br/>실제 서비스에 적용되는 다양한 기능들을 확인해보세요. 
              <br/>반복적이고 번거로운 업무를 자동화하여, 대표님의 시간을 아껴드립니다
            </p>
          </div>
          <FeaturesSectionWithHoverEffects />
        </section>

        {/* 2주 프로젝트 캘린더 */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              2주 프로젝트 일정
            </h3>
            <p className="text-sm sm:text-lg text-gray-600 dark:text-gray-300">
              한 번에 하나의 프로젝트만 진행하여 완벽한 결과물을 만들어드립니다
            </p>
          </div>
          
          <Card className="bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 overflow-hidden">
            <CardContent className="p-6">
              <div className="grid grid-cols-7 gap-2 sm:gap-4">
                {/* 14일 그리드 (요일 구분 없음) */}
                {[
                  { day: 1, label: "분석", type: "analysis" },
                  { day: 2, label: "분석", type: "analysis" },
                  { day: 3, label: "컨설팅", type: "consulting" },
                  { day: 4, label: "설계", type: "design" },
                  { day: 5, label: "설계", type: "design" },
                  { day: 6, label: "개발", type: "dev" },
                  { day: 7, label: "개발", type: "dev" },
                  { day: 8, label: "개발", type: "dev" },
                  { day: 9, label: "개발", type: "dev" },
                  { day: 10, label: "개발", type: "dev" },
                  { day: 11, label: "개발", type: "dev" },
                  { day: 12, label: "테스트", type: "test" },
                  { day: 13, label: "테스트", type: "test" },
                  { day: 14, label: "완료", type: "done" },
                ].map(({ day, label, type }) => {
                  let cellClass = "h-16 sm:h-20 rounded-lg flex flex-col items-center justify-center text-base sm:text-lg font-medium border-2 ";
                  if (type === "analysis") cellClass += "bg-gradient-to-br from-blue-900/40 to-cyan-900/40 text-cyan-100 border-cyan-500";
                  else if (type === "consulting") cellClass += "bg-gradient-to-br from-purple-900/40 to-pink-900/40 text-pink-100 border-pink-500";
                  else if (type === "design") cellClass += "bg-gradient-to-br from-yellow-900/40 to-orange-900/40 text-yellow-100 border-yellow-500";
                  else if (type === "dev") cellClass += "bg-gradient-to-br from-indigo-900/40 to-blue-900/40 text-indigo-100 border-indigo-500";
                  else if (type === "test") cellClass += "bg-gradient-to-br from-green-900/40 to-lime-900/40 text-lime-100 border-lime-500";
                  else if (type === "done") cellClass += "bg-gradient-to-br from-emerald-900/40 to-green-900/40 text-emerald-100 border-emerald-500";
                  else cellClass += "bg-gray-800 text-gray-500 border-gray-700";
                  return (
                    <div key={day} className={cellClass}>
                      <span className="font-bold">{day}</span>
                      {label && <span className="text-xs sm:text-sm mt-1">{label}</span>}
                    </div>
                  );
                })}
              </div>
              {/* 범례 */}
              <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-cyan-500 bg-gradient-to-br from-blue-900/40 to-cyan-900/40 rounded"></div>
                  <span className="text-cyan-300">분석</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-pink-500 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded"></div>
                  <span className="text-pink-300">컨설팅</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-yellow-500 bg-gradient-to-br from-yellow-900/40 to-orange-900/40 rounded"></div>
                  <span className="text-yellow-200">설계</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-indigo-500 bg-gradient-to-br from-indigo-900/40 to-blue-900/40 rounded"></div>
                  <span className="text-indigo-200">개발</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-lime-500 bg-gradient-to-br from-green-900/40 to-lime-900/40 rounded"></div>
                  <span className="text-lime-200">테스트</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-emerald-500 bg-gradient-to-br from-emerald-900/40 to-green-900/40 rounded"></div>
                  <span className="text-emerald-200">완료</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-16">
          <span className="inline-block px-4 py-1 mb-6 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 text-xs font-semibold tracking-widest uppercase">Our Portfolio
            
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-4 text-gray-900 dark:text-white leading-tight">
            단순한 서비스가 아닙니다.<br className="hidden sm:block" /> SnapPlug는 시간을 만들어 드립니다.
          </h2>
          <p className="text-lg sm:text-xl text-center text-gray-600 dark:text-gray-300 max-w-2xl">
            SnapPlug는 그냥 만들지 않습니다. 제대로 만듭니다.
          </p>
        </div>
        <div className="relative flex flex-col md:flex-row items-center justify-center gap-0 md:gap-8 max-w-5xl mx-auto">
          {/* Left image */}
          <div className="w-[180px] sm:w-[220px] md:w-[240px] lg:w-[280px] aspect-[10/13] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transform -rotate-6 md:-rotate-12 -translate-y-4 md:-translate-y-8 z-10">
            <Image src="/images/portfolio-left.png" alt="Portfolio Left" width={280} height={364} className="object-cover w-full h-full" />
          </div>
          {/* Center image */}
          <div className="w-[380px] sm:w-[520px] md:w-[560px] lg:w-[600px] aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl border-2 border-blue-400 dark:border-blue-700 bg-white dark:bg-gray-900 z-20 scale-105">
            <Image src="/images/portfolio-center.png" alt="Portfolio Center" width={600} height={412} className="object-cover w-full h-full" />
          </div>
          {/* Right image */}
          <div className="w-[180px] sm:w-[220px] md:w-[240px] lg:w-[280px] aspect-[10/13] rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transform rotate-6 md:rotate-12 -translate-y-4 md:-translate-y-8 z-10">
            <Image src="/images/portfolio-right.png" alt="Portfolio Right" width={280} height={364} className="object-cover w-full h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "문의",
      period: "",
      description: "초기 사용자를 위한 기본 플랜",
      servicePeriod: "7일 안에 서비스 제작",
      features: [
        "서비스 상세 내용 미정",
        "기본 기능 포함",
        "기본 지원"
      ],
      popular: false
    },
    {
      name: "Growth",
      price: "문의",
      period: "",
      description: "생산성을 극대화할 수 있는 플랜",
      servicePeriod: "14일 안에 서비스 제작",
      features: [
        "서비스 상세 내용 미정",
        "고급 기능 포함",
        "우선 지원"
      ],
      popular: true
    },
    {
      name: "Pro",
      price: "문의",
      period: "",
      description: "대규모 조직을 위한 맞춤형 솔루션",
      servicePeriod: "14일 안에 서비스 제작",
      features: [
        "서비스 상세 내용 미정",
        "맞춤형 기능",
        "전담 지원",
        "SLA 보장"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">합리적인 가격</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            규모에 맞는 플랜을 선택하세요. 언제든지 변경 가능합니다.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-blue-600 shadow-lg' : ''} bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-600 to-purple-600">
                  가장 인기
                </Badge>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-900 dark:text-white">{plan.name}</CardTitle>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                  {plan.period && <span className="text-gray-500 dark:text-gray-400">{plan.period}</span>}
                </div>
                <CardDescription className="text-gray-600 dark:text-gray-300">{plan.description}</CardDescription>
                <div className="mt-2">
                  <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                    {plan.servicePeriod}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full mt-6 ${plan.popular ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.name === 'Enterprise' ? '문의하기' : '시작하기'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://hook.eu2.make.com/80jp9mtvg3dabo6onj9t0enq2h4mbhkt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage('메시지가 성공적으로 전송되었습니다!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
        setSubmitMessage('전송에 실패했습니다.');
      }
    } catch {
      setSubmitStatus('error');
      setSubmitMessage('네트워크 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">문의하기</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            궁금한 점이 있으시면 언제든지 메시지를 남겨주세요
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">메시지 보내기</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="이름"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              />
              <input
                type="email"
                name="email"
                placeholder="이메일"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="제목"
              value={formData.subject}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            />
            <textarea
              name="message"
              placeholder="메시지"
              value={formData.message}
              onChange={handleInputChange}
              required
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white resize-none"
            ></textarea>
            {submitStatus !== 'idle' && (
              <div className={`p-3 rounded-lg ${
                submitStatus === 'success' 
                  ? 'bg-green-100 text-green-700 border border-green-200 dark:bg-green-900 dark:text-green-200 dark:border-green-700' 
                  : 'bg-red-100 text-red-700 border border-red-200 dark:bg-red-900 dark:text-red-200 dark:border-red-700'
              }`}>
                {submitMessage}
              </div>
            )}
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50"
            >
              {isSubmitting ? '전송 중...' : '메시지 보내기'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">SnapPlug</h3>
            <p className="text-gray-400 mb-4">
              AI 기술로 업무 생산성을 혁신하는 플랫폼
            </p>
            <p className="text-gray-400 mb-4">
              대표: 정해성
              <br/>
              사업자등록번호: 551-10-02859
              <br/>  
              Email: super.rich.jason@gmail.com
              <br/>
            </p>
          </div>
          
          
        </div>
        
        <Separator className="my-8 bg-gray-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 SnapPlug. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition">개인정보처리방침</a>
            <a href="#" className="hover:text-white transition">이용약관</a>
            <a href="#" className="hover:text-white transition">쿠키 정책</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <PricingSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
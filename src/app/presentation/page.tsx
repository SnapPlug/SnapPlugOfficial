'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { SlidingNumber } from '@/components/ui/sliding-number';
import { motion } from 'motion/react';
import { ThemeProvider } from "@/components/theme-provider";
import { Compare } from "@/components/ui/compare";
import { SparklesCore } from "@/components/ui/sparkles";
import { AboutUsSection } from "@/components/ui/about-us-section";
import { CpuArchitecture } from "@/components/ui/cpu-architecture";
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
  Award,
  Clock,
  Infinity,
  Sparkles,
  Lightbulb,
  Handshake,
  Rocket,
  Coffee,
  Presentation,
  Monitor,
  Smartphone,
  Globe,
  Briefcase,
  ChartBar,
  Cpu,
  Database,
  Cloud,
  Lock,
  RefreshCw,
  Eye,
  Code,
  Palette,
  DollarSign,
  TrendingDown
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
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";





// SlidingNumberBasic 컴포넌트
function SlidingNumberBasic({ 
  calculatedValue1 = 2470, 
  calculatedValue2 = 36.2, 
  calculatedValue3 = 100 
}: {
  calculatedValue1?: number;
  calculatedValue2?: number;
  calculatedValue3?: number;
}) {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue1(prev => {
        if (prev >= calculatedValue1) {
          clearInterval(interval);
          return calculatedValue1;
        }
        return prev + Math.ceil(calculatedValue1 / 50);
      });
    }, 90);
    return () => clearInterval(interval);
  }, [calculatedValue1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue2(prev => {
        if (prev >= calculatedValue2) {
          clearInterval(interval);
          return calculatedValue2;
        }
        return prev + (calculatedValue2 / 36.2);
      });
    }, 30);
    return () => clearInterval(interval);
  }, [calculatedValue2]);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue3(prev => {
        if (prev >= calculatedValue3) {
          clearInterval(interval);
          return calculatedValue3;
        }
        return prev + 1;
      });
    }, 25);
    return () => clearInterval(interval);
  }, [calculatedValue3]);

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

// Interactive Demo Section with Analysis Logic
function InteractiveDemoSection() {
  const [monthlySalary, setMonthlySalary] = useState("");
  const [automationTasks, setAutomationTasks] = useState("");
  const [analysisResult, setAnalysisResult] = useState("");
  const [yearlyAutomationRevenue, setYearlyAutomationRevenue] = useState(0);
  const [improvedTime, setImprovedTime] = useState(36.2);

  const handleAnalyze = () => {
    if (!monthlySalary || !automationTasks) return;
    
    const monthlyRevenue = parseFloat(monthlySalary);
    const automationHours = parseFloat(automationTasks);
    
    if (isNaN(monthlyRevenue) || isNaN(automationHours)) return;
    
    // 고정값 설정
    const totalMonthlyWorkHours = 209; // 한달간 총 근로시간
    const dailyWorkHours = (40 + 8) / 5; // 일별근로시간 = (40+8)/5
    const monthlyWorkDays = totalMonthlyWorkHours / dailyWorkHours; // 한달근무일수
    
    // 시간당 수익금액 계산
    const hourlyRevenue = monthlyRevenue / totalMonthlyWorkHours;

    // 월간 개선시간 계산
    const calculatedImprovedTime = Math.round(automationHours * monthlyWorkDays * 10) / 10; // 소수점 1자리까지
    setImprovedTime(calculatedImprovedTime);
    
    // 연간 자동화 수익 계산
    const calculatedRevenue = Math.round(hourlyRevenue * automationHours * monthlyWorkDays * 12); // 정수로 반올림
    setYearlyAutomationRevenue(calculatedRevenue);
    setAnalysisResult(`${calculatedRevenue.toLocaleString()}만원/연간 을 줄이는 효과`);
  };

  return (
    <section className="py-12 md:py-20 bg-gray-800">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white leading-tight">
            <span className="block sm:inline">SnapPlug 자동화 서비스 기대 효과</span>
          </h2>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12">
          
          <div className="flex-1 flex justify-center relative w-full">
            {/* Compare component as background */}
            <Compare
              firstImage="/images/Demo1.png"
              secondImage="/images/before.png"
              className="w-full max-w-3xl aspect-video h-auto"
              slideMode="drag"
              showHandlebar={true}
              autoplay={true}
              autoplayDuration={3000}
            />
            
            {/* SlidingNumber animation overlaid as card at bottom center */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50">
              <div className="bg-gray-900/90 backdrop-blur-sm border border-gray-700/50 px-6 py-4 rounded-lg shadow-xl">
                <SlidingNumberBasic 
                  calculatedValue1={yearlyAutomationRevenue || 2470} 
                  calculatedValue2={improvedTime} 
                  calculatedValue3={100} 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Analysis Tool - Moved below Compare component */}
        <div className="mt-8 md:mt-12 max-w-2xl mx-auto">
          <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
            <CardContent className="space-y-4 p-4 md:p-6">
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="flex-1">
                    <label className="text-xs text-gray-600 dark:text-gray-400 mb-2 block">
                      지난달 매출을 알려주세요.<br />
                      (예: 500만원)
                    </label>
                    <Input
                      type="number"
                      placeholder="500"
                      value={monthlySalary}
                      onChange={(e) => setMonthlySalary(e.target.value)}
                      className="w-full bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 h-10 md:h-12 text-sm"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <label className="text-xs text-gray-600 dark:text-gray-400 mb-2 block">
                      하루에 자동화로 줄이고 싶은<br />
                      업무 시간을 알려주세요. (예: 2시간)
                    </label>
                    <Input
                      type="number"
                      placeholder="2"
                      value={automationTasks}
                      onChange={(e) => setAutomationTasks(e.target.value)}
                      className="w-full bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 h-10 md:h-12 text-sm"
                    />
                  </div>
                </div>
              </div>
              
              <Button 
                onClick={handleAnalyze}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full"
              >
                <Zap className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                <span className="block sm:inline">자동화로 얼마나 절약되는지 </span>
                <span className="block sm:inline">확인하기</span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

// Presentation 페이지 메인 컴포넌트
export default function PresentationPage() {
  const [card1Flipped, setCard1Flipped] = useState(false);
  const [card2Flipped, setCard2Flipped] = useState(false);
  const [card3Flipped, setCard3Flipped] = useState(false);

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      
      <main className="bg-gray-900 pb-0 md:pb-0">
        
        {/* About Us Section */}
        <AboutUsSection />

        {/* Interactive Demo Section */}
        <InteractiveDemoSection />
        {/* Problem Section */}
        <section className="py-12 md:py-20 bg-gray-900">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white leading-tight">
                <span className="block sm:inline">그런데 막막하고 의심스러우시죠?</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
              {/* Card 1 */}
              <div className="group perspective">
                <div 
                  className={`relative w-full h-full transition-all duration-700 transform-style-preserve-3d ${card1Flipped ? 'rotate-y-180' : ''}`}
                  onClick={() => setCard1Flipped(!card1Flipped)}
                  style={{ cursor: 'pointer', minHeight: '280px' }}
                >
                  {/* Front */}
                  <Card className="bg-gradient-to-br from-red-900/30 to-orange-900/30 border border-red-500/20 transition-all duration-300 absolute w-full h-full backface-hidden">
                    <CardHeader>
                      <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                        <Shield className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-white text-lg md:text-xl">믿을 수 있나요?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        만족하시지 못하면, 100% 환불해드리거나 만족하실때까지 무제한 수정을 해드리겠습니다.
                      </p>
                    </CardContent>
                  </Card>
                  
                  {/* Back */}
                  <Card className="bg-gradient-to-br from-red-900/70 to-orange-900/70 border border-red-400/50 absolute w-full h-full backface-hidden rotate-y-180">
                    <CardHeader>
                      <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mb-4">
                        <Check className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-white text-lg md:text-xl">100% 퀄리티 보장</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                         대표님께서 완전히 만족하실 때까지 무제한 수정 지원!
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group perspective">
                <div 
                  className={`relative w-full h-full transition-all duration-700 transform-style-preserve-3d ${card2Flipped ? 'rotate-y-180' : ''}`}
                  onClick={() => setCard2Flipped(!card2Flipped)}
                  style={{ cursor: 'pointer', minHeight: '400px' }}
                >
                  {/* Front */}
                  <Card className="bg-gradient-to-br from-yellow-900/30 to-orange-900/30 border border-yellow-500/20 transition-all duration-300 absolute w-full h-full backface-hidden">
                    <CardHeader>
                      <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-4">
                        <DollarSign className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-white text-lg md:text-xl">비싼건 아닌가요?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        부르는게 값이다? 업체마다 정해진 가격이 없다? 민낯을 공개해드리겠습니다.
                      </p>
                    </CardContent>
                  </Card>
                  
                  {/* Back */}
                  <Card className="bg-gradient-to-br from-yellow-900/70 to-orange-900/70 border border-yellow-400/50 absolute w-full h-full backface-hidden rotate-y-180">
                    <CardHeader>
                      <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mb-4">
                        <TrendingDown className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-white text-lg md:text-xl">비용 = 사람 수 x 기간</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-gray-300 text-sm md:text-base leading-relaxed">
                        <p>[SW 외주 비용 구조]</p>
                        <p>+직접인건비 (PM, UI/UX 디자이너, 프론트엔드 개발자, 백엔드 개발자, QA테스터)</p>
                        <p>+제경비 (외주사 운영을 위한 운영비) = 직접인건비의 합 140~150%</p>
                        <p>+기술료 (외주사의 마진) = (직접인건비 + 제경비) × 20~40%</p>
                        <p>+직접경비 (3PP 서비스 이용료, 서버임대료, 템플릿/플러그인 구매 비용)</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group perspective">
                <div 
                  className={`relative w-full h-full transition-all duration-700 transform-style-preserve-3d ${card3Flipped ? 'rotate-y-180' : ''}`}
                  onClick={() => setCard3Flipped(!card3Flipped)}
                  style={{ cursor: 'pointer', minHeight: '280px' }}
                >
                  {/* Front */}
                  <Card className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 border border-blue-500/20 transition-all duration-300 absolute w-full h-full backface-hidden">
                    <CardHeader>
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                        <Settings className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-white text-lg md:text-xl">더 복잡해지는건 아닌가요?</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        Simple is best! 사용하기 복잡하고 어려우면 제대로 만든게 아닙니다.
                      </p>
                    </CardContent>
                  </Card>
                  
                  {/* Back */}
                  <Card className="bg-gradient-to-br from-blue-900/70 to-purple-900/70 border border-blue-400/50 absolute w-full h-full backface-hidden rotate-y-180">
                    <CardHeader>
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-white text-lg md:text-xl">Snap + Plug</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        직관적이고 간단한 인터페이스로 누구나 쉽게 활용할 수 있게 만들겠습니다. 불필요한 기능은 빼고 대표님이 겪고 있는 문제의 본질을 해결할 최적의 솔루션을 제공드리겠습니다. 
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <Link href="/our-work">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm md:text-lg px-6 md:px-8 py-3 md:py-2 rounded-full"> SnapPlug 포트폴리오 보러가기</button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Meeting Section */}
        <section className="py-12 md:py-20 bg-gray-800">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-white leading-tight">
                <span className="block sm:inline">지금 대표님의 이야기를 들려주세요.</span>
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto px-4 leading-relaxed text-center"> 
                요즘 뭐 때문에 지치고 계신지, 자동화가 왜 필요해졌는지, 무엇이 발목을 잡고 있는지…
              </p>
            </div>
            
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12">
              <div className="flex-1 flex justify-center">
                <CpuArchitecture 
                  width="100%"
                  height="100%"
                  text="SnapPlug"
                  showCpuConnections={true}
                  animateText={true}
                  animateLines={true}
                  animateMarkers={true}
                  className="text-blue-400"
                />
              </div>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-white leading-tight text-center">
                <span className="block sm:inline">24시간 이내에 대표님께서 원하시는 자동화 솔루션을 제안드립니다.</span>
              </h2>
          </div>
        </section>


        
      </main>
      
    </ThemeProvider>
  );
} 
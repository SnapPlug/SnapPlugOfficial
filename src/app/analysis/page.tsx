'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { 
  ArrowRight, 
  Menu,
  X,
  Search,
  BarChart3,
  FileText,
  MessageSquare,
  Activity,
  Headphones,
  Zap,
  TrendingUp,
  Lightbulb,
  Sparkles
} from "lucide-react";
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

// HeroSection: 2열 구성의 히어로 섹션
function HeroSection() {
  const [monthlySalary, setMonthlySalary] = useState("");
  const [dailyHours, setDailyHours] = useState("");
  const [automationTasks, setAutomationTasks] = useState("");
  const [analysisResult, setAnalysisResult] = useState("");
  const [yearlyAutomationRevenue, setYearlyAutomationRevenue] = useState(0);

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
    
    // 연간 자동화 수익 계산
    const calculatedRevenue = hourlyRevenue * automationHours * monthlyWorkDays * 12;
    setYearlyAutomationRevenue(calculatedRevenue);
    setAnalysisResult(`
${calculatedRevenue.toLocaleString()}만원
/연간
을 줄이는 효과
    `);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      <div className="container mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center min-h-[80vh]">
          
          {/* Left Column - Text Content */}
          <div className="space-y-6 md:space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <Badge variant="secondary" className="mb-4 text-xs md:text-sm">
                <Sparkles className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                AI 자동화 기대 효과
              </Badge>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold leading-none">
                <div className="space-y-0 md:space-y-2">
                  <div className="block sm:inline">아주 간단하게 </div>
                  <div className="text-blue-400 text-3xl sm:text-3xl md:text-4xl lg:text-6xl">
                    <div className="block sm:inline">AI 자동화 효과를 </div>
                  </div>
                  <div className="block sm:inline">확인하세요.</div>
                </div>
              </h1>
              
              <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                <span className="block sm:inline">대표님의 소중한 시간이 </span>
                <span className="block sm:inline">얼마나 가치가 있는지 보여드리겠습니다.</span>
              </p>
            </div>

            
          </div>

          {/* Right Column - Analysis Tool */}
          <div className="space-y-4 md:space-y-6">
            <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
              <CardHeader className="p-4 md:p-6">
                <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                  <Search className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="block sm:inline">AI 자동화, 나에게 </span>
                  <span className="block sm:inline">얼마나 도움이 될까?</span>
                </CardTitle>
                <CardDescription className="text-sm">
                  <span className="block sm:inline">직접 입력해보고 대표님만의 </span>
                  <span className="block sm:inline">효과를 확인해보세요!</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 p-4 md:p-6">
                <div className="space-y-3">
                  <div>
                    <label className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
                      <span className="block sm:inline">지난달 어느 정도 </span>
                      <span className="block sm:inline">매출을 올리셨나요? (단위: 만원)</span>
                    </label>
                    <Input
                      type="number"
                      placeholder="지난달 매출을 알려주세요. (예: 500만원)"
                      value={monthlySalary}
                      onChange={(e) => setMonthlySalary(e.target.value)}
                      className="w-full bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 h-10 md:h-12 text-sm"
                    />
                  </div>
                  
                  
                  <div>
                    <label className="text-xs md:text-sm font-medium text-gray-700 dark:text-gray-300 mb-1 block">
                      <span className="block sm:inline">반복 업무에 쓰는 시간, </span>
                      <span className="block sm:inline">하루에 얼마나 되시나요? (단위: 시간)</span>
                    </label>
                    <Input
                      type="number"
                      placeholder="하루에 자동화로 줄이고 싶은 업무 시간을 알려주세요. (예: 2시간)"
                      value={automationTasks}
                      onChange={(e) => setAutomationTasks(e.target.value)}
                      className="w-full bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600 h-10 md:h-12 text-sm"
                    />
                  </div>
                </div>
                
                <Button 
                  onClick={handleAnalyze}
                  //disabled={!monthlySalary || !automationTasks}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full"
                >
                  <Zap className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                  <span className="block sm:inline">자동화로 얼마나 절약되는지 </span>
                  <span className="block sm:inline">확인하기</span>
                </Button>
              </CardContent>
            </Card>

            {/* Analysis Results */}
            {analysisResult && (
              <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                <CardHeader className="p-4 md:p-6">
                  <CardTitle className="flex items-center gap-2 text-base md:text-lg">
                    <FileText className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="block sm:inline">이만큼 효과가 있어요! </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 md:p-6">
                  <div className="text-center">
                    <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                      <span className="text-blue-400">
                        {yearlyAutomationRevenue.toLocaleString()}
                      </span>
                      <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400 ml-2">
                        만원/연간
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Additional Text */}
            {analysisResult && (
              <div className="text-center mt-4">
               
                <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 px-4 mb-4">
                  <span className="block sm:inline">📌 근로기준법에 따라 계산한 결과로 </span>
                  <span className="block sm:inline">대표님의 상황과 다소 차이가 있을 수 있습니다.</span>
                </p>
                
                <Link href="/contact">
                  <Button 
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full w-full sm:w-auto"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    무료 상담 신청하기
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function AnalysisPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pb-48 md:pb-0">
      <Header />
      <HeroSection />
    </div>
  );
} 
'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Home, 
  Mail, 
  Bell, 
  DollarSign, 
  BarChart3, 
  Search, 
  Settings,
  Menu,
  ChevronDown,
  TrendingUp,
  Users,
  Calendar,
  Target,
  ArrowRight,
  Activity,
  PieChart,
  LineChart as LineChartIcon,
  BarChart as BarChartIcon,
  User,
  Bell as BellIcon,
  MoreHorizontal,
  Phone,
  MessageSquare,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Star,
  Zap,
  Shield,
  Headphones,
  FileText,
  PieChart as PieChartIcon
} from "lucide-react";

// 사이드바 컴포넌트
function Sidebar() {
  const menuItems = [
    { icon: Home, label: "Dashboard", active: true },
    { icon: FileText, label: "UCC Report", active: false },
    { icon: MessageSquare, label: "Contact Report", active: false },
    { icon: Star, label: "Skill Report", active: false },
    { icon: Users, label: "Agent Report", active: false },
    { icon: ArrowRight, label: "Transferee Report", active: false },
    { icon: Activity, label: "Status Overview", active: false },
    { icon: Headphones, label: "Dialogue Overview", active: false },
    { icon: BarChart3, label: "Classification Report", active: false },
  ];

  return (
    <div className="w-48 bg-gray-900 h-screen fixed left-0 top-0 p-3">
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="text-white font-bold text-base">SnapPlug</span>
        </div>
      </div>
      
      <nav className="space-y-1">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`w-full flex items-center gap-2 px-2 py-2 rounded-lg text-xs transition-colors ${
              item.active 
                ? 'bg-blue-600 text-white' 
                : 'text-gray-300 hover:bg-gray-800 hover:text-white'
            }`}
          >
            <item.icon className="w-4 h-4" />
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
}



// 원형 진행률 차트 컴포넌트
function CircularProgress({ percentage, label, size = "md", showChange = false, changeValue = "" }: { 
  percentage: number; 
  label: string; 
  size?: "sm" | "md" | "lg" | "xl";
  showChange?: boolean;
  changeValue?: string;
}) {
  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-20 h-20", 
    lg: "w-32 h-32",
    xl: "w-40 h-40"
  };
  
  const strokeWidth = size === "xl" ? 8 : size === "lg" ? 6 : size === "md" ? 4 : 3;
  const radius = size === "xl" ? 72 : size === "lg" ? 56 : size === "md" ? 36 : 28;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className={`relative ${sizeClasses[size]}`}>
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="none"
            className="text-gray-700"
          />
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            stroke="url(#progressGradient)"
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
          
          <defs>
            <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className={`font-bold text-white ${size === "xl" ? "text-3xl" : size === "lg" ? "text-2xl" : size === "md" ? "text-lg" : "text-sm"}`}>
              {percentage}%
            </div>
            {showChange && changeValue && (
              <div className="text-green-400 text-xs font-medium">
                {changeValue}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-2 text-center">
        <p className="text-xs text-gray-400">{label}</p>
      </div>
    </div>
  );
}

// 반원형 진행률 차트 컴포넌트
function SemiCircularProgress({ percentage, label, showChange = false, changeValue = "" }: { 
  percentage: number; 
  label: string;
  showChange?: boolean;
  changeValue?: string;
}) {
  const radius = 40;
  const circumference = Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-12">
        <svg className="w-full h-full transform -rotate-180" viewBox="0 0 100 50">
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            className="text-gray-700"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={circumference / 2}
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="url(#semiProgressGradient)"
            strokeWidth="4"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset + circumference / 2}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
          
          <defs>
            <linearGradient id="semiProgressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>
          </defs>
        </svg>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="font-bold text-white text-lg">
              {percentage}%
            </div>
            {showChange && changeValue && (
              <div className="text-green-400 text-xs font-medium">
                {changeValue}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-1 text-center">
        <p className="text-xs text-gray-400">{label}</p>
      </div>
    </div>
  );
}

// 막대 차트 컴포넌트
function BarChart({ data, categories, height = 200 }: { 
  data: { [key: string]: number[] }; 
  categories: string[];
  height?: number;
}) {
  const maxValue = Math.max(...Object.values(data).flat());
  const barWidth = 100 / categories.length * 0.8;
  
  return (
    <div className="w-full h-full">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {categories.map((category, index) => {
          const x = (index / (categories.length - 1)) * 100;
          const values = data[category] || [];
          let currentY = 100;
          
          return values.map((value, valueIndex) => {
            const barHeight = (value / maxValue) * 80;
            const y = currentY - barHeight;
            currentY = y;
            
            const colors = [
              "#3B82F6", // blue
              "#06B6D4", // cyan
              "#10B981", // green
              "#F59E0B", // amber
              "#EF4444", // red
              "#8B5CF6", // purple
              "#FCD34D", // yellow
              "#6B7280"  // gray
            ];
            
            return (
              <rect
                key={`${category}-${valueIndex}`}
                x={x - barWidth / 2}
                y={y}
                width={barWidth}
                height={barHeight}
                fill={colors[valueIndex % colors.length]}
                opacity="0.8"
              />
            );
          });
        })}
      </svg>
    </div>
  );
}

// 선 차트 컴포넌트
function LineChart({ data, height = 200 }: { data: number[]; height?: number }) {
  const maxValue = Math.max(...data);
  const points = data.map((value, index) => ({
    x: (index / (data.length - 1)) * 100,
    y: 100 - (value / maxValue) * 100
  }));

  const pathData = points.map((point, index) => 
    `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
  ).join(' ');

  const areaPathData = `${pathData} L 100 100 L 0 100 Z`;

  return (
    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
      <path
        d={areaPathData}
        fill="url(#areaGradient)"
        opacity="0.3"
      />
      
      <path
        d={pathData}
        stroke="url(#lineGradient)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {points.map((point, index) => (
        <circle
          key={index}
          cx={point.x}
          cy={point.y}
          r="2"
          fill="#3B82F6"
        />
      ))}
      
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
        
        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
        </linearGradient>
      </defs>
    </svg>
  );
}

// 대시보드 메인 컴포넌트
function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("이번 달");

  return (
    <div className="ml-48 bg-gray-900 min-h-screen w-full">
      <div className="p-6 w-full">
        {/* 상단 카드들 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* SLA 카드 */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-lg">Service Level Agreement</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center">
                <CircularProgress percentage={82.4} label="SLA" size="xl" showChange={true} changeValue="+10.2%" />
              </div>
            </CardContent>
          </Card>

          {/* Dialogue Volume 차트 */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-lg">Dialogue Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48">
                <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                  {/* Y축 */}
                  <line x1="40" y1="20" x2="40" y2="180" stroke="#374151" strokeWidth="1" />
                  <text x="15" y="100" fill="#9CA3AF" fontSize="12" textAnchor="middle" transform="rotate(-90, 15, 100)">Scale</text>
                  {/* Y축 눈금 */}
                  {[0, 2, 4, 6, 8, 10].map((tick, index) => {
                    const y = 180 - (tick / 10) * 160;
                    return (
                      <g key={index}>
                        <line x1="35" y1={y} x2="40" y2={y} stroke="#374151" strokeWidth="1" />
                        <text x="30" y={y + 3} fill="#9CA3AF" fontSize="10" textAnchor="end">{tick}</text>
                      </g>
                    );
                  })}
                  
                  {/* 막대 그래프 데이터 */}
                  {[
                    { value: 5, color: "#EF4444" },   // 빨강
                    { value: 9, color: "#F97316" },   // 주황
                    { value: 4, color: "#EAB308" },   // 노랑
                    { value: 6, color: "#84CC16" },   // 연두
                    { value: 8, color: "#06B6D4" },   // 하늘색
                    { value: 10, color: "#3B82F6" },  // 파랑
                    { value: 7, color: "#8B5CF6" },   // 보라
                    { value: 11, color: "#EC4899" },  // 분홍
                    { value: 9, color: "#EF4444" },   // 빨강
                    { value: 12, color: "#F97316" },  // 주황
                    { value: 10, color: "#EAB308" },  // 노랑
                    { value: 11, color: "#84CC16" },  // 연두
                    { value: 3, color: "#06B6D4" },   // 하늘색
                    { value: 2, color: "#3B82F6" },   // 파랑
                    { value: 5, color: "#8B5CF6" },   // 보라
                    { value: 4, color: "#EC4899" }    // 분홍
                  ].map((bar, index) => {
                    const x = 60 + index * 20;
                    const height = (bar.value / 12) * 160;
                    const y = 180 - height;
                    
                    return (
                      <g key={index}>
                        {/* 막대 그림자 */}
                        <rect
                          x={x + 1}
                          y={y + 1}
                          width="12"
                          height={height}
                          fill="#1F2937"
                          opacity="0.3"
                          rx="2"
                        />
                        {/* 메인 막대 */}
                        <rect
                          x={x}
                          y={y}
                          width="12"
                          height={height}
                          fill={bar.color}
                          rx="2"
                          className="drop-shadow-sm"
                        />
                      </g>
                    );
                  })}
                  
                  {/* 가로 눈금선 */}
                  {[0, 2, 4, 6, 8, 10].map((tick, index) => {
                    const y = 180 - (tick / 10) * 160;
                    return (
                      <line
                        key={`grid-${index}`}
                        x1="40"
                        y1={y}
                        x2="380"
                        y2={y}
                        stroke="#374151"
                        strokeWidth="0.5"
                        opacity="0.3"
                      />
                    );
                  })}
                  
                  {/* X축 */}
                  <line x1="40" y1="180" x2="380" y2="180" stroke="#374151" strokeWidth="1" />
                </svg>
              </div>
            </CardContent>
          </Card>

          {/* Service License Agreement 차트 */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-lg">Service License Agreement by Date</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-48">
                <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                  {/* Y축 */}
                  <line x1="40" y1="20" x2="40" y2="180" stroke="#374151" strokeWidth="1" />
                  <text x="15" y="100" fill="#9CA3AF" fontSize="12" textAnchor="middle" transform="rotate(-90, 15, 100)">Value Scale</text>
                  
                  {/* X축 */}
                  <line x1="40" y1="180" x2="380" y2="180" stroke="#374151" strokeWidth="1" />
                  <text x="210" y="195" fill="#9CA3AF" fontSize="12" textAnchor="middle">Intervals</text>
                  
                  {/* Y축 눈금 */}
                  {[0, 2, 4, 6, 8, 10, 12].map((tick, index) => {
                    const y = 180 - (tick / 12) * 160;
                    return (
                      <g key={index}>
                        <line x1="35" y1={y} x2="40" y2={y} stroke="#374151" strokeWidth="1" />
                        <text x="30" y={y + 3} fill="#9CA3AF" fontSize="10" textAnchor="end">{tick}</text>
                      </g>
                    );
                  })}
                  
                  {/* X축 눈금 */}
                  {[1, 4, 8, 12, 16, 20, 24].map((tick, index) => {
                    const x = 40 + (tick - 1) * (340 / 23);
                    return (
                      <g key={index}>
                        <line x1={x} y1="180" x2={x} y2="185" stroke="#374151" strokeWidth="1" />
                        <text x={x} y="195" fill="#9CA3AF" fontSize="8" textAnchor="middle">{tick}</text>
                      </g>
                    );
                  })}
                  
                  {/* 가로 격자선 */}
                  {[0, 2, 4, 6, 8, 10, 12].map((tick, index) => {
                    const y = 180 - (tick / 12) * 160;
                    return (
                      <line
                        key={`grid-y-${index}`}
                        x1="40"
                        y1={y}
                        x2="380"
                        y2={y}
                        stroke="#374151"
                        strokeWidth="0.5"
                        opacity="0.3"
                      />
                    );
                  })}
                  
                  {/* 세로 격자선 */}
                  {[1, 4, 8, 12, 16, 20, 24].map((tick, index) => {
                    const x = 40 + (tick - 1) * (340 / 23);
                    return (
                      <line
                        key={`grid-x-${index}`}
                        x1={x}
                        y1="20"
                        x2={x}
                        y2="180"
                        stroke="#374151"
                        strokeWidth="0.5"
                        opacity="0.3"
                      />
                    );
                  })}
                  
                  {/* 파란색 영역 데이터 */}
                  {(() => {
                    const blueData = [2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 8, 9, 10, 9, 8, 9, 10, 11, 10, 9, 10, 11, 12, 11];
                    const points = blueData.map((value, index) => {
                      const x = 40 + index * (340 / 23);
                      const y = 180 - (value / 12) * 160;
                      return { x, y };
                    });
                    
                    const pathData = points.map((point, index) => 
                      `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
                    ).join(' ');
                    
                    const areaPathData = `${pathData} L ${points[points.length - 1].x} 180 L ${points[0].x} 180 Z`;
                    
                    return (
                      <path
                        d={areaPathData}
                        fill="url(#blueGradient)"
                        opacity="0.8"
                      />
                    );
                  })()}
                  
                  {/* 빨간색 영역 데이터 */}
                  {(() => {
                    const redData = [4, 5, 6, 7, 8, 9, 10, 11, 10, 9, 10, 11, 12, 11, 10, 11, 12, 11, 10, 9, 10, 11, 12, 11];
                    const points = redData.map((value, index) => {
                      const x = 40 + index * (340 / 23);
                      const y = 180 - (value / 12) * 160;
                      return { x, y };
                    });
                    
                    const pathData = points.map((point, index) => 
                      `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
                    ).join(' ');
                    
                    const areaPathData = `${pathData} L ${points[points.length - 1].x} 180 L ${points[0].x} 180 Z`;
                    
                    return (
                      <path
                        d={areaPathData}
                        fill="url(#redGradient)"
                        opacity="0.8"
                      />
                    );
                  })()}
                  
                  {/* 파란색 영역 경계선 */}
                  {(() => {
                    const blueData = [2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 8, 9, 10, 9, 8, 9, 10, 11, 10, 9, 10, 11, 12, 11];
                    const points = blueData.map((value, index) => {
                      const x = 40 + index * (340 / 23);
                      const y = 180 - (value / 12) * 160;
                      return { x, y };
                    });
                    
                    const pathData = points.map((point, index) => 
                      `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
                    ).join(' ');
                    
                    return (
                      <path
                        d={pathData}
                        stroke="#3B82F6"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    );
                  })()}
                  
                  {/* 빨간색 영역 경계선 */}
                  {(() => {
                    const redData = [4, 5, 6, 7, 8, 9, 10, 11, 10, 9, 10, 11, 12, 11, 10, 11, 12, 11, 10, 9, 10, 11, 12, 11];
                    const points = redData.map((value, index) => {
                      const x = 40 + index * (340 / 23);
                      const y = 180 - (value / 12) * 160;
                      return { x, y };
                    });
                    
                    const pathData = points.map((point, index) => 
                      `${index === 0 ? 'M' : 'L'} ${point.x} ${point.y}`
                    ).join(' ');
                    
                    return (
                      <path
                        d={pathData}
                        stroke="#EF4444"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    );
                  })()}
                  
                  <defs>
                    <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#1E40AF" stopOpacity="0.4" />
                    </linearGradient>
                    <linearGradient id="redGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#EF4444" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#DC2626" stopOpacity="0.4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </CardContent>
          </Card>
        </div>



        {/* 하단 카드들 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* The 5 Most Used Skills */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-lg">The 5 Most Used Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Marketing", percentage: 71, category: "UCC support", avgTime: "00:00:28" },
                  { name: "Production", percentage: 70, category: "UCC sales", avgTime: "00:00:18" },
                  { name: "Purchasing", percentage: 85, category: "UCC marketing", avgTime: "00:00:13" },
                  { name: "Sales", percentage: 74, category: "UCC backoffice", avgTime: "00:00:32" },
                  { name: "Finance", percentage: 49, category: "UCC finance", avgTime: "00:00:21" }
                ].map((skill, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg">
                    <div className="flex items-center gap-3">
                      <CircularProgress percentage={skill.percentage} label="" size="sm" />
                      <div>
                        <div className="text-white font-medium">{skill.name}</div>
                        <div className="text-gray-400 text-xs">{skill.category}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-gray-400 text-xs">Avg. Queue Time</div>
                      <div className="text-white font-semibold">{skill.avgTime}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 일정관리 달력 */}
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-lg">일정관리</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-900 rounded-lg p-4">
                {/* 달력 헤더 */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-bold text-lg">July 2025</h3>
                  <div className="flex gap-2">
                    <button className="text-white hover:text-gray-300 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>
                    <button className="text-white hover:text-gray-300 transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* 요일 헤더 */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day, index) => (
                    <div key={index} className="text-center text-gray-400 text-xs font-medium py-1">
                      {day}
                    </div>
                  ))}
                </div>
                
                {/* 달력 그리드 */}
                <div className="grid grid-cols-7 gap-1">
                  {/* 3월 말 (빈칸) */}
                  {Array.from({ length: 0 }, (_, i) => (
                    <div key={`empty-${i}`} className="h-8"></div>
                  ))}
                  
                  {/* 4월 날짜들 */}
                  {Array.from({ length: 30 }, (_, i) => {
                    const date = i + 1;
                    const isSelected = date === 3; // 4월 3일이 선택된 날짜
                    
                    return (
                      <div
                        key={date}
                        className={`h-8 flex items-center justify-center text-sm font-medium rounded transition-colors ${
                          isSelected
                            ? 'bg-blue-500 text-white'
                            : 'text-white hover:bg-gray-700'
                        }`}
                      >
                        {date}
                      </div>
                    );
                  })}
                  
                  {/* 5월 시작 (다음 달) */}
                  {Array.from({ length: 6 }, (_, i) => {
                    const date = i + 1;
                    const isNextMonth = date === 1;
                    
                    return (
                      <div
                        key={`next-${date}`}
                        className={`h-8 flex items-center justify-center text-sm font-medium rounded transition-colors ${
                          isNextMonth
                            ? 'text-blue-400'
                            : 'text-white'
                        }`}
                      >
                        {date}
                      </div>
                    );
                  })}
                </div>
                
                {/* 일정 표시 */}
                <div className="mt-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-white text-sm">오늘의 일정</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-white text-sm">완료된 일정</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-white text-sm">긴급 일정</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default function Demo3Page() {
  return (
    <div className="flex">
      <Sidebar />
      <Dashboard />
    </div>
  );
} 
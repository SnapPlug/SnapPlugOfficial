"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Users, 
  MessageCircle, 
  TrendingUp,
  Clock,
  CheckCircle,
  AlertCircle,
  Phone,
  Mail,
  Settings,
  BarChart3,
  Bell,
  UserCheck,
  CalendarDays,
  MessageSquare,
  Activity
} from "lucide-react";

// 헤더 컴포넌트 (관리자 대시보드)
function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">필라테스 스튜디오 관리</h1>
              <p className="text-sm text-gray-600">관리자 대시보드</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
                         <Button className="bg-purple-600 hover:bg-purple-700 text-white" size="sm">
               <Settings className="w-4 h-4 mr-2" />
               설정
             </Button>
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <UserCheck className="w-4 h-4 text-gray-600" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

// 통계 카드 컴포넌트
function StatCard({ title, value, change, icon: Icon, color }: any) {
  return (
    <Card className="border border-purple-200 bg-white shadow-sm">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">{title}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
            {change && (
              <p className={`text-sm ${change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                {change}
              </p>
            )}
          </div>
          <div className={`w-12 h-12 bg-gradient-to-br ${color} rounded-lg flex items-center justify-center`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// 예약 관리 섹션
function ReservationManagement() {
  const [activeTab, setActiveTab] = useState('today');

  const reservations = [
    {
      id: 1,
      customer: "김미영",
      time: "09:00",
      type: "Beginner",
      status: "confirmed",
      phone: "010-1234-5678"
    },
    {
      id: 2,
      customer: "이준호", 
      time: "10:30",
      type: "Balance",
      status: "pending",
      phone: "010-2345-6789"
    },
    {
      id: 3,
      customer: "박지은",
      time: "14:00",
      type: "Rehab",
      status: "confirmed",
      phone: "010-3456-7890"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'confirmed':
        return <Badge className="bg-green-100 text-green-800">확정</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800">대기</Badge>;
      case 'cancelled':
        return <Badge className="bg-red-100 text-red-800">취소</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">알 수 없음</Badge>;
    }
  };

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">예약 관리</h2>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
          <Calendar className="w-4 h-4 mr-2" />
          새 예약 추가
        </Button>
      </div>

      {/* 탭 메뉴 */}
      <div className="flex space-x-1 mb-6">
        <button
          onClick={() => setActiveTab('today')}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            activeTab === 'today' 
              ? 'bg-purple-600 text-white' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          오늘
        </button>
        <button
          onClick={() => setActiveTab('week')}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            activeTab === 'week' 
              ? 'bg-purple-600 text-white' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          이번 주
        </button>
        <button
          onClick={() => setActiveTab('month')}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            activeTab === 'month' 
              ? 'bg-purple-600 text-white' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          이번 달
        </button>
      </div>

      {/* 예약 목록 */}
      <div className="grid gap-4">
        {reservations.map((reservation) => (
          <Card key={reservation.id} className="border border-purple-200 bg-white shadow-sm">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{reservation.customer}</h3>
                    <p className="text-sm text-gray-600">{reservation.type} • {reservation.time}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  {getStatusBadge(reservation.status)}
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white" size="sm">
                    <Phone className="w-4 h-4 mr-1" />
                    연락
                  </Button>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white" size="sm">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    메시지
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

// 고객 관리 섹션
function CustomerManagement() {
  const customers = [
    {
      id: 1,
      name: "김미영",
      email: "kim@example.com",
      phone: "010-1234-5678",
      joinDate: "2024-01-15",
      totalSessions: 24,
      attendanceRate: 95,
      lastVisit: "2024-03-20",
      status: "active"
    },
    {
      id: 2,
      name: "이준호",
      email: "lee@example.com", 
      phone: "010-2345-6789",
      joinDate: "2024-02-01",
      totalSessions: 16,
      attendanceRate: 88,
      lastVisit: "2024-03-18",
      status: "active"
    },
    {
      id: 3,
      name: "박지은",
      email: "park@example.com",
      phone: "010-3456-7890", 
      joinDate: "2024-01-20",
      totalSessions: 32,
      attendanceRate: 92,
      lastVisit: "2024-03-19",
      status: "inactive"
    }
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">고객 관리</h2>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            <Users className="w-4 h-4 mr-2" />
            고객 추가
          </Button>
        </div>

        <div className="grid gap-4">
          {customers.map((customer) => (
            <Card key={customer.id} className="border border-purple-200 bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{customer.name}</h3>
                      <p className="text-sm text-gray-600">{customer.email}</p>
                      <p className="text-sm text-gray-600">{customer.phone}</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="flex items-center space-x-4">
                      <div>
                        <p className="text-sm text-gray-600">총 세션</p>
                        <p className="font-semibold">{customer.totalSessions}회</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">출석률</p>
                        <p className="font-semibold">{customer.attendanceRate}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">마지막 방문</p>
                        <p className="font-semibold">{customer.lastVisit}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white" size="sm">
                      <Mail className="w-4 h-4 mr-1" />
                      이메일
                    </Button>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white" size="sm">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      메시지
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// 메시지 전송 플로우 섹션
function MessageFlow() {
  const [selectedTemplate, setSelectedTemplate] = useState('reminder');
  
  const templates = [
    {
      id: 'reminder',
      name: '수업 리마인드',
      description: '수업 전날 자동 발송',
      icon: Bell
    },
    {
      id: 'welcome',
      name: '신규 고객 환영',
      description: '첫 방문 고객에게 발송',
      icon: UserCheck
    },
    {
      id: 'followup',
      name: '수업 후 피드백',
      description: '수업 완료 후 발송',
      icon: MessageSquare
    }
  ];

  const automationStats = [
    {
      title: "노쇼율 감소",
      value: "-50%",
      description: "평균 감소율",
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "최대 감소율",
      value: "-90%",
      description: "일부 사례",
      color: "from-pink-400 to-purple-400"
    },
    {
      title: "주간 시간 절약",
      value: "5시간+",
      description: "수동 전화 대비",
      color: "from-purple-300 to-pink-300"
    }
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">메시지 자동화</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* 자동화 통계 */}
        <div>
         
          <div className="grid gap-4">
            {automationStats.map((stat, index) => (
              <Card key={index} className="border border-purple-200 bg-white shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-xs text-gray-500">{stat.description}</p>
                    </div>
                    <div className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-lg flex items-center justify-center`}>
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 메시지 템플릿 */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">메시지 템플릿</h3>
          <div className="space-y-3">
            {templates.map((template) => (
              <Card 
                key={template.id} 
                className={`border border-purple-200 bg-white shadow-sm cursor-pointer transition-all ${
                  selectedTemplate === template.id ? 'ring-2 ring-purple-500 bg-purple-50' : ''
                }`}
                onClick={() => setSelectedTemplate(template.id)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                      <template.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-800">{template.name}</h4>
                      <p className="text-sm text-gray-600">{template.description}</p>
                    </div>
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white" size="sm">
                      편집
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-6">
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
              <MessageCircle className="w-4 h-4 mr-2" />
              메시지 발송하기
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

// 메인 대시보드
function Dashboard() {
  const stats = [
    {
      title: "오늘 예약",
      value: "8",
      change: "+2",
      icon: Calendar,
      color: "from-purple-400 to-pink-400"
    },
    {
      title: "활성 고객",
      value: "45",
      change: "+5",
      icon: Users,
      color: "from-purple-300 to-pink-300"
    },
    {
      title: "월 매출",
      value: "₩5,400,000",
      change: "+27%",
      icon: TrendingUp,
      color: "from-pink-400 to-purple-400"
    },
    {
      title: "출석률",
      value: "92%",
      change: "+8%",
      icon: CheckCircle,
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section className="py-4 bg-pink-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">대시보드 개요</h2>
        
        <div className="grid md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              value={stat.value}
              change={stat.change}
              icon={stat.icon}
              color={stat.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Demo2Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Dashboard />
              <div className="grid md:grid-cols-2 gap-8 py-8 bg-white">
          <div className="container mx-auto px-4">
            <div className="bg-gray-50 rounded-lg p-6 shadow-lg">
              <MessageFlow />
            </div>
          </div>
          <div className="container mx-auto px-4">
            <div className="bg-gray-100 rounded-lg p-6 shadow-lg">
              <ReservationManagement />
            </div>
          </div>
        </div>
      <CustomerManagement />
    </div>
  );
} 
"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Bell, 
  Search, 
  Plus, 
  ChevronDown, 
  ChevronUp,
  MoreVertical,
  RefreshCw,
  Users,
  FileText,
  BarChart3,
  FolderOpen,
  Network,
  User,
  CheckCircle,
  Circle,
  Clock,
  AlertCircle,
  TrendingUp,
  Activity
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function HospitalDashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("dashboard");

  const patients = [
    {
      id: 1,
      name: "김영희",
      status: "진행중",
      survey: "산전 검사",
      startDate: "2025/04/10",
      endDate: "2025/04/20",
      progress: 50,
      results: "6/12",
      color: "purple"
    },
    {
      id: 2,
      name: "박민수",
      status: "미시작",
      survey: "건강 상담",
      startDate: "2025/04/15",
      endDate: "2025/04/25",
      progress: 0,
      results: "0/20",
      color: "gray"
    },
    {
      id: 3,
      name: "이지영",
      status: "완료",
      survey: "산후 관리",
      startDate: "2025/03/20",
      endDate: "2025/03/30",
      progress: 100,
      results: "100/100",
      color: "green"
    },
    {
      id: 4,
      name: "최수진",
      status: "진행중",
      survey: "정기 검진",
      startDate: "2025/04/05",
      endDate: "2025/04/15",
      progress: 45,
      results: "45/45",
      color: "purple"
    },
    {
      id: 5,
      name: "정현우",
      status: "완료",
      survey: "임신 상담",
      startDate: "2025/04/01",
      endDate: "2025/04/10",
      progress: 100,
      results: "20/40",
      color: "green"
    }
  ];

  const getStatusColor = (color: string) => {
    switch (color) {
      case "green": return "bg-green-500";
      case "purple": return "bg-purple-500";
      case "gray": return "bg-gray-400";
      default: return "bg-gray-400";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "진행중": return "In progress";
      case "미시작": return "Not started";
      case "완료": return "Completed";
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Demo4 Image */}
      <div className="w-full bg-white border-b border-gray-200 p-4">
        <div className="max-w-7xl mx-auto">
          <img 
            src="/images/Demo4.png" 
            alt="Demo4 Dashboard" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <nav className="text-sm text-gray-600">
              <span>대시보드</span>
              <span className="mx-2">/</span>
              <span className="text-green-600 font-medium">모든 환자 검사</span>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <div className="p-6">
            <div className="flex items-center space-x-2 mb-8">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="font-semibold text-lg">Hospital</span>
            </div>

            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-green-50"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-gray-400">⌘K</span>
            </div>

            {/* Navigation */}
            <nav className="space-y-2">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">
                일반
              </div>
              
              <button
                onClick={() => setActiveSection("dashboard")}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm ${
                  activeSection === "dashboard" 
                    ? "bg-green-50 text-green-700" 
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-4 h-4" />
                  <span>대시보드</span>
                </div>
                <ChevronDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveSection("templates")}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm ${
                  activeSection === "templates" 
                    ? "bg-green-50 text-green-700" 
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <FolderOpen className="w-4 h-4" />
                  <span>전체 템플릿</span>
                </div>
                <ChevronDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveSection("reports")}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm ${
                  activeSection === "reports" 
                    ? "bg-green-50 text-green-700" 
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <BarChart3 className="w-4 h-4" />
                  <span>리포트 및 분석</span>
                </div>
                <ChevronDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveSection("surveys")}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm ${
                  activeSection === "surveys" 
                    ? "bg-green-50 text-green-700" 
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <FileText className="w-4 h-4" />
                  <span>검사</span>
                </div>
                <ChevronUp className="w-4 h-4" />
              </button>

              {/* Survey Submenu */}
              {activeSection === "surveys" && (
                <div className="ml-6 space-y-1">
                  <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                    검사 만들기
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                    내 검사
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm bg-green-100 text-green-700 rounded-lg">
                    할당된 검사
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                    리뷰
                  </button>
                  <button className="w-full text-left px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-lg">
                    검사 받기
                  </button>
                </div>
              )}

              <button
                onClick={() => setActiveSection("feedback")}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm ${
                  activeSection === "feedback" 
                    ? "bg-green-50 text-green-700" 
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Activity className="w-4 h-4" />
                  <span>360 피드백</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge className="bg-green-500 text-white text-xs">24</Badge>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>

              <button
                onClick={() => setActiveSection("sociometry")}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm ${
                  activeSection === "sociometry" 
                    ? "bg-green-50 text-green-700" 
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Network className="w-4 h-4" />
                  <span>소시오메트리</span>
                </div>
                <ChevronDown className="w-4 h-4" />
              </button>

              <button
                onClick={() => setActiveSection("people")}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm ${
                  activeSection === "people" 
                    ? "bg-green-50 text-green-700" 
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Users className="w-4 h-4" />
                  <span>환자</span>
                </div>
                <ChevronDown className="w-4 h-4" />
              </button>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">모든 할당된 검사</h1>
            
            {/* Action Bar */}
            <div className="flex items-center justify-between mb-6">
              <Button className="bg-green-600 hover:bg-green-700 text-white">
                <Plus className="w-4 h-4 mr-2" />
                검사 만들기
              </Button>
              
              <div className="flex space-x-4">
                <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm bg-green-400 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>검사</option>
                </select>
                <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm bg-green-400 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>상태</option>
                </select>
                <select className="px-4 py-2 border border-gray-200 rounded-lg text-sm bg-green-400 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-green-500">
                  <option>날짜 선택</option>
                </select>
              </div>
            </div>

            {/* Patients Table */}
            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          상태
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          검사
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          시작일
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          종료일
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          진행률
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          결과
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          작업
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {patients.map((patient) => (
                        <tr key={patient.id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className={`w-2 h-2 rounded-full ${getStatusColor(patient.color)} mr-2`}></div>
                              <span className="text-sm text-gray-900">{getStatusText(patient.status)}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                                <User className="w-4 h-4 text-blue-600" />
                              </div>
                              <span className="text-sm font-medium text-gray-900">{patient.name}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {patient.startDate}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {patient.endDate}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="w-16 mr-2">
                                <Progress value={patient.progress} className="h-2" />
                              </div>
                              <span className="text-sm text-gray-900">{patient.progress}%</span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {patient.results}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <div className="flex items-center space-x-2">
                              <button className="p-1 hover:bg-gray-100 rounded">
                                <RefreshCw className="w-4 h-4 text-gray-600" />
                              </button>
                              <button className="p-1 hover:bg-gray-100 rounded">
                                <MoreVertical className="w-4 h-4 text-gray-600" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6">
              
              
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 border border-gray-200 rounded text-sm hover:bg-gray-50 text-gray-600">
                  ←
                </button>
                <button className="px-3 py-1 bg-green-600 text-white rounded text-sm">1</button>
                <button className="px-3 py-1 border border-gray-200 rounded text-sm hover:bg-gray-100 text-gray-600">2</button>
                <button className="px-3 py-1 border border-gray-200 rounded text-sm hover:bg-gray-100 text-gray-600">3</button>
                <span className="px-2 text-sm text-gray-600">...</span>
                <button className="px-3 py-1 border border-gray-200 rounded text-sm hover:bg-gray-100 text-gray-600">20</button>
                <button className="px-3 py-1 border border-gray-200 rounded text-sm hover:bg-gray-100 text-gray-600">
                  →
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

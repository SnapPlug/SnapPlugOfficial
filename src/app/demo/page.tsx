"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  BarChart3, 
  ShoppingBag, 
  Mail, 
  Users, 
  Settings, 
  LogOut, 
  Calendar,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  DollarSign,
  CreditCard,
  Wallet,
  ChevronDown,
  Sun,
  Moon
} from "lucide-react";
import { useState, useEffect } from "react";
import { createClient } from '@/utils/supabase/client';

// 사이드바 컴포넌트
function Sidebar() {
  const [activeItem, setActiveItem] = useState("Analytics");
  
  const menuItems = [
    { id: "Analytics", label: "Dashboard", icon: BarChart3 },
    { id: "Messages", label: "메시지", icon: Mail },
    { id: "Customers", label: "학생 관리", icon: Users },
    { id: "Settings", label: "설정", icon: Settings },
  ];

  return (
    <div className="w-64 bg-white h-screen flex flex-col border-r border-gray-200">
      {/* 로고 */}
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg overflow-hidden">
            <img 
              src="/images/rootnroute.png" 
              alt="루트앤루트 로고" 
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-bold text-xl text-gray-800">루트앤루트</span>
        </div>
      </div>

      {/* 네비게이션 메뉴 */}
      <nav className="flex-1 px-4">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg mb-2 transition-colors ${
              activeItem === item.id
                ? "bg-blue-50 text-blue-600"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <item.icon className="w-5 h-5" />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
        
      </nav>

      {/* 하단 지원 섹션 */}
      <div className="p-4 border-t border-gray-200">
        
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg mt-8 text-gray-600 hover:bg-gray-50 transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Sign Out</span>
        </button>
      </div>
    </div>
  );
}

// 헤더 컴포넌트
function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex items-center gap-2 text-gray-600">
          
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        
        
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-700">Admin</span>
          <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full"></div>
        </div>
      </div>
    </header>
  );
}

// 메트릭 카드 컴포넌트
function MetricCard({ title, value, change, changeType, icon: Icon, chartData }: any) {
  return (
    <Card className="bg-white border border-gray-200">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-sm font-medium text-gray-600">{title}</CardTitle>
          <Icon className="w-5 h-5 text-gray-400" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-gray-800">{value}</div>
            <div className="flex items-center gap-1 mt-1">
              {changeType === 'up' ? (
                <TrendingUp className="w-4 h-4 text-green-500" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-500" />
              )}
              <span className={`text-sm ${changeType === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {change}
              </span>
            </div>
          </div>
          {chartData && (
            <div className="w-16 h-16">
              {/* 간단한 도넛 차트 */}
              <div className="w-full h-full rounded-full border-4 border-gray-200 relative">
                <div className="absolute inset-0 rounded-full border-4 border-blue-500" style={{ clipPath: 'polygon(50% 50%, 100% 0%, 100% 100%, 0% 100%, 0% 0%)' }}></div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

// 차트 컴포넌트
function ChartCard({ title, year, data, type = "bar" }: any) {
  return (
    <Card className="bg-white border border-gray-200">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-semibold text-gray-800">{title}</CardTitle>
          <div className="flex items-center gap-2 px-3 py-1 border border-gray-200 rounded-lg">
            <span className="text-sm text-gray-600">{year}</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-64 bg-gray-50 rounded-lg flex items-end justify-between p-4">
          {data.map((value: number, index: number) => (
            <div
              key={index}
              className="bg-blue-500 rounded-t"
              style={{ 
                height: `${(value / 400) * 100}%`,
                width: '8%'
              }}
            ></div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}



// Supabase 데이터 표시 컴포넌트
function SupabaseDataDisplay() {
  const [consultations, setConsultations] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchConsultations();
  }, []);

  const fetchConsultations = async () => {
    try {
      setLoading(true);
      const supabase = createClient();
      console.log('Supabase 클라이언트:', supabase);
      
      // Supabase 연결 테스트 (더 안전한 방법)
      try {
        const { data: testData, error: testError } = await supabase
          .from('Demo1')
          .select('count')
          .limit(1);
        
        console.log('연결 테스트 결과:', { testData, testError });
      } catch (testErr) {
        console.log('연결 테스트 실패:', testErr);
      }
      
      // 먼저 테이블 목록 확인 (간단한 방법)
      try {
        const { data: tables, error: tablesError } = await supabase
          .from('information_schema.tables')
          .select('Demo1')
          .eq('table_schema', 'public');
        
        console.log('사용 가능한 테이블:', tables);
      } catch (tablesErr) {
        console.log('테이블 목록 조회 실패:', tablesErr);
      }
      
      // student_consultations 테이블에서 데이터 불러오기
      try {
        const { data, error } = await supabase
          .from('Demo1')
          .select('*')
          .order('created_at', { ascending: false });

        console.log('Supabase 응답:', { data, error });

        if (error) {
          console.error('Supabase 오류:', error);
          
          // error 객체의 구조를 더 안전하게 처리
          let errorMessage = '알 수 없는 오류';
          
          if (typeof error === 'string') {
            errorMessage = error;
          } else if (error && typeof error === 'object') {
            errorMessage = error.message || error.details || error.hint || error.toString() || '알 수 없는 오류';
          }
          
          console.log('처리된 오류 메시지:', errorMessage);
          
          // Supabase 연결 오류일 때 더 친화적인 메시지 표시
          if (errorMessage.includes('does not exist') || errorMessage.includes('relation')) {
            setError('Supabase 테이블이 존재하지 않습니다. 데이터베이스 설정을 확인해주세요.');
          } else {
            setError(`데이터를 불러오는 중 오류가 발생했습니다: ${errorMessage}`);
          }
          return;
        }

        setConsultations(data || []);
      } catch (supabaseError) {
        console.error('Supabase 호출 중 오류:', supabaseError);
        setError(`Supabase 연결 중 오류가 발생했습니다: ${supabaseError instanceof Error ? supabaseError.message : '알 수 없는 오류'}`);
        return;
      }
    } catch (err) {
      console.error('데이터 불러오기 오류:', err);
      setError(`데이터를 불러오는 중 오류가 발생했습니다: ${err instanceof Error ? err.message : '알 수 없는 오류'}`);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Card className="bg-white border border-gray-200 mt-8">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-800">Supabase 데이터</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-8">
            <div className="text-gray-500">데이터를 불러오는 중...</div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="bg-white border border-gray-200 mt-8">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-800">Supabase 데이터</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-red-500 py-4">{error}</div>
          <Button onClick={fetchConsultations} className="bg-blue-600 hover:bg-blue-700">
            다시 시도
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white border border-gray-200 mt-8">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-800">
          Demo1 테이블 데이터 ({consultations.length}건)
        </CardTitle>
      </CardHeader>
      <CardContent>
        {consultations.length === 0 ? (
          <div className="text-gray-500 py-4 text-center">
            Demo1 테이블에 데이터가 없습니다.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 text-sm font-medium text-gray-600">ID</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-600">이름</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-600">이메일</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-600">학년</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-600">상담신청</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-600">분석완료</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-600">확정완료</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-600">상담일정</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-600">등록일시</th>
                </tr>
              </thead>
              <tbody>
                {consultations.map((consultation, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-3 text-sm text-gray-800">{consultation.id || '-'}</td>
                    <td className="py-3 text-sm text-gray-800">{consultation.name || '-'}</td>
                    <td className="py-3 text-sm text-gray-800">{consultation.email || '-'}</td>
                    <td className="py-3 text-sm text-gray-800">{consultation.grade || '-'}</td>
                    <td className="py-3 text-sm text-gray-800">
                      {consultation.request ? (
                        <span className="text-green-600 font-medium">신청완료</span>
                      ) : (
                        <span className="text-gray-400">미신청</span>
                      )}
                    </td>
                    <td className="py-3 text-sm text-gray-800">
                      {consultation.analyzed ? (
                        <span className="text-blue-600 font-medium">분석완료</span>
                      ) : (
                        <span className="text-gray-400">미분석</span>
                      )}
                    </td>
                    <td className="py-3 text-sm text-gray-800">
                      {consultation.confirmed ? (
                        <span className="text-purple-600 font-medium">확정완료</span>
                      ) : (
                        <span className="text-gray-400">미확정</span>
                      )}
                    </td>
                    <td className="py-3 text-sm text-gray-600">
                      {consultation.date ? new Date(consultation.date).toLocaleDateString('ko-KR') : '-'}
                    </td>
                    <td className="py-3 text-sm text-gray-600">
                      {consultation.created_at ? new Date(consultation.created_at).toLocaleString('ko-KR') : '-'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="mt-4 flex justify-end">
          <Button onClick={fetchConsultations} className="bg-gray-600 hover:bg-gray-700">
            새로고침
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

// 학생 상담 신청 폼 컴포넌트
function StudentConsultationForm() {
  const [formData, setFormData] = useState({
    studentName: '',
    email: '',
    grade: '',
    consultationRequest: '',
    diagnosisStatus: '',
    analysisStatus: '',
    consultationConfirmed: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // 전송할 데이터 로깅
      const requestData = {
        studentName: formData.studentName,
        email: formData.email,
        grade: formData.grade,
        consultationRequest: formData.consultationRequest,
        diagnosisStatus: formData.diagnosisStatus,
        analysisStatus: formData.analysisStatus,
        consultationConfirmed: formData.consultationConfirmed,
        timestamp: new Date().toISOString(),
        source: 'demo-dashboard'
      };
      
      console.log('전송할 데이터:', requestData);
      
      // make.com webhook으로 데이터 전송
      const response = await fetch('https://hook.eu2.make.com/7iqcr9v6jo7aszi2swvot6po8fw19enc', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      console.log('응답 상태:', response.status);
      console.log('응답 헤더:', response.headers);

      if (response.ok) {
        alert('상담 신청이 완료되었습니다!');
        // 폼 초기화
        setFormData({
          studentName: '',
          email: '',
          grade: '',
          consultationRequest: '',
          diagnosisStatus: '',
          analysisStatus: '',
          consultationConfirmed: ''
        });
      } else {
        const errorText = await response.text();
        console.error('서버 응답:', errorText);
        
        // 401 오류인 경우 특별한 메시지 표시
        if (response.status === 401) {
          throw new Error('인증 오류: make.com에서 API Key 설정을 확인해주세요.');
        } else {
          throw new Error(`전송 실패: ${response.status} - ${errorText}`);
        }
      }
      
    } catch (error) {
      console.error('상담 신청 전송 오류:', error);
      const errorMessage = error instanceof Error ? error.message : '알 수 없는 오류';
      alert(`상담 신청 전송 중 오류가 발생했습니다: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Card className="bg-white border border-gray-200 mt-8">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-800">학생 상담 신청</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 학생명 */}
            <div className="space-y-2">
              <Label htmlFor="studentName" className="text-sm font-medium text-gray-700">
                학생명
              </Label>
              <Input
                id="studentName"
                type="text"
                value={formData.studentName}
                onChange={(e) => handleInputChange('studentName', e.target.value)}
                placeholder="학생 이름을 입력하세요"
                className="w-full text-gray-800 placeholder:text-gray-500"
                required
              />
            </div>

            {/* 이메일 */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                이메일
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="이메일을 입력하세요"
                className="w-full text-gray-800 placeholder:text-gray-500"
                required
              />
            </div>

            {/* 학년 */}
            <div className="space-y-2">
              <Label htmlFor="grade" className="text-sm font-medium text-gray-700">
                학년
              </Label>
              <Select value={formData.grade} onValueChange={(value) => handleInputChange('grade', value)}>
                <SelectTrigger className="text-gray-800">
                  <SelectValue placeholder="학년을 선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="고등학교 1학년">고등학교 1학년</SelectItem>
                  <SelectItem value="고등학교 2학년">고등학교 2학년</SelectItem>
                  <SelectItem value="고등학교 3학년">고등학교 3학년</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 상담신청여부 */}
            <div className="space-y-2">
              <Label htmlFor="consultationRequest" className="text-sm font-medium text-gray-700">
                상담신청여부
              </Label>
              <Select value={formData.consultationRequest} onValueChange={(value) => handleInputChange('consultationRequest', value)}>
                <SelectTrigger className="text-gray-800">
                  <SelectValue placeholder="선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes">Yes</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 진단여부 */}
            <div className="space-y-2">
              <Label htmlFor="diagnosisStatus" className="text-sm font-medium text-gray-700">
                진단여부
              </Label>
              <Select value={formData.diagnosisStatus} onValueChange={(value) => handleInputChange('diagnosisStatus', value)}>
                <SelectTrigger className="text-gray-800">
                  <SelectValue placeholder="선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes">Yes</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 분석여부 */}
            <div className="space-y-2">
              <Label htmlFor="analysisStatus" className="text-sm font-medium text-gray-700">
                분석여부
              </Label>
              <Select value={formData.analysisStatus} onValueChange={(value) => handleInputChange('analysisStatus', value)}>
                <SelectTrigger className="text-gray-800">
                  <SelectValue placeholder="선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes">Yes</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* 상담일정확정여부 */}
            <div className="space-y-2">
              <Label htmlFor="consultationConfirmed" className="text-sm font-medium text-gray-700">
                상담일정확정여부
              </Label>
              <Select value={formData.consultationConfirmed} onValueChange={(value) => handleInputChange('consultationConfirmed', value)}>
                <SelectTrigger className="text-gray-800">
                  <SelectValue placeholder="선택하세요" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Yes">Yes</SelectItem>
                  <SelectItem value="No">No</SelectItem>
                </SelectContent>
              </Select>
                      </div>
                    </div>

          {/* 신청하기 버튼 */}
          <div className="flex justify-end pt-4">
            <Button 
              type="submit" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? '전송 중...' : '신청하기'}
            </Button>
        </div>
        </form>
      </CardContent>
    </Card>
  );
}

// 메인 대시보드 컴포넌트
function Dashboard() {
  const salesData = [120, 200, 150, 300, 250, 400, 350, 280, 320, 380, 420, 450];
  const activityData = [250, 300, 280, 350, 320, 380, 360, 400, 380, 420, 400, 450];

  return (
    <div className="flex-1 bg-gray-50 p-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-6">
        <MetricCard
          title="월간 절감 시간"
          value="20시간"
          change="지난달 대비 5시간 절감"
          changeType="up"
          icon={BarChart3}
        />
        <MetricCard
          title="신규 상담 신청 학생 수"
          value="48명"
          change="지난달 대비 7명 증가"
          changeType="up"
          icon={Users}
        />
        <MetricCard
          title="진단 테스트 완료율"
          value="97%"
          change="지난달 대비 2% 증가"
          changeType="up"
          icon={CheckCircle}
        />
 
        <MetricCard
          title="현재 학생수"
          value="92명"
          change="지난달 대비 11명 증가"
          changeType="up"
          icon={Users}
        />
      </div>

              {/* 학생별 상담 진행 상황과 달력 */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 상담 진행 상황 테이블 */}
          <Card className="bg-white border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-800">학생별 상담 진행 상황</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 text-sm font-medium text-gray-600">학생정보</th>
                      <th className="text-center py-3 text-sm font-medium text-gray-600">상담신청</th>
                      <th className="text-center py-3 text-sm font-medium text-gray-600">진단진행</th>
                      <th className="text-center py-3 text-sm font-medium text-gray-600">분석완료</th>
                      <th className="text-center py-3 text-sm font-medium text-gray-600">상담확정</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-100">
                      <td className="py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                            김
                          </div>
                          <div>
                            <div className="font-medium text-gray-800">김민수</div>
                            <div className="text-sm text-gray-500">고등학교 2학년</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 text-center">
                        <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </td>
                      <td className="py-3 text-center">
                        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </td>
                      <td className="py-3 text-center">
                        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </td>
                      <td className="py-3 text-center">
                        <span className="text-gray-400">-</span>
                      </td>
                    </tr>

                    <tr className="border-b border-gray-100">
                      <td className="py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                            이
                          </div>
                          <div>
                            <div className="font-medium text-gray-800">이지은</div>
                            <div className="text-sm text-gray-500">고등학교 3학년</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 text-center">
                        <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </td>
                      <td className="py-3 text-center">
                        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </td>
                      <td className="py-3 text-center">
                        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </td>
                      <td className="py-3 text-center">
                        <div className="w-4 h-4 bg-indigo-500 rounded-full flex items-center justify-center mx-auto">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </td>
                    </tr>

                    <tr className="border-b border-gray-100">
                      <td className="py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                            박
                          </div>
                          <div>
                            <div className="font-medium text-gray-800">박준호</div>
                            <div className="text-sm text-gray-500">중학교 3학년</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 text-center">
                        <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </td>
                      <td className="py-3 text-center">
                        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </td>
                      <td className="py-3 text-center">
                        <span className="text-gray-400">-</span>
                      </td>
                      <td className="py-3 text-center">
                        <span className="text-gray-400">-</span>
                      </td>
                    </tr>

                    <tr className="border-b border-gray-100">
                      <td className="py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                            최
                          </div>
                          <div>
                            <div className="font-medium text-gray-800">최수진</div>
                            <div className="text-sm text-gray-500">고등학교 1학년</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 text-center">
                        <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </td>
                      <td className="py-3 text-center">
                        <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </td>
                      <td className="py-3 text-center">
                        <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center mx-auto">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </td>
                      <td className="py-3 text-center">
                        <div className="w-4 h-4 bg-indigo-500 rounded-full flex items-center justify-center mx-auto">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </td>
                    </tr>

                    <tr className="border-b border-gray-100">
                      <td className="py-3">
                <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                            정
                          </div>
                          <div>
                            <div className="font-medium text-gray-800">정현우</div>
                            <div className="text-sm text-gray-500">중학교 2학년</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 text-center">
                        <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                      </td>
                      <td className="py-3 text-center">
                        <span className="text-gray-400">-</span>
                      </td>
                      <td className="py-3 text-center">
                        <span className="text-gray-400">-</span>
                      </td>
                      <td className="py-3 text-center">
                        <span className="text-gray-400">-</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
          
          {/* 상담 일정 달력 */}
          <Card className="bg-white border border-gray-200">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-gray-800">상담 일정</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {/* 달력 헤더 */}
                <div className="flex items-center justify-between">
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <ChevronDown className="w-4 h-4 rotate-90" />
                  </button>
                  <h3 className="text-lg font-semibold text-gray-800">2025년 6월</h3>
                  <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <ChevronDown className="w-4 h-4 -rotate-90" />
                  </button>
                </div>

                {/* 요일 헤더 */}
                <div className="grid grid-cols-7 gap-1 text-center">
                  <div className="text-sm font-medium text-red-500 py-2">일</div>
                  <div className="text-sm font-medium text-gray-600 py-2">월</div>
                  <div className="text-sm font-medium text-gray-600 py-2">화</div>
                  <div className="text-sm font-medium text-gray-600 py-2">수</div>
                  <div className="text-sm font-medium text-gray-600 py-2">목</div>
                  <div className="text-sm font-medium text-gray-600 py-2">금</div>
                  <div className="text-sm font-medium text-blue-500 py-2">토</div>
                </div>

                {/* 달력 그리드 */}
                <div className="grid grid-cols-7 gap-1">
                  {/* 6월 1일부터 30일까지 */}
                  {Array.from({ length: 30 }, (_, i) => {
                    const day = i + 1;
                    const isToday = day === 6; // 6월 6일을 오늘로 설정
                    const hasConsultation = [6, 8, 12, 15, 20, 25, 28].includes(day); // 상담 일정이 있는 날
                    
                    return (
                      <div
                        key={day}
                        className={`h-10 flex items-center justify-center text-sm rounded-lg cursor-pointer transition-colors ${
                          isToday
                            ? 'bg-blue-500 text-white font-semibold'
                            : hasConsultation
                            ? 'bg-orange-100 text-orange-700 font-medium hover:bg-orange-200'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>

                {/* 상담 일정 목록 */}
                <div className="mt-4 space-y-2">
                  <h4 className="font-medium text-gray-800 mb-3">이번 주 상담 일정</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-2 bg-orange-50 rounded-lg">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">6월 6일 (금) 14:00 - 이지은 상담</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-orange-50 rounded-lg">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">6월 8일 (일) 16:00 - 최수진 상담</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 bg-orange-50 rounded-lg">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-700">6월 12일 (목) 10:00 - 최수진 상담</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
      </div>

        {/* 학생 상담 신청 폼 */}
        <StudentConsultationForm />
        
        {/* Supabase 데이터 표시 */}
        <SupabaseDataDisplay />
    </div>
  );
}

export default function DemoPage() {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <Dashboard />
      </div>
    </div>
  );
}

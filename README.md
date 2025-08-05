# SnapPlug - AI 자동화 시스템

대표님은 퇴근하세요. 이젠 AI가 출근합니다. 2주 안에 완성되는 맞춤형 AI 자동화 시스템으로 반복 업무를 자동화하고 시간을 절약하세요.

## 🚀 데모 섹션 설정

### 환경 변수 설정

`.env.local` 파일에 다음 환경 변수를 설정하세요:

```bash
# Supabase 설정
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here

# make.com webhook URL
NEXT_PUBLIC_MAKE_WEBHOOK_URL=https://hook.eu1.make.com/your-webhook-url-here

# Google Analytics (선택사항)
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_measurement_id_here
```

### Supabase 테이블 생성

`supabase-demo-table.sql` 파일의 SQL을 Supabase SQL 편집기에서 실행하세요:

```sql
-- 데모 요청 테이블 생성
CREATE TABLE IF NOT EXISTS demo_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  date DATE NOT NULL,
  status VARCHAR(50) DEFAULT 'pending' CHECK (status IN ('pending', 'processed', 'failed')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  processed_at TIMESTAMP WITH TIME ZONE,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### make.com 워크플로우 설정

1. make.com에서 새 시나리오 생성
2. Webhook 트리거 추가
3. Supabase 액션 추가 (데이터 저장/업데이트)
4. 웹훅 URL을 환경 변수에 설정

## 🛠️ 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: ShadCN UI
- **Animations**: Framer Motion
- **Database**: Supabase
- **Automation**: make.com
- **Deployment**: Vercel

## 📁 프로젝트 구조

```
snapplug/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── demo/
│   │   │       └── route.ts          # 데모 API 엔드포인트
│   │   ├── presentation/
│   │   │   └── page.tsx              # 프레젠테이션 페이지
│   │   └── globals.css               # 전역 스타일
│   ├── components/
│   │   └── ui/                       # ShadCN UI 컴포넌트
│   └── lib/
│       └── supabase.ts               # Supabase 클라이언트
├── public/
│   └── images/                       # 이미지 파일들
└── supabase-demo-table.sql           # Supabase 테이블 스키마
```

## 🎯 주요 기능

### 데모 섹션
- **실시간 처리**: make.com과 Supabase 연동
- **사용자 입력**: 이름, 이메일, 전화번호, 날짜
- **상태 표시**: make.com 전송, Supabase 저장, 실시간 업데이트
- **결과 표시**: 처리된 데이터 확인

### 인터랙티브 요소
- **3D 카드 플립**: 클릭으로 카드 뒤집기
- **슬라이딩 숫자**: 애니메이션 카운터
- **CPU 아키텍처**: SVG 애니메이션
- **분석 도구**: 자동화 효과 계산

## 🚀 배포

```bash
# 빌드
npm run build

# 배포
vercel --prod
```

## 📞 연락처

- **이메일**: contact@snapplug.com
- **웹사이트**: https://snapplug.com

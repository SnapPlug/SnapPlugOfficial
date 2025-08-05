# Supabase 설정 가이드

## 🚀 Supabase 프로젝트 설정

### 1. Supabase 프로젝트 생성

1. [Supabase](https://supabase.com)에 로그인
2. 새 프로젝트 생성
3. 프로젝트 이름: `snapplug-demo`
4. 데이터베이스 비밀번호 설정
5. 지역 선택 (가까운 지역 권장)

### 2. 환경 변수 설정

`.env.local` 파일에 다음 변수들을 추가하세요:

```bash
# Supabase 설정
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here

# make.com webhook URL
NEXT_PUBLIC_MAKE_WEBHOOK_URL=https://hook.eu2.make.com/your-webhook-url
```

### 3. API 키 찾기

#### **Project URL & API Keys**
1. Supabase 대시보드 → Settings → API
2. **Project URL** 복사 → `NEXT_PUBLIC_SUPABASE_URL`
3. **anon public** 키 복사 → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. **service_role secret** 키 복사 → `SUPABASE_SERVICE_ROLE_KEY`

### 4. 데이터베이스 테이블 생성

#### **SQL 편집기에서 실행**

1. Supabase 대시보드 → SQL Editor
2. 새 쿼리 생성
3. `supabase-demo-table.sql` 파일의 내용 복사하여 실행

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

-- 인덱스 생성 (성능 최적화)
CREATE INDEX IF NOT EXISTS idx_demo_requests_email ON demo_requests(email);
CREATE INDEX IF NOT EXISTS idx_demo_requests_status ON demo_requests(status);
CREATE INDEX IF NOT EXISTS idx_demo_requests_created_at ON demo_requests(created_at DESC);

-- RLS (Row Level Security) 활성화
ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;

-- 관리자만 모든 데이터에 접근 가능하도록 정책 설정
CREATE POLICY "Admin can manage all demo requests" ON demo_requests
  FOR ALL USING (auth.role() = 'authenticated');

-- 자동으로 updated_at 업데이트하는 함수
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- 트리거 생성
CREATE TRIGGER update_demo_requests_updated_at 
  BEFORE UPDATE ON demo_requests 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();
```

### 5. 테이블 확인

#### **Table Editor에서 확인**
1. Supabase 대시보드 → Table Editor
2. `demo_requests` 테이블이 생성되었는지 확인
3. 컬럼 구조 확인:
   - `id` (UUID, Primary Key)
   - `name` (VARCHAR)
   - `email` (VARCHAR)
   - `phone` (VARCHAR)
   - `date` (DATE)
   - `status` (VARCHAR)
   - `created_at` (TIMESTAMP)
   - `processed_at` (TIMESTAMP)
   - `updated_at` (TIMESTAMP)

### 6. 권한 설정

#### **RLS 정책 수정 (선택사항)**
테이블에 직접 접근하려면 RLS를 비활성화하거나 정책을 수정:

```sql
-- RLS 비활성화 (개발용)
ALTER TABLE demo_requests DISABLE ROW LEVEL SECURITY;

-- 또는 모든 사용자에게 읽기 권한 부여
CREATE POLICY "Allow all users to read demo_requests" ON demo_requests
  FOR SELECT USING (true);
```

### 7. 테스트

#### **API 테스트**
```bash
# POST 요청 테스트
curl -X POST http://localhost:3000/api/demo \
  -H "Content-Type: application/json" \
  -d '{
    "name": "테스트",
    "email": "test@example.com",
    "phone": "010-1234-5678",
    "date": "2024-01-15"
  }'
```

#### **브라우저에서 테스트**
1. 개발 서버 실행: `npm run dev`
2. `http://localhost:3000/presentation` 접속
3. 데모 섹션에서 폼 작성 및 제출
4. 브라우저 개발자 도구에서 네트워크 탭 확인

### 8. 문제 해결

#### **일반적인 오류**

1. **"Supabase 환경 변수가 설정되지 않았습니다"**
   - `.env.local` 파일 확인
   - 환경 변수 이름 확인
   - 서버 재시작

2. **"relation "demo_requests" does not exist"**
   - SQL 편집기에서 테이블 생성 스크립트 실행
   - 테이블 이름 확인

3. **"permission denied"**
   - RLS 정책 확인
   - API 키 권한 확인

4. **"invalid input syntax"**
   - 데이터 타입 확인
   - 날짜 형식 확인 (YYYY-MM-DD)

### 9. 모니터링

#### **Supabase 대시보드**
- Database → Logs: SQL 쿼리 로그 확인
- API → Logs: API 호출 로그 확인
- Table Editor: 데이터 확인

#### **Vercel 로그**
- Vercel 대시보드 → Functions → Logs
- API 엔드포인트 오류 확인

## 🔧 추가 설정

### **실시간 구독 (선택사항)**
```typescript
// 실시간 업데이트를 위한 Supabase 클라이언트 설정
const supabase = createClient(url, key, {
  realtime: {
    params: {
      eventsPerSecond: 10,
    },
  },
});
```

### **백업 설정**
- Supabase 대시보드 → Settings → Database
- 자동 백업 설정
- 수동 백업 생성

이제 Supabase가 올바르게 설정되어 데모 섹션이 정상적으로 작동할 것입니다! 🚀 
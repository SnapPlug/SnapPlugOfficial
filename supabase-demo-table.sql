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

-- 샘플 데이터 (선택사항)
-- INSERT INTO demo_requests (name, email, phone, date, status) VALUES
--   ('홍길동', 'hong@example.com', '010-1234-5678', '2024-01-15', 'processed'),
--   ('김철수', 'kim@example.com', '010-2345-6789', '2024-01-16', 'pending'),
--   ('이영희', 'lee@example.com', '010-3456-7890', '2024-01-17', 'processed'); 
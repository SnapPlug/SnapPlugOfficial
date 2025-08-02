# SnapPlug - AI 자동화 시스템

2주 안에 만나는 나만의 AI 자동화 시스템

## 🚀 프로젝트 소개

SnapPlug는 대표님만을 위한 맞춤형 AI 자동화 시스템을 제공하는 플랫폼입니다. 반복적인 업무를 AI가 대신 처리하여 대표님의 시간을 절약하고, 더 중요한 일에 집중할 수 있도록 도와줍니다.

## ✨ 주요 기능

- **맞춤형 AI 자동화**: 대표님의 업무 프로세스에 맞는 개인화된 자동화
- **2주 완성**: 빠른 구현으로 즉시 효과 체감
- **다양한 아바타 시스템**: 고객 후기용 개성 있는 아바타 생성
- **반응형 디자인**: 모바일/데스크탑 최적화
- **현대적인 UI/UX**: ShadCN 컴포넌트 기반의 깔끔한 인터페이스

## 🛠 기술 스택

- **Frontend**: Next.js 15, React, TypeScript
- **Styling**: Tailwind CSS, ShadCN UI
- **Animation**: Framer Motion, Lucide React
- **Deployment**: Vercel
- **Version Control**: Git

## 📦 설치 및 실행

### 필수 요구사항
- Node.js 18.0.0 이상
- npm 또는 yarn

### 설치 방법

1. **저장소 클론**
```bash
git clone https://github.com/[username]/snapplug.git
cd snapplug
```

2. **의존성 설치**
```bash
npm install
```

3. **개발 서버 실행**
```bash
npm run dev
```

4. **브라우저에서 확인**
```
http://localhost:3000
```

## 🏗 빌드 및 배포

### 프로덕션 빌드
```bash
npm run build
```

### Vercel 배포
```bash
npx vercel --prod
```

## 📁 프로젝트 구조

```
snapplug/
├── public/                 # 정적 파일
│   ├── images/            # 이미지 파일
│   └── favicon.svg        # 파비콘
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── page.tsx      # 메인 페이지
│   │   ├── about/        # 소개 페이지
│   │   ├── contact/      # 문의 페이지
│   │   └── api/          # API 라우트
│   ├── components/       # React 컴포넌트
│   │   ├── ui/          # ShadCN UI 컴포넌트
│   │   └── blocks/      # 페이지 블록 컴포넌트
│   └── lib/             # 유틸리티 함수
└── tailwind.config.js   # Tailwind 설정
```

## 🎨 주요 컴포넌트

- **HeroSection**: 메인 랜딩 섹션
- **PortfolioSection**: 포트폴리오 및 실적
- **TestimonialsSection**: 고객 후기
- **ServicesSection**: 서비스 소개
- **PricingSection**: 가격 정보

## 🔧 환경 설정

### 환경 변수
```env
# .env.local
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

## 📈 성능 최적화

- **정적 사이트 생성**: 모든 페이지가 사전 렌더링
- **이미지 최적화**: Next.js Image 컴포넌트 사용
- **코드 분할**: 자동 코드 분할로 빠른 로딩
- **CDN**: Vercel 글로벌 CDN 활용

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 문의

- **이메일**: hello@snapplug.app
- **웹사이트**: https://snapplug.app

## 🙏 감사의 말

- [ShadCN](https://ui.shadcn.com/) - 아름다운 UI 컴포넌트
- [Vercel](https://vercel.com/) - 빠른 배포 플랫폼
- [Next.js](https://nextjs.org/) - 강력한 React 프레임워크
- [Tailwind CSS](https://tailwindcss.com/) - 유틸리티 우선 CSS 프레임워크

---

**SnapPlug** - AI는 반복을, 대표님은 중요한 일을 하세요.

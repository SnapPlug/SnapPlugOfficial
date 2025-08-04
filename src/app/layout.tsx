import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import GoogleAnalytics from "@/components/analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SnapPlug - AI 자동화 시스템 | 2주 안에 완성되는 맞춤형 자동화",
    template: "%s | SnapPlug"
  },
  description: "대표님은 퇴근하세요. 이젠 AI가 출근합니다. 2주 안에 완성되는 맞춤형 AI 자동화 시스템으로 반복 업무를 자동화하고 시간을 절약하세요.",
  keywords: [
    "AI 자동화",
    "업무 자동화",
    "RPA",
    "비즈니스 자동화",
    "스마트워크",
    "업무 효율화",
    "자동화 시스템",
    "AI 솔루션",
    "업무 프로세스 자동화",
    "스타트업 자동화"
  ],
  authors: [{ name: "SnapPlug Team" }],
  creator: "SnapPlug",
  publisher: "SnapPlug",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://snapplug-oouowsxsn-jasonjeongs-projects.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://snapplug-oouowsxsn-jasonjeongs-projects.vercel.app',
    title: 'SnapPlug - AI 자동화 시스템 | 2주 안에 완성되는 맞춤형 자동화',
    description: '대표님은 퇴근하세요. 이젠 AI가 출근합니다. 2주 안에 완성되는 맞춤형 AI 자동화 시스템으로 반복 업무를 자동화하고 시간을 절약하세요.',
    siteName: 'SnapPlug',
    images: [
      {
        url: '/images/SnapPlugLogo.png',
        width: 1200,
        height: 630,
        alt: 'SnapPlug AI 자동화 시스템',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SnapPlug - AI 자동화 시스템',
    description: '2주 안에 완성되는 맞춤형 AI 자동화 시스템',
    images: ['/images/SnapPlugLogo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Google Search Console에서 받은 코드로 교체
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

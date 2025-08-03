'use client';

import Script from 'next/script';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export default function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  );
}

// 페이지 뷰 추적을 위한 훅
export function usePageView() {
  const pageView = (url: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID!, {
        page_path: url,
      });
    }
  };

  return { pageView };
}

// 이벤트 추적을 위한 훅
export function useEventTracking() {
  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  };

  return { trackEvent };
}

// 전화번호 클릭 추적
export function trackPhoneClick() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'phone_click', {
      event_category: 'engagement',
      event_label: 'contact_phone',
    });
  }
}

// 상담 신청 버튼 클릭 추적
export function trackConsultationClick() {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'consultation_click', {
      event_category: 'conversion',
      event_label: 'consultation_request',
    });
  }
}

// 스크롤 깊이 추적
export function trackScrollDepth() {
  if (typeof window !== 'undefined') {
    let maxScroll = 0;
    
    const trackScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);
      
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        
        // 25%, 50%, 75%, 100% 지점에서 추적
        if (maxScroll >= 25 && maxScroll < 50) {
          window.gtag?.('event', 'scroll_depth', {
            event_category: 'engagement',
            event_label: '25_percent',
          });
        } else if (maxScroll >= 50 && maxScroll < 75) {
          window.gtag?.('event', 'scroll_depth', {
            event_category: 'engagement',
            event_label: '50_percent',
          });
        } else if (maxScroll >= 75 && maxScroll < 100) {
          window.gtag?.('event', 'scroll_depth', {
            event_category: 'engagement',
            event_label: '75_percent',
          });
        } else if (maxScroll >= 100) {
          window.gtag?.('event', 'scroll_depth', {
            event_category: 'engagement',
            event_label: '100_percent',
          });
        }
      }
    };
    
    window.addEventListener('scroll', trackScroll);
    
    // 컴포넌트 언마운트 시 이벤트 리스너 제거
    return () => window.removeEventListener('scroll', trackScroll);
  }
}

// 이벤트 추적 함수 (직접 export)
export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}

// 타입 선언
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js',
      targetId: string,
      config?: Record<string, any>
    ) => void;
  }
} 
'use client';

import { trackEvent } from './analytics';

// 포트폴리오 섹션 클릭 추적
export function trackPortfolioClick() {
  trackEvent('portfolio_click', 'engagement', 'portfolio_section');
}

// 자세히 보기 버튼 클릭 추적
export function trackLearnMoreClick() {
  trackEvent('learn_more_click', 'engagement', 'portfolio_learn_more');
}

// 가격 섹션 클릭 추적
export function trackPricingClick() {
  trackEvent('pricing_click', 'engagement', 'pricing_section');
}

// 서비스 섹션 클릭 추적
export function trackServicesClick() {
  trackEvent('services_click', 'engagement', 'services_section');
}

// 로드맵 섹션 클릭 추적
export function trackRoadmapClick() {
  trackEvent('roadmap_click', 'engagement', 'roadmap_section');
}

// 헤더 네비게이션 클릭 추적
export function trackNavigationClick(page: string) {
  trackEvent('navigation_click', 'engagement', `nav_${page}`);
}

// 로고 클릭 추적
export function trackLogoClick() {
  trackEvent('logo_click', 'engagement', 'logo_home');
}

// 모바일 메뉴 클릭 추적
export function trackMobileMenuClick() {
  trackEvent('mobile_menu_click', 'engagement', 'mobile_menu');
}

// 외부 링크 클릭 추적
export function trackExternalLinkClick(url: string) {
  trackEvent('external_link_click', 'engagement', `external_${url}`);
}

// 스크롤 이벤트 추적
export function trackScrollEvent(section: string) {
  trackEvent('scroll_to_section', 'engagement', `scroll_${section}`);
}

// 폼 제출 추적
export function trackFormSubmit(formType: string) {
  trackEvent('form_submit', 'conversion', `form_${formType}`);
}

// 파일 다운로드 추적
export function trackFileDownload(fileName: string) {
  trackEvent('file_download', 'engagement', `download_${fileName}`);
}

// 비디오 재생 추적
export function trackVideoPlay(videoName: string) {
  trackEvent('video_play', 'engagement', `video_${videoName}`);
}

// 소셜 미디어 클릭 추적
export function trackSocialMediaClick(platform: string) {
  trackEvent('social_media_click', 'engagement', `social_${platform}`);
}

// 검색 추적
export function trackSearch(searchTerm: string) {
  trackEvent('search', 'engagement', `search_${searchTerm}`);
}

// 필터 사용 추적
export function trackFilterUse(filterType: string) {
  trackEvent('filter_use', 'engagement', `filter_${filterType}`);
}

// 정렬 변경 추적
export function trackSortChange(sortType: string) {
  trackEvent('sort_change', 'engagement', `sort_${sortType}`);
}

// 페이지 체류 시간 추적
export function trackTimeOnPage(page: string, duration: number) {
  trackEvent('time_on_page', 'engagement', `page_${page}`, duration);
}

// 오류 추적
export function trackError(errorType: string, errorMessage: string) {
  trackEvent('error', 'error', `${errorType}_${errorMessage}`);
}

// 성능 추적
export function trackPerformance(metric: string, value: number) {
  trackEvent('performance', 'performance', metric, value);
} 
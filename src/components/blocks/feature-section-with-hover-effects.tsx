export const automationItems = [
  {
    title: "상담 신청 → 실시간 알림 & 스마트 대응",
    description:
      "고객이 상담 폼을 작성하면, 이전 히스토리를 기반으로 자동 분류 & 알림 전송. 놓치는 상담 없이 바로 응대할 수 있어요.",
    highlight: "Notion CRM과 연동된 스마트 응대 자동화",
    icon: "💬",
  },
  {
    title: "예약 시스템 → 일정 충돌 방지 + 알림",
    description:
      "고객이 예약하면 중복 없이 캘린더에 등록되고, 1일 전/1시간 전 자동 알림까지 전송돼요.",
    highlight: "캘린더+알림톡+이메일 3중 연동",
    icon: "📅",
  },
  {
    title: "결제 연동 → 신뢰 기반 UX 흐름 구성",
    description:
      "결제 전 후기 → 결제 → 안내까지 흐름 설계로 이탈률 감소. 자동 전환 메시지로 고객 경험도 향상돼요.",
    highlight: "고신뢰형 결제 퍼널 자동 설계",
    icon: "💳",
  },
  {
    title: "고객 DB 정리 → Notion CRM 자동 구축",
    description:
      "입력된 고객정보는 자동 분류되어, 상담/예약/결제 흐름이 시각적으로 정리됩니다.",
    highlight: "완성형 1인 운영 CRM 대시보드 제공",
    icon: "📋",
  },
  {
    title: "후기 요청 → 자동화 + 퍼널 연결",
    description:
      "상담 종료 후 일정 시간 지나면 자동 후기 요청 → 좋은 후기는 카드로 만들어 SNS에 활용 가능.",
    highlight: "후기 수집 → 마케팅까지 연결",
    icon: "📝",
  },
  {
    title: "뉴스레터 & 리마인더 자동 발송",
    description:
      "예약한 고객, 이탈한 고객, 기존 고객에게 다른 메시지를 자동 발송하여 관계를 유지합니다.",
    highlight: "고객 상태에 따른 콘텐츠 자동 분기",
    icon: "📨",
  },
  {
    title: "운영 리포트 자동화",
    description:
      "예약수, 상담 전환율, 반복 구매 비율 등 핵심 수치를 추출해 매주 자동 보고합니다.",
    highlight: "숫자 + 해석까지 포함된 경영 리포트",
    icon: "📊",
  },
  {
    title: "SNS 자동 포스팅 → 고객 행동 기반 콘텐츠 예약",
    description:
      "고객 상태(신규/이탈/재구매)에 따라 SNS 콘텐츠가 자동으로 예약 발행됩니다.",
    highlight: "콘텐츠 → 전환 유도까지 자동화",
    icon: "📱",
  },
];

import { cn } from "@/lib/utils";

export function FeaturesSectionWithHoverEffects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {automationItems.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  highlight,
  icon,
  index,
}: {
  title: string;
  description: string;
  highlight: string;
  icon: string;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-4xl">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10 mb-2">
        {description}
      </p>
      <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold max-w-xs relative z-10 px-10">
        {highlight}
      </p>
    </div>
  );
};

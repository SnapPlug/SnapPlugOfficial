"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Target, 
  Award, 
  Heart, 
  CheckCircle, 
  ArrowRight,
  Zap,
  Sparkles,
  Rocket,
  Shield,
  Clock,
  Star,
  Pen,
  Home,
  PenTool,
  PaintBucket,
  Ruler,
  Building2,
  Calendar,
  TrendingUp,
  MessageCircle,
  Lightbulb,
  Settings,
  Layers,
  DollarSign,
  Handshake
} from "lucide-react";
import Link from "next/link";

interface AboutUsSectionProps {
  className?: string;
}

export function AboutUsSection({ className }: AboutUsSectionProps) {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -20]);

  const stats = [
   
    {
      icon: Users,
      value: 2,
      label: "AI 자동화 시스템 완성",
      suffix: "주 이내",
      description: "빠르고 정확한 맞춤형 시스템 구축"
    },
    {
      icon: TrendingUp,
      value: 100,
      label: "만족도 보장",
      suffix: "%",
      description: "불만족 시 전액 환불 또는 무제한 업데이트"
    },
    {
      icon: Calendar,
      value: 24,
      label: "기술 지원",
      suffix: "/7",
      description: "언제든지 도움을 받을 수 있는 전문팀"
    }
  ];

  const services = [
    {
      icon: MessageCircle,
      secondaryIcon: Heart,
      title: "1. 내 상황을 얼마나 잘 이해해주는가?",
      description: "대표님이 요즘 뭐 때문에 지치고 계신지,\n자동화가 왜 필요해졌는지,\n무엇이 발목을 잡고 있는지…\n그걸 먼저 물어봐주는 곳이어야 해요.",
      position: "left"
    },
    {
      icon: Lightbulb,
      secondaryIcon: Zap,
      title: "2. 복잡한 걸 쉽게 설명해주는가?",
      description: "전문 용어나 복잡한 말로 헷갈리게 하지 말고, \n내가 바로 이해할 수 있게 \n쉽고 편하게 풀어주는 사람이 필요해요.",
      position: "left"
    },
    {
      icon: Settings,
      secondaryIcon: CheckCircle,
      title: "3. 내가 직접 쓸 수 있을 만큼 \n관리가 쉬운가?",
      description: "자동화가 끝난 뒤에도 \n‘내 손으로 돌릴 수 있는지’가 중요하잖아요. \n누구한테 매번 물어보지 않아도 \n쉽게 관리할 수 있어야 해요.",
      position: "left"
    },
    {
      icon: Layers,
      secondaryIcon: Target,
      title: "4. 필요한 것만 간결하게, \n단계별로 도입할 수 있는가?",
      description: "처음부터 다 바꾸려면 부담스럽죠.\n지금 꼭 필요한 것부터\n한 걸음씩 시작할 수 있어야\n실제로 써볼 수 있어요.",
      position: "right"
    },
    {
      icon: DollarSign,
      secondaryIcon: TrendingUp,
      title: "5. 예산에 맞는 현실적인 \n제안을 해주는가?",
      description: "한정된 예산 안에서\n나에게 맞는 해법을 같이 고민해주는 사람이\n진짜 믿을 수 있는 파트너 아닐까요?",
      position: "right"
    },
    {
      icon: Handshake,
      secondaryIcon: Star,
      title: "6. 이 사람이 나를 '고객'이 아니라 \n'파트너'로 보고 있는가?",
      description: "기술보다 더 중요한 건 마음이에요.\n그저 프로젝트 하나로 보는 게 아니라\n진심으로 함께 잘되길 바라는 사람이 필요해요.",
      position: "right"
    }
  ];

  return (
    <section className={`w-full py-24 px-4 bg-gradient-to-b from-gray-900 via-blue-900/20 to-purple-900/20 text-white overflow-hidden relative ${className}`}>
      {/* Decorative background elements */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 rounded-full bg-blue-500/5 blur-3xl"
        style={{ y: y1, rotate: rotate1 }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-purple-500/5 blur-3xl"
        style={{ y: y2, rotate: rotate2 }}
      />
      <motion.div
        className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-blue-400/30"
        animate={{
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-purple-400/30"
        animate={{
          y: [0, 20, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div 
          className="flex flex-col items-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="text-blue-400 font-medium mb-2 flex items-center gap-2"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Zap className="w-4 h-4" />
            ABOUT SNAPPLUG
          </motion.span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">대표님은 퇴근하세요. 이젠 AI가 출근합니다.</h1>
          <motion.div
            className="w-24 h-1 bg-blue-500"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <motion.p 
          className="text-center max-w-2xl mx-auto mb-16 text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          자동화를 만들 줄 아는 사람은 많아요.
          <br />
          그런데 대표님 상황까지 함께 설계할 수 있는 사람은 드뭅니다.
          <br />
          이런 기준으로 선택해보세요.
        </motion.p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-20">
          {/* Left Column */}
          <div className="space-y-16">
            {services
              .filter((service) => service.position === "left")
              .map((service, index) => (
                <ServiceItem
                  key={`left-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  delay={index * 0.2}
                  direction="left"
                />
              ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center items-center order-first md:order-none mb-8 md:mb-0">
            <motion.div 
              className="relative w-full max-w-xs"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="rounded-md overflow-hidden shadow-xl"
                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              >
                <img
                  src="/images/SnapPlugLogo.png"
                  alt="SnapPlug AI Automation"
                  className="w-full h-full object-cover"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent flex items-end justify-center p-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                  viewport={{ once: true }}
                >
                  
                </motion.div>
              </motion.div>
          
              {/* Floating accent elements */}
              <motion.div
                className="absolute -top-4 -right-8 w-16 h-16 rounded-full bg-blue-500/10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                viewport={{ once: true }}
                style={{ y: y1 }}
              />
              <motion.div
                className="absolute -bottom-6 -left-10 w-20 h-20 rounded-full bg-purple-500/15"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                viewport={{ once: true }}
                style={{ y: y2 }}
              />
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-16">
            {services
              .filter((service) => service.position === "right")
              .map((service, index) => (
                <ServiceItem
                  key={`right-${index}`}
                  icon={service.icon}
                  secondaryIcon={service.secondaryIcon}
                  title={service.title}
                  description={service.description}
                  delay={index * 0.2}
                  direction="right"
                />
              ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              suffix={stat.suffix}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

interface ServiceItemProps {
  icon: React.ComponentType<{ className?: string }>;
  secondaryIcon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  delay: number;
  direction: "left" | "right";
}

function ServiceItem({ icon: Icon, secondaryIcon: SecondaryIcon, title, description, delay, direction }: ServiceItemProps) {
  return (
    <motion.div
      className="flex flex-col group"
      initial={{ opacity: 0, x: direction === "left" ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="flex items-center gap-3 mb-3"
        initial={{ x: direction === "left" ? -20 : 20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
        viewport={{ once: true }}
      >
        <motion.div
          className="text-blue-500 bg-blue-500/10 p-3 rounded-lg transition-colors duration-300 group-hover:bg-blue-500/20 relative"
          whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
        >
          <Icon className="w-6 h-6" />
          <SecondaryIcon className="w-4 h-4 absolute -top-1 -right-1 text-purple-400" />
        </motion.div>
        <h3 className="text-xl font-medium text-white group-hover:text-blue-400 transition-colors duration-300 whitespace-pre-line">
          {title}
        </h3>
      </motion.div>
      <motion.p
        className="text-sm text-gray-300 leading-relaxed pl-12 whitespace-pre-line"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: delay + 0.4 }}
        viewport={{ once: true }}
      >
        {description}
      </motion.p>
    </motion.div>
  );
}

interface StatCounterProps {
  icon: React.ComponentType<{ className?: string }>;
  value: number;
  label: string;
  suffix: string;
  delay: number;
}

function StatCounter({ icon: Icon, value, label, suffix, delay }: StatCounterProps) {
  return (
    <motion.div
      className="bg-white/5 backdrop-blur-sm p-6 rounded-xl flex flex-col items-center text-center group hover:bg-white/10 transition-colors duration-300 border border-white/10"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <motion.div
        className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 text-blue-400 group-hover:bg-blue-500/20 transition-colors duration-300"
        whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
      >
        <Icon className="w-6 h-6" />
      </motion.div>
      <div className="text-3xl font-bold text-white flex items-center">
        <span>{value}</span>
        <span>{suffix}</span>
      </div>
      <p className="text-gray-300 text-sm mt-1">{label}</p>
      <motion.div className="w-10 h-0.5 bg-blue-500 mt-3 group-hover:w-16 transition-all duration-300" />
    </motion.div>
  );
}


// component.tsx
'use client';

import { useScroll, useTransform, motion, MotionValue } from 'motion/react';
import React, { useRef, forwardRef } from 'react';

// RoadmapSection 컴포넌트 정의
function RoadmapSection() {
  const steps = [
    {
      step: "Step 1",
      title: "오직 대표님만의 맞춤형 솔루션을 찾아보세요.",
    },
    {
      step: "Step 2", 
      title: "2주 안에 나만의 AI 자동화 시스템을 완성해보세요.",
      description: "14일이면 충분합니다. 대표님 시간을 아껴보세요.",
      status: "In Progress",
      image: "/images/demo3.png"
    }
  ];

  return (
    <section className="py-8 sm:py-12 bg-gray-900 dark:bg-gray-900 flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center mb-8 sm:mb-16 px-4">
        <span className="inline-block px-3 sm:px-4 py-1 mb-4 sm:mb-6 rounded-full bg-gray-200 dark:bg-gray-900 text-gray-700 dark:text-gray-200 text-xs font-semibold tracking-widest uppercase">✨ Our Process</span>
        <h1 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white leading-relaxed">
          <span className="block sm:inline">지금, 대표님만의 AI 자동화</span>
          <span className="block sm:inline">시스템을 만나보세요.</span>
        </h1>
        {steps.map((stepData, index) => (
          <div key={index} className="mb-12 sm:mb-16 last:mb-0 mt-8 sm:mt-12">
            {/* Step Header */}
            <div className="text-center mb-6 sm:mb-8 px-4">
              <div className="inline-block bg-gray-700 text-white px-2 sm:px-3 py-1 rounded-lg text-xs sm:text-sm font-medium mb-3 sm:mb-4">
                {stepData.step}
              </div>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 leading-relaxed">
                {stepData.step === "Step 1" ? (
                  <>
                    <span className="block sm:inline">오직 대표님만의 맞춤형</span>
                    <span className="block sm:inline">솔루션을 찾아보세요.</span>
                  </>
                ) : stepData.step === "Step 2" ? (
                  <>
                    <span className="block sm:inline">2주 안에 나만의 AI 자동화</span>
                    <span className="block sm:inline">시스템을 완성해보세요.</span>
                  </>
                ) : (
                  stepData.title
                )}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {stepData.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

interface SectionProps {
  scrollYProgress: MotionValue<number>;
}

const Section1: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
  return (
    <motion.section
      style={{ scale, rotate }}
      className='sticky font-semibold top-0 h-screen bg-gradient-to-t to-[#dadada] from-[#ebebeb] flex flex-col items-center justify-center text-black'
    >
      <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>

      <RoadmapSection />
    </motion.section>
  );
};

const Section2: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.section
      style={{ scale, rotate }}
      className='relative h-screen bg-gradient-to-t to-[#1a1919] from-[#06060e] text-white '
    >
      <div className='absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
      <div className='relative z-10'>
        <RoadmapSection />
        </div>
    </motion.section>
  );
};

const Component = forwardRef<HTMLElement>((props, ref) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  });

  return (
    <>
      <main ref={container} className='relative h-[200vh] bg-black'>
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
        <footer className='group bg-[#06060e] '>
          <h1 className='text-[16vw] translate-y-20 leading-[100%] uppercase font-semibold text-center bg-gradient-to-r from-gray-400 to-gray-800 bg-clip-text text-transparent transition-all ease-linear'>
            ui-layout
          </h1>
          <div className='bg-black text-white h-40 relative z-10 grid place-content-center text-2xl rounded-tr-full rounded-tl-full'></div>
        </footer>
      </main>
    </>
  );
});

Component.displayName = 'Component';

export default Component;
'use client';

import Image from "next/image";
import { User } from "lucide-react";
import { useState } from "react";

interface TestimonialAuthor {
  name: string;
  handle: string;
  avatar: string;
}

interface Testimonial {
  author: TestimonialAuthor;
  text: string;
}

interface TestimonialsMarqueeProps {
  testimonials: Testimonial[];
}

export function TestimonialsMarquee({ testimonials }: TestimonialsMarqueeProps) {
  const [imageErrors, setImageErrors] = useState<{ [key: string]: boolean }>({});

  const handleImageError = (avatarSrc: string) => {
    setImageErrors(prev => ({ ...prev, [avatarSrc]: true }));
  };

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
        <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
          {[...Array(4)].map((_, setIndex) => (
            testimonials.map((testimonial, i) => (
              <div
                key={`${setIndex}-${i}`}
                className="flex flex-col rounded-lg border-t bg-gradient-to-b from-gray-800/50 to-gray-800/10 p-3 sm:p-4 md:p-6 text-start hover:from-gray-800/60 hover:to-gray-800/20 max-w-[280px] sm:max-w-[320px] transition-colors duration-300"
              >
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-lg flex items-center justify-center shadow-sm border border-gray-200 p-1">
                      {!imageErrors[testimonial.author.avatar] ? (
                        <Image
                          src={testimonial.author.avatar}
                          alt={testimonial.author.name}
                          width={40}
                          height={40}
                          className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover"
                          onError={() => handleImageError(testimonial.author.avatar)}
                          unoptimized
                        />
                      ) : (
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                          <User className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col items-start min-w-0 flex-1">
                    <h3 className="text-sm sm:text-base font-semibold leading-none text-white truncate w-full">
                      {testimonial.author.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-400 truncate w-full">
                      {testimonial.author.handle}
                    </p>
                  </div>
                </div>
                <p className="text-xs sm:text-sm md:text-base mt-3 sm:mt-4 text-gray-300 leading-relaxed">
                  {testimonial.text}
                </p>
              </div>
            ))
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/3 bg-gradient-to-r from-gray-900 sm:block" />
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/3 bg-gradient-to-l from-gray-900 sm:block" />
    </div>
  );
} 
import React from 'react';
import Image from "next/image";

export const Component = () => {
  // Images for the infinite scroll - using Unsplash URLs
  const images = [
    "/images/Demo1.png",
    "/images/Demo2.png",
    "/images/Demo4.png"
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <>
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: scroll-right 20s linear infinite;
        }

        .scroll-container {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .image-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .image-item:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
      `}</style>
      
      <div className="w-full bg-white dark:bg-gray-800 relative overflow-hidden flex items-center justify-center py-8">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/90 to-white dark:from-gray-800 dark:via-gray-800/90 dark:to-gray-800 z-0" />
        
        {/* Scrolling images container */}
        <div className="relative z-10 w-full flex items-center justify-center py-8">
          <div className="scroll-container w-full max-w-6xl">
            <div className="infinite-scroll flex gap-6 w-max">
              {duplicatedImages.map((image, index) => (
                <div
                  key={index}
                  className="image-item flex-shrink-0 aspect-[16/9] w-96 md:w-[32rem] lg:w-[40rem] rounded-xl overflow-hidden shadow-2xl relative"
                >
                  <Image
                    src={image}
                    alt={`Gallery image ${(index % images.length) + 1}`}
                    className="object-cover"
                    fill
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom gradient overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent dark:from-gray-800 z-20" />
      </div>
    </>
  );
}; 
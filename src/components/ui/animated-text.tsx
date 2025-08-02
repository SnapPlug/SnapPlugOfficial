"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface AnimatedTextProps {
  phrases: string[]
  className?: string
  interval?: number
}

export function AnimatedText({ phrases, className, interval = 2000 }: AnimatedTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % phrases.length)
    }, interval)

    return () => clearInterval(timer)
  }, [phrases.length, interval])

  return (
    <div className={cn("relative inline-block text-left", className)}>
      {phrases.map((phrase, index) => (
        <span
          key={index}
          className={cn(
            "absolute left-0 top-0 transition-all duration-500 ease-in-out whitespace-nowrap",
            currentIndex === index
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2"
          )}
        >
          {phrase}
        </span>
      ))}
    </div>
  )
} 
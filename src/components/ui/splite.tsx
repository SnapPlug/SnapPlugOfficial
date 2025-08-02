'use client'

import { Suspense, lazy } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  return (
    <Suspense 
      fallback={
        <div className="w-full h-full flex items-center justify-center">
          <span className="loader"></span>
        </div>
      }
    >
      <div className={`${className} opacity-80 md:scale-100 scale-100`}>
        <Spline
          scene={scene}
          className="w-full h-full"
          style={{ margin: 0, padding: 0 }}
        />
      </div>
    </Suspense>
  )
}
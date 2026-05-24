'use client'

import Image from 'next/image'
import { useState, type CSSProperties } from 'react'
import { cn } from '@/lib/utils'

interface SmartImageProps {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  sizes?: string
  priority?: boolean
  className?: string
  style?: CSSProperties
}

export function SmartImage({ src, alt, fill = false, width, height, sizes, priority, className, style }: SmartImageProps) {
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div
        className={cn('flex items-center justify-center bg-moutarde-clair', className)}
        style={fill ? { position: 'absolute', inset: 0 } : { width, height }}
        aria-label={alt}
      >
        <span className="px-4 text-center font-sans text-[11px] font-medium uppercase leading-relaxed tracking-[0.12em] text-charbon/60">
          Photo à venir
          <br />
          <span className="text-[9px] tracking-normal opacity-70">{src}</span>
        </span>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      sizes={sizes}
      priority={priority}
      onError={() => setError(true)}
      className={className}
      style={style}
    />
  )
}

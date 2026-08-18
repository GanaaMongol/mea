'use client'

import { useState } from 'react'

import type { CarouselBlock } from '@/payload-types'

import { MediaImage } from '@/components/ui/MediaImage'

type Slides = NonNullable<CarouselBlock['slides']>

const Chevron = ({ direction }: { direction: 'left' | 'right' }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points={direction === 'left' ? '15 18 9 12 15 6' : '9 18 15 12 9 6'} />
  </svg>
)

export function CarouselView({ slides }: { slides: Slides }) {
  const [index, setIndex] = useState(0)
  const count = slides.length
  const at = (offset: number) => slides[(index + offset + count) % count]

  const move = (step: number) => setIndex((current) => (current + step + count) % count)

  return (
    <div className="carousel">
      <div className="carousel__viewport">
        <div className="carousel__track">
          {count > 1 ? (
            <div className="carousel__slide carousel__slide--side" aria-hidden="true">
              <MediaImage media={at(-1).image} alt="" sizes="60vw" />
            </div>
          ) : null}
          <div className="carousel__slide carousel__slide--main">
            <MediaImage
              media={at(0).image}
              alt={at(0).alt ?? ''}
              sizes="(max-width: 1200px) 90vw, 1152px"
            />
          </div>
          {count > 1 ? (
            <div className="carousel__slide carousel__slide--side" aria-hidden="true">
              <MediaImage media={at(1).image} alt="" sizes="60vw" />
            </div>
          ) : null}
        </div>
        <span className="carousel__fade carousel__fade--left" />
        <span className="carousel__fade carousel__fade--right" />
      </div>
      {count > 1 ? (
        <>
          <button
            type="button"
            className="carousel__nav carousel__nav--prev"
            aria-label="Өмнөх"
            onClick={() => move(-1)}
          >
            <Chevron direction="left" />
          </button>
          <button
            type="button"
            className="carousel__nav carousel__nav--next"
            aria-label="Дараах"
            onClick={() => move(1)}
          >
            <Chevron direction="right" />
          </button>
        </>
      ) : null}
    </div>
  )
}

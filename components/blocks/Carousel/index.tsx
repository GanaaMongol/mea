import type { CarouselBlock as CarouselProps } from '@/payload-types'

import { CarouselView } from './CarouselView'

export function Carousel({ slides }: CarouselProps) {
  if (!slides?.length) return null

  return (
    <section className="carousel-section">
      <CarouselView slides={slides} />
    </section>
  )
}

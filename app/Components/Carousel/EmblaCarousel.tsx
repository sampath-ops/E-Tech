import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'
import useEmblaCarousel from 'embla-carousel-react'
import { TestimonialData } from '@/app/Testimonial/TestimonialData'
import { TestimonialCard } from '@/app/Testimonial/TestimonialCard'

const OPTIONS: EmblaOptionsType = { align: 'start' }

const EmblaCarousel = () => {

  const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)
 
  return (
    <section className="embla">
      <div className='embla__viewport' ref={emblaRef}>
        <div className="embla__container gap-6 lg:gap-[60px]">
          {TestimonialData.map((review,index) => (
            <TestimonialCard key={index} data={review} />
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmblaCarousel

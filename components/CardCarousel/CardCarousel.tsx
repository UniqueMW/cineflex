'use client'
import React from 'react'
import { Card } from 'components'
import {
  SwiperSlide,
  Swiper,
  Navigation
} from 'PackagesClientComponents/swiper'
import type { ICardSeriesAndMovie, IMovie, Season } from 'types'
import { useWindowSize } from 'hooks'
import 'swiper/css'
import 'swiper/css/navigation'

interface ICardCarouselProps {
  carouselTitle: string
  data: Array<ICardSeriesAndMovie & IMovie & Season>
}

const CardCarousel = React.memo(function (
  props: ICardCarouselProps
): JSX.Element {
  const [sizeType] = useWindowSize()

  const cards = React.useMemo(() => {
    return props.data?.map((movie) => (
      <SwiperSlide key={movie.id}>
        <Card data={movie} />
      </SwiperSlide>
    ))
  }, [props.data])

  return (
    <section className="space-y-2">
      <div className="flex flex-row justify-between items-center">
        <h1 className="md:text-2xl text-xl text-headline font-heading font-semibold tracking-wider">
          {props.carouselTitle}
        </h1>
      </div>
      <Swiper
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        slidesPerView={sizeType === 'lg' ? 6 : sizeType === 'md' ? 4 : 3}
        slidesPerGroup={sizeType === 'lg' ? 6 : sizeType === 'md' ? 4 : 3}
      >
        {cards}
      </Swiper>
    </section>
  )
})

CardCarousel.displayName = 'CardCarousel'

export default CardCarousel

'use client'
import React from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import useSWR from 'swr'
import { fetcher } from 'utils'
import { Card } from 'components'
import {
  SwiperSlide,
  Swiper,
  Navigation
} from 'PackagesClientComponents/swiper'

import type { IMoviePage } from 'types'

interface ICardCarouselProps {
  url: string
  carouselTitle: string
}

function CardCarousel(props: ICardCarouselProps): JSX.Element {
  const { data } = useSWR<IMoviePage>(props.url, fetcher)

  const cards = React.useMemo(() => {
    return data?.results.map((movie) => (
      <SwiperSlide key={movie.id}>
        <Card data={movie} />
      </SwiperSlide>
    ))
  }, [data])
  return (
    <section className="px-10 py-2 space-y-2">
      <h1 className="text-2xl text-headline font-heading font-semibold tracking-wider">
        {props.carouselTitle}
      </h1>
      <Swiper
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        slidesPerView={6}
        slidesPerGroup={6}
      >
        {cards}
      </Swiper>
    </section>
  )
}

export default CardCarousel

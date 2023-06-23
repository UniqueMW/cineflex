'use client'
import React from 'react'
import useSWR from 'swr'
import { fetcher } from 'utils'
import { Card } from 'components'
import {
  SwiperSlide,
  Swiper,
  Navigation
} from 'PackagesClientComponents/swiper'

import type { IMoviePage } from 'types'

function CardCarousel(): JSX.Element {
  const { data } = useSWR<IMoviePage>(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${
      process.env.NEXT_PUBLIC_API_KEY as string
    }`,
    fetcher
  )

  const cards = React.useMemo(() => {
    return data?.results.map((movie) => (
      <SwiperSlide key={movie.id}>
        <Card data={movie} />
      </SwiperSlide>
    ))
  }, [data])
  return (
    <section className="px-10 py-2">
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

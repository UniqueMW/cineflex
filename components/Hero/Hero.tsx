'use client'
import React from 'react'
import type { IMoviePage } from 'types'
import useSWR from 'swr'
import { HeroSlide, MobileHeroSlide } from 'components'
import { fetcher } from 'utils'
import {
  Swiper,
  SwiperSlide,
  Navigation
} from 'PackagesClientComponents/swiper'

function Hero(): JSX.Element {
  const { data } = useSWR<IMoviePage>(
    `https://api.themoviedb.org/3/discover/movie?api_key=${
      process.env.NEXT_PUBLIC_API_KEY as string
    }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
    fetcher
  )

  const movieHeros = React.useMemo(() => {
    return data?.results.map((heroMovie) => (
      <SwiperSlide key={heroMovie.id}>
        <HeroSlide heroMovie={heroMovie} />
        <MobileHeroSlide heroMovie={heroMovie} />
      </SwiperSlide>
    ))
  }, [data])

  return (
    <section className="lg:h-fit h-[2560] overflow-y-hidden">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        navigation={true}
        modules={[Navigation]}
      >
        {movieHeros}
      </Swiper>
    </section>
  )
}

export default Hero

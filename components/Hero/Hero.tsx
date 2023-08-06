'use client'
import React from 'react'
// import 'swiper/css'
// import 'swiper/css/navigation'
import type { IMoviePage } from 'types'
import useSWR from 'swr'
import { HeroSlide, MobileHeroSlide } from 'components'
import { HeroSlideSkeleton } from 'skeletons'
import { fetcher } from 'utils'
import {
  Swiper,
  SwiperSlide,
  Navigation
} from 'PackagesClientComponents/swiper'

const swrConfig = {
  refreshInterval: 60000, // Refresh every 1 minute
  revalidateOnReconnect: true,
  dedupingInterval: 600000 // Deduping interval of 10 minutes
}

function Hero(): JSX.Element {
  const { data } = useSWR<IMoviePage>(
    `https://api.themoviedb.org/3/discover/movie?api_key=${
      process.env.NEXT_PUBLIC_API_KEY as string
    }&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`,
    fetcher,
    swrConfig
  )

  const movieHeros = React.useMemo(() => {
    return data?.results.map((heroMovie) => (
      <SwiperSlide key={heroMovie.id}>
        <HeroSlide heroMovie={heroMovie} />
        <MobileHeroSlide heroMovie={heroMovie} />
      </SwiperSlide>
    ))
  }, [data])

  if (data !== undefined) {
    return (
      <section className="relative lg:block hidden">
        <HeroSlideSkeleton />
        <h2>Stuff...</h2>
      </section>
    )
  }

  return (
    <section className="h-fit">
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

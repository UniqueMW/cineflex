'use client'
import React from 'react'
import type { IMoviePage } from 'types'
import useSWR from 'swr'
import { HeroSlide } from 'components'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import {
  Swiper,
  SwiperSlide,
  Pagination,
  Navigation
} from 'PackagesClientComponents/swiper'

async function fetcher(url: string): Promise<any> {
  const fetchedData = await fetch(url)
  const serializedFetchedData = await fetchedData.json()

  return serializedFetchedData
}

function Hero(): JSX.Element {
  const { data } = useSWR<IMoviePage>(
    'https://api.themoviedb.org/3/discover/movie?api_key=f3376cc5ee3abb395a7d4dc9d5616f9e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1',
    fetcher
  )

  const movieHeros = React.useMemo(() => {
    return data?.results.map((heroMovie) => (
      <SwiperSlide key={heroMovie.id}>
        <HeroSlide heroMovie={heroMovie} />
      </SwiperSlide>
    ))
  }, [data])

  return (
    <section>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {movieHeros}
      </Swiper>
    </section>
  )
}

export default Hero

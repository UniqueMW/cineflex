import React from 'react'
import Image from 'next/image'
import { HeroSlideDetails } from 'components'
import type { IMovie } from 'types'

interface IHeroSlideProps {
  heroMovie: IMovie
}

function MobileHeroSlide({ heroMovie }: IHeroSlideProps): JSX.Element {
  return (
    <section className="relative lg:hidden block">
      <Image
        src={`https://image.tmdb.org/t/p/original/${heroMovie.poster_path}`}
        height={2560}
        width={1440}
        alt={heroMovie.title}
        className="min-w-full max-h-screen border"
      />
      <HeroSlideDetails heroMovie={heroMovie} />
    </section>
  )
}

export default MobileHeroSlide

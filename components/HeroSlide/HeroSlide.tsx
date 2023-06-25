import React from 'react'
import Image from 'next/image'
import type { ICardSeriesAndMovie, IMovie } from 'types'
import { HeroSlideDetails } from 'components'

interface IHeroSlideProps {
  heroMovie: IMovie | ICardSeriesAndMovie
}

function HeroSlide({ heroMovie }: IHeroSlideProps): JSX.Element {
  return (
    <section className="relative lg:block hidden">
      <Image
        src={`https://image.tmdb.org/t/p/original/${heroMovie.backdrop_path}`}
        height={758.81}
        placeholder="blur"
        blurDataURL="/heroPlaceholder.png"
        width={1349}
        alt={heroMovie.title as string}
        className="w-full object-cover object-center"
      />
      <HeroSlideDetails heroMovie={heroMovie} />
    </section>
  )
}

export default HeroSlide

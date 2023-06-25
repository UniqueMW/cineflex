import React from 'react'
import Image from 'next/image'
import { HeroSlideDetails } from 'components'
import type { ICardSeriesAndMovie, IMovie } from 'types'

interface IHeroSlideProps {
  heroMovie: IMovie | ICardSeriesAndMovie
}

function MobileHeroSlide({ heroMovie }: IHeroSlideProps): JSX.Element {
  return (
    <section className="relative lg:hidden ">
      <Image
        src={`https://image.tmdb.org/t/p/original/${heroMovie.poster_path}`}
        height={748.5}
        width={499}
        alt={heroMovie.title as string}
        placeholder="blur"
        blurDataURL="/mobilePlaceholder.png"
        className="object-cover object-center w-full"
      />
      <HeroSlideDetails heroMovie={heroMovie} />
    </section>
  )
}

export default MobileHeroSlide

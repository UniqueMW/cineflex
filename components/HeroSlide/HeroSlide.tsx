import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import type { ICardSeriesAndMovie, IMovie } from 'types'
import { HeroSlideDetails } from 'components'

interface IHeroSlideProps {
  heroMovie: IMovie | ICardSeriesAndMovie
}

function HeroSlide({ heroMovie }: IHeroSlideProps): JSX.Element {
  return (
    <Link
      href={`/${heroMovie.release_date !== undefined ? 'movie' : 'tv'}/${
        heroMovie.id
      }`}
    >
      <section className="relative lg:block hidden">
        <Image
          src={`https://image.tmdb.org/t/p/original/${heroMovie.backdrop_path}`}
          height={758.81}
          placeholder="blur"
          blurDataURL="/heroPlaceholder.png"
          width={1349}
          alt={heroMovie.title as string}
          className="w-full object-cover object-center"
          onError={(event) => {
            event.currentTarget.src = '/brokenImage.png'
          }}
        />
        <HeroSlideDetails heroMovie={heroMovie} />
      </section>
    </Link>
  )
}

export default HeroSlide

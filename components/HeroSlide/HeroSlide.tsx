import React from 'react'
import Image from 'next/image'
import * as _ from 'lodash'
import { AiOutlineCalendar } from 'react-icons/ai'
import type { IMovie } from 'types'
import { Ratings } from 'components'

// TODO add genre
// TODO add watchlist and trailer buttons

interface IHeroSlideProps {
  heroMovie: IMovie
}

function HeroSlide({ heroMovie }: IHeroSlideProps): JSX.Element {
  return (
    <section className="relative">
      <Image
        src={`https://image.tmdb.org/t/p/original/${heroMovie.backdrop_path}`}
        height={1080}
        width={1920}
        alt={heroMovie.title}
        className="min-w-full max-h-screen border"
      />
      <div className="absolute top-32 left-10 space-y-4">
        <h3 className="bg-button/90 w-fit p-2">
          <Ratings rating={heroMovie.vote_average} />
        </h3>
        <h1 className="text-5xl text-headline font-heading font-semibold tracking-wider bg-button/90 w-fit max-w-[40%] p-2">
          {_.truncate(heroMovie.title, {
            length: 60,
            omission: '.....'
          })}
        </h1>
        <h3 className="flex flex-row items-center text-headline font-heading tracking-wider text-base space-x-2 bg-button/90 w-fit p-2">
          <AiOutlineCalendar className="mr-2" />
          {heroMovie.release_date}
        </h3>
        <p className="text-base text-paragraph tracking-wider font-paragraph max-w-[40%] bg-button/90 p-2">
          {_.truncate(heroMovie.overview, {
            length: 300,
            omission: '.....'
          })}
        </p>
      </div>
    </section>
  )
}

export default HeroSlide

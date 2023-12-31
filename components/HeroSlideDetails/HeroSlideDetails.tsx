import React from 'react'
import { Genre, Ratings, Date } from 'components'
import * as _ from 'lodash'

import type { ICardSeriesAndMovie, IMovie } from 'types'

interface IHeroSlideProps {
  heroMovie: IMovie | ICardSeriesAndMovie
}

function HeroSlideDetails({ heroMovie }: IHeroSlideProps): JSX.Element {
  return (
    <div className="absolute lg:top-32 lg:left-10 lg:bottom-0 left-4 bottom-16 z-10 space-y-4">
      <h3 className="bg-button/90 w-fit p-2">
        <Ratings rating={heroMovie.vote_average} />
      </h3>
      <h1 className=" text-3xl lg:text-5xl text-headline font-heading font-semibold tracking-wider bg-button/90 w-fit lg:max-w-[40%] max-w-[90%] md:max-w-[90%] p-2">
        {_.truncate(heroMovie.title, {
          length: 30,
          omission: '.....'
        })}
      </h1>
      <Date
        date={heroMovie.release_date}
        className="bg-button/90 p-2 text-base font-heading text-headline"
      />
      <div className=" text-headline font-heading tracking-wider text-base space-x-2 bg-button/90 w-fit lg:max-w-[40%] md:max-w-[90%] max-w-[70%] p-2">
        <Genre genreIds={heroMovie.genre_ids} />
      </div>
      <p className="lg:block hidden text-base text-paragraph tracking-wider font-paragraph lg:max-w-[40%] max-w-[90%] bg-button/90 p-2">
        {_.truncate(heroMovie.overview, {
          length: 200,
          omission: '.....'
        })}
      </p>
    </div>
  )
}

export default HeroSlideDetails

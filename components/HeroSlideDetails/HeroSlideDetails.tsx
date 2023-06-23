import React from 'react'
import { Genre, Ratings, ButtonIcon } from 'components'
import * as _ from 'lodash'
import { SlSocialYoutube } from 'react-icons/sl'
import { CiBookmarkPlus } from 'react-icons/ci'
import { AiOutlineCalendar } from 'react-icons/ai'

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
          length: 60,
          omission: '.....'
        })}
      </h1>
      <h3 className="flex flex-row items-center space-x-2 w-fit bg-button/90 p-2 text-headline font-heading tracking-wider text-base">
        <AiOutlineCalendar className="mr-2" />
        {heroMovie.release_date}
      </h3>
      <div className=" text-headline font-heading tracking-wider text-base space-x-2 bg-button/90 w-fit lg:max-w-[40%] md:max-w-[90%] max-w-[70%] p-2">
        <Genre genreIds={heroMovie.genre_ids} />
      </div>
      <p className="lg:block hidden text-base text-paragraph tracking-wider font-paragraph lg:max-w-[40%] max-w-[90%] bg-button/90 p-2">
        {_.truncate(heroMovie.overview, {
          length: 300,
          omission: '.....'
        })}
      </p>
      <div className="flex flex-row items-center space-x-2 w-fit text-headline text-lg tracking-wider font-heading font-semibold p-2 bg-button/90">
        <ButtonIcon>
          <SlSocialYoutube />
        </ButtonIcon>
        <ButtonIcon>
          <CiBookmarkPlus />
        </ButtonIcon>
      </div>
    </div>
  )
}

export default HeroSlideDetails

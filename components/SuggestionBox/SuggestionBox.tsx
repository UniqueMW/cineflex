'use client'
import React from 'react'
import useSWR from 'swr'
import { fetcher } from 'utils'
import { Ratings, Date } from 'components'

import type { IMoviePage } from 'types'

// TODO make the searchBox absolute and make a suggestion card

interface ISuggestionBoxProps {
  search: string
  isDisplaySuggestion: boolean
}
const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string

function SuggestionBox(props: ISuggestionBoxProps): JSX.Element {
  const { data } = useSWR<IMoviePage>(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${props.search}&page=1`,
    fetcher
  )

  const suggestionCards = React.useMemo(() => {
    return data?.results.map((suggestion) => (
      <div
        key={suggestion.id}
        className="text-headline font-heading tracking-wider text-base shadow-sm px-4"
      >
        <h3>
          {suggestion.name !== undefined ? suggestion.name : suggestion.title}
        </h3>
        <div className="flex flex-row justify-start items-center gap-x-2">
          <Ratings
            rating={suggestion.vote_average}
            className="font-paragraph tracking-wide text-xs"
          />
          <Date
            date={
              suggestion.first_air_date !== undefined
                ? suggestion.first_air_date
                : suggestion.release_date
            }
            className="font-paragraph text-xs tracking-wide"
          />
        </div>
      </div>
    ))
  }, [data])
  return (
    <section className="flex flex-col items-center w-full relative">
      <div
        className={`${
          props.isDisplaySuggestion ? 'block' : 'hidden'
        } lg:w-1/2 md:w-4/5 w-full shadow-md absolute z-10 bg-background`}
      >
        {suggestionCards}
      </div>
    </section>
  )
}

export default SuggestionBox

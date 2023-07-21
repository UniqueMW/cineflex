'use client'
import React from 'react'
import useSWR from 'swr'
import { fetcher } from 'utils'
import { SuggestionCard } from 'components'

import type { IFilterConfig, IMoviePage } from 'types'

interface ISuggestionBoxProps {
  search: string
  segment: string
  isDisplaySuggestion: boolean
  setInputSuggestion: React.Dispatch<React.SetStateAction<string>>
  setIsHoverSuggestion: React.Dispatch<React.SetStateAction<boolean>>
  setIsDisplaySuggestion: React.Dispatch<React.SetStateAction<boolean>>
  setConfig: React.Dispatch<React.SetStateAction<IFilterConfig>>
}
const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string

function SuggestionBox(props: ISuggestionBoxProps): JSX.Element {
  const { data } = useSWR<IMoviePage>(
    `https://api.themoviedb.org/3/search/${props.segment}?api_key=${API_KEY}&query=${props.search}&page=1`,
    fetcher
  )

  const handleDisplaySuggestions = (): void => {
    props.setIsHoverSuggestion(true)
  }

  const handleHideSuggestions = (): void => {
    props.setIsHoverSuggestion(false)
  }

  const suggestionCards = React.useMemo(() => {
    return data?.results.map((suggestion) => (
      <SuggestionCard
        suggestion={suggestion}
        key={suggestion.id}
        setInputSuggestion={props.setInputSuggestion}
        setIsDisplaySuggestion={props.setIsDisplaySuggestion}
        setConfig={props.setConfig}
      />
    ))
  }, [data])
  return (
    <section className="flex flex-col items-center w-full relative">
      <div
        className={`${
          props.isDisplaySuggestion ? 'block' : 'hidden'
        } lg:w-1/2 md:w-4/5 w-full shadow-md absolute z-10 bg-background`}
        onMouseOver={handleDisplaySuggestions}
        onMouseLeave={handleHideSuggestions}
      >
        {suggestionCards}
      </div>
    </section>
  )
}

export default SuggestionBox

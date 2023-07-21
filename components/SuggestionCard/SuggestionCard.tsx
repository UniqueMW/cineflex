import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'
import { Ratings, Date } from 'components'
import type { ICardSeriesAndMovie, IFilterConfig, IMovie } from 'types'

interface ISuggestionCardProps {
  suggestion: IMovie & ICardSeriesAndMovie
  setInputSuggestion: React.Dispatch<React.SetStateAction<string>>
  setIsDisplaySuggestion: React.Dispatch<React.SetStateAction<boolean>>
  setConfig: React.Dispatch<React.SetStateAction<IFilterConfig>>
}

function SuggestionCard({
  suggestion,
  setInputSuggestion,
  setIsDisplaySuggestion,
  setConfig
}: ISuggestionCardProps): JSX.Element {
  const handleSuggestion = (): void => {
    setInputSuggestion(
      suggestion.name !== undefined ? suggestion.name : suggestion.title
    )
    setIsDisplaySuggestion(false)
  }

  const handleSuggestionAndSearch = (): void => {
    setConfig({
      page: 1,
      query: suggestion.name !== undefined ? suggestion.name : suggestion.title
    })
    handleSuggestion()
  }

  return (
    <div
      key={suggestion.id}
      className="flex flex-row justify-between items-center text-headline font-heading tracking-wider text-base shadow-sm px-4 w-full"
    >
      <button className="flex flex-col" onClick={handleSuggestionAndSearch}>
        <h3 className="text-left">
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
      </button>
      <button onClick={handleSuggestion}>
        <BsArrowUpRight />
      </button>
    </div>
  )
}

export default SuggestionCard

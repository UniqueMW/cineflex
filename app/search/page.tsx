'use client'
import React from 'react'
import {
  SearchBar,
  SuggestionBox,
  InfiniteScroll,
  SeriesMovieSegment
} from 'components'
import type { IFilterConfig } from 'types'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string

function Search(): JSX.Element {
  const [search, setSearch] = React.useState('')
  const [config, setConfig] = React.useState<IFilterConfig>({
    page: 1,
    query: ''
  })
  const [isDisplaySuggestion, setIsDisplaySuggestion] = React.useState(false)
  const [isHoverSuggestion, setIsHoverSuggestion] = React.useState(false)
  const [segment, setSegment] = React.useState('movie')
  const [inputSuggestion, setInputSuggestion] = React.useState('')
  return (
    <main className="min-h-screen bg-background lg:px-10 px-2 py-1">
      <SearchBar
        setSearch={setSearch}
        setConfig={setConfig}
        setIsDisplaySuggestion={setIsDisplaySuggestion}
        segment={segment}
        inputSuggestion={inputSuggestion}
        isHoverSuggestion={isHoverSuggestion}
      />
      <SuggestionBox
        search={search}
        segment={segment}
        isDisplaySuggestion={isDisplaySuggestion}
        setInputSuggestion={setInputSuggestion}
        setIsHoverSuggestion={setIsHoverSuggestion}
        setIsDisplaySuggestion={setIsDisplaySuggestion}
        setConfig={setConfig}
      />
      <SeriesMovieSegment segment={segment} setSegment={setSegment} />
      <InfiniteScroll
        url={`https://api.themoviedb.org/3/search/${segment}?api_key=${API_KEY}`}
        displayFilter={false}
        genreType="MOVIES"
        config={config}
        segment={segment}
      />
    </main>
  )
}

export default Search

'use client'
import React from 'react'
import { SearchBar, SuggestionBox, InfiniteScroll } from 'components'
import type { IFilterConfig } from 'types'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string
const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`

function Search(): JSX.Element {
  const [search, setSearch] = React.useState('')
  const [config, setConfig] = React.useState<IFilterConfig>({
    page: 1,
    query: ''
  })
  const [isDisplaySuggestion, setIsDisplaySuggestion] = React.useState(false)
  return (
    <main className="min-h-screen bg-background lg:px-10 px-2 py-1">
      <SearchBar
        setSearch={setSearch}
        setConfig={setConfig}
        setIsDisplaySuggestion={setIsDisplaySuggestion}
      />
      <SuggestionBox
        search={search}
        isDisplaySuggestion={isDisplaySuggestion}
      />
      <InfiniteScroll
        url={searchUrl}
        displayFilter={false}
        genreType="MOVIES"
        config={config}
      />
    </main>
  )
}

export default Search

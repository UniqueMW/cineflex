'use client'
import React from 'react'
import { SearchBar, SuggestionBox } from '@/components'

function Search(): JSX.Element {
  const [search, setSearch] = React.useState('')
  return (
    <main className="min-h-screen bg-background lg:px-10 px-2 py-1">
      <SearchBar setSearch={setSearch} />
      <SuggestionBox search={search} />
    </main>
  )
}

export default Search

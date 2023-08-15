import React from 'react'
import { SearchWrapper } from 'components'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Search',
  description:
    'Explore Your Movie and Series Universe with CineFlex Search. Dive into a vast selection of films and series using our powerful search tool. Find your favorite titles, discover new gems, and tailor your cinematic journey. Uncover the magic of entertainment effortlessly with CineFlex Search.'
}

function Search(): JSX.Element {
  return (
    <main className="min-h-screen bg-background lg:px-10 px-2 py-1">
      <SearchWrapper />
    </main>
  )
}

export default Search

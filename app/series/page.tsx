import React from 'react'
import { InfiniteScroll } from 'components'

function Series(): JSX.Element {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string
  const seriesUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}`

  return (
    <main className="min-h-screen bg-background lg:px-10 px-2 py-1">
      <InfiniteScroll url={seriesUrl} genreType="SERIES" displayFilter />
    </main>
  )
}

export default Series

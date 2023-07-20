import React from 'react'
import { InfiniteScroll } from 'components'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string
const moviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`

function Movies(): JSX.Element {
  return (
    <main className="min-h-screen bg-background lg:px-10 px-2 py-1">
      <InfiniteScroll url={moviesUrl} genreType="MOVIES" displayFilter />
    </main>
  )
}

export default Movies

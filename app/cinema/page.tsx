import React from 'react'
import { InfiniteScroll } from 'components'

function Cinema(): JSX.Element {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string
  const moviesUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`

  return (
    <main className="min-h-screen bg-background lg:px-10 px-2 py-1">
      <InfiniteScroll
        url={moviesUrl}
        genreType="MOVIES"
        displayFilter={false}
      />
    </main>
  )
}

export default Cinema

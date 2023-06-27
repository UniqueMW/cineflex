import React from 'react'
import { InfiniteScroll } from 'components'

function Movies(): JSX.Element {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string
  const moviesUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`
  return (
    <main className="min-h-screen bg-background lg:px-10 px-2 py-1">
      <InfiniteScroll url={moviesUrl} />
    </main>
  )
}

export default Movies

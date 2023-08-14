import React from 'react'
import { InfiniteScroll } from 'components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Movies',
  description:
    "Uncover Movie Magic with CineFlex Movies. Immerse yourself in a diverse collection of films, ranging from timeless classics to the latest releases. Whether you're in the mood for drama, action, comedy, or romance, CineFlex Movies has the perfect selection for your movie night."
}

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

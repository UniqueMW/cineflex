import React from 'react'
import { InfiniteScroll } from 'components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Upcoming',
  description:
    'Discover the Future of Entertainment with CineFlex Upcoming. Stay ahead of the curve and explore the latest movie and series releases that are set to captivate audiences worldwide. Get a sneak peek into the next big hits and plan your cinematic journey with CineFlex Upcoming.'
}

function Upcoming(): JSX.Element {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string
  const moviesUrl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`

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

export default Upcoming

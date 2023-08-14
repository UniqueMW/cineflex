import React from 'react'
import { InfiniteScroll } from 'components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Series',
  description:
    "Explore the World of Series with CineFlex Series. Dive into a captivating realm of TV series that span across genres and stories. Whether you're a binge-watcher or prefer episodic storytelling, CineFlex Series brings your favorite shows together in one place."
}

function Series(): JSX.Element {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string
  const seriesUrl = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}`

  return (
    <main className="min-h-screen bg-background lg:px-10 px-2 py-1 w-full">
      <InfiniteScroll url={seriesUrl} genreType="SERIES" displayFilter />
    </main>
  )
}

export default Series

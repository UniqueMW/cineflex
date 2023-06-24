import React from 'react'
import { Hero, CardCarousel } from 'components'

export default function Home(): JSX.Element {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string
  const trendingUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  const topRatedMoviesUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${API_KEY}`
  const topRatedSeriesUrl = `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=${API_KEY}`
  const popularSeriesUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
  const airingSeriesUrl = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`

  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <CardCarousel url={trendingUrl} carouselTitle="Trending" />
      <CardCarousel url={topRatedMoviesUrl} carouselTitle="Top Rated Movies" />
      <CardCarousel url={topRatedSeriesUrl} carouselTitle="Top Rated Series" />
      <CardCarousel url={popularMoviesUrl} carouselTitle="Popular Movies" />
      <CardCarousel url={popularSeriesUrl} carouselTitle="Popular Series" />
      <CardCarousel url={airingSeriesUrl} carouselTitle="Airing Series" />
    </main>
  )
}

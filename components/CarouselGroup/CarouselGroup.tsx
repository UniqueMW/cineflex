'use client'
import React from 'react'
import { Reorder } from 'PackagesClientComponents/framerMotion'
import { DraggableCardCarousel } from 'components'

function CarouselGroup(): JSX.Element {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string
  const trendingUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  const topRatedMoviesUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${API_KEY}`
  const topRatedSeriesUrl = `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=${API_KEY}`
  const popularSeriesUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
  const airingSeriesUrl = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`

  const initialItems = [
    { url: trendingUrl, title: 'Trending' },
    { url: topRatedMoviesUrl, title: 'Top Rated Movies' },
    { url: topRatedSeriesUrl, title: 'Top Rated Series' },
    { url: popularMoviesUrl, title: 'Popular Movies' },
    { url: popularSeriesUrl, title: 'Popular Series' },
    { url: airingSeriesUrl, title: 'Airing Series' }
  ]

  const [items, setItems] = React.useState(initialItems)

  return (
    <Reorder.Group axis="y" values={items} onReorder={setItems}>
      {items.map((item) => (
        <DraggableCardCarousel item={item} key={item.title} />
      ))}
    </Reorder.Group>
  )
}

export default CarouselGroup

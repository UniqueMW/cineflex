'use client'
import React from 'react'
import useSWR from 'swr'
import { fetchers } from 'utils'
import { CarouselGroup } from 'components'
import { CardCarouselSkeleton } from 'skeletons'

import type { IMoviePage, ICarouselGroupItem } from 'types'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string

const titles = [
  'Trending',
  'Top Rated Movies',
  'Top Rated Series',
  'Popular Movies',
  'Popular Series',
  'Airing Series'
]

function HomeCarouselsWrapper(): JSX.Element {
  const trendingUrl = `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  const topRatedMoviesUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  const popularMoviesUrl = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${API_KEY}`
  const topRatedSeriesUrl = `https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1&api_key=${API_KEY}`
  const popularSeriesUrl = `https://api.themoviedb.org/3/tv/popular?api_key=${API_KEY}&language=en-US&page=1`
  const airingSeriesUrl = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=1`

  const response = useSWR<IMoviePage[]>(
    [
      trendingUrl,
      topRatedMoviesUrl,
      topRatedSeriesUrl,
      popularMoviesUrl,
      popularSeriesUrl,
      airingSeriesUrl
    ],
    fetchers
  )

  const initialItems = React.useMemo(() => {
    return response.data?.map((data, index) => ({
      title: titles[index],
      data: data.results
    }))
  }, [response])

  if (initialItems === undefined) {
    return (
      <div className="lg:px-10 px-2 space-y-4">
        {titles.map((title) => (
          <CardCarouselSkeleton key={title} />
        ))}
      </div>
    )
  }
  return (
    <div className="lg:px-10 px-2">
      <CarouselGroup items={initialItems as ICarouselGroupItem[]} />
    </div>
  )
}

export default HomeCarouselsWrapper

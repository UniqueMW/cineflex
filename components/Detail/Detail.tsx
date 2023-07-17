'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import useSWR from 'swr'
import { Ratings, CarouselGroup } from 'components'
import { fetcher, fetchers } from 'utils'

import type { IMovieDetail, ISeriesDetail, ICarouselGroupItem } from 'types'

interface IDetailProps {
  mediaType: 'TV' | 'MOVIE'
}

function Detail(props: IDetailProps): JSX.Element {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string
  const params = useParams()
  const id = params?.id as string
  const url =
    props.mediaType === 'MOVIE'
      ? `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
      : `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`

  const recommendationsUrls =
    props.mediaType === 'MOVIE'
      ? `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`
      : `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${API_KEY}`

  const castUrls =
    props.mediaType === 'MOVIE'
      ? `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
      : `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${API_KEY}`

  const { data } = useSWR<IMovieDetail & ISeriesDetail>(url, fetcher)
  const additionalData = useSWR([castUrls, recommendationsUrls], fetchers)

  const [carouselItems, setCarouselItems] =
    React.useState<ICarouselGroupItem[]>()

  React.useEffect(() => {
    if (props.mediaType === 'MOVIE' && additionalData.data !== undefined) {
      setCarouselItems([
        {
          title: 'Cast',
          data: additionalData.data[0].cast,
          cardType: 'ACTOR'
        },
        {
          title: 'You Might Also Like',
          data: additionalData.data[1].results
        }
      ])
    } else if (additionalData.data !== undefined && data !== undefined) {
      setCarouselItems([
        { title: 'Seasons', data: data?.seasons },
        {
          title: 'Cast',
          data: additionalData.data[0].cast,
          cardType: 'ACTOR'
        },
        {
          title: 'You Might Also Like',
          data: additionalData.data[1].results
        }
      ])
    }
  }, [data, additionalData])

  if (
    data === undefined ||
    carouselItems === undefined ||
    additionalData === undefined
  ) {
    return <h1>Loading....</h1>
  }
  return (
    <section className="space-y-4">
      <Image
        src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
        height={758.81}
        placeholder="blur"
        blurDataURL="/heroPlaceholder.png"
        width={1349}
        alt={data.title !== undefined ? data.title : data.name}
        className="w-full object-cover object-center"
      />
      <h1 className="text-4xl text-headline font-heading tracking-wider font-bold">
        {data.title !== undefined ? data.title : data.name}
      </h1>
      <div className=" text-paragraph font-paragraph tracking-wider space-y-1">
        <Ratings rating={data.vote_average} />
        <h3 className="text-left">
          {data.genres.map((genre) => genre.name).join(', ')}
        </h3>
      </div>
      <div>
        <h2 className="text-headline font-heading tracking-wider text-xl font-semibold">
          Overview
        </h2>
        <p className="text-lg font-paragraph text-paragraph tracking-wider text-left">
          {data.overview}
        </p>
      </div>
      <CarouselGroup items={carouselItems} />
    </section>
  )
}

export default Detail

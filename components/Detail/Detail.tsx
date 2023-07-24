'use client'
import React from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import useSWR from 'swr'
import { BsJournalBookmark, BsJournalBookmarkFill } from 'react-icons/bs'
import { SlSocialYoutube } from 'react-icons/sl'
import { Ratings, CarouselGroup, Button, ButtonAlt, Date } from 'components'
import { fetcher, fetchers, addAndRemoveBookmark, checkInBookmark } from 'utils'

import type { IMovieDetail, ISeriesDetail, ICarouselGroupItem } from 'types'

interface IDetailProps {
  mediaType: 'TV' | 'MOVIE'
}

const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string

function Detail(props: IDetailProps): JSX.Element {
  const { id } = useParams() as { id: string }
  const router = useRouter()

  const url = React.useMemo(
    () =>
      props.mediaType === 'MOVIE'
        ? `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
        : `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`,
    [id, props.mediaType]
  )

  const recommendationsUrls = React.useMemo(
    () =>
      props.mediaType === 'MOVIE'
        ? `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`
        : `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${API_KEY}`,
    [id, props.mediaType]
  )

  const castUrls = React.useMemo(
    () =>
      props.mediaType === 'MOVIE'
        ? `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
        : `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${API_KEY}`,
    [id, props.mediaType]
  )

  const { data } = useSWR<IMovieDetail & ISeriesDetail>(url, fetcher)
  const additionalData = useSWR([castUrls, recommendationsUrls], fetchers)
  const [isBookmarked, setIsBookmarked] = React.useState(false)

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
          title: 'Recommended Picks',
          data: additionalData.data[1].results
        }
      ])
    }
  }, [data, additionalData.data])

  React.useEffect(() => {
    if (data !== undefined) {
      setIsBookmarked(checkInBookmark(data))
    }
  }, [data])

  const handleTrailer = (): void => {
    if (data !== undefined) {
      router.push(
        `/trailer/${data.first_air_date !== undefined ? 'tv' : 'movie'}/${
          data.id
        }`
      )
    }
  }

  const handleBookmark = (): void => {
    if (data !== undefined) {
      addAndRemoveBookmark(data)
      setIsBookmarked(checkInBookmark(data))
    }
  }

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
        <div className="flex flex-row items-center gap-x-2">
          <Date
            date={
              data.first_air_date === undefined
                ? data.release_date
                : data.first_air_date
            }
          />
          <h4>|</h4>
          <Ratings rating={data.vote_average} />
        </div>
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
      <div className="flex flex-row justify-center space-x-6 w-full">
        <Button
          className="flex flex-row items-center text-lg font-heading text-headline tracking-wider"
          onClick={handleTrailer}
        >
          <SlSocialYoutube className="mr-2" />
          <h2>Trailer</h2>
        </Button>
        <ButtonAlt
          className="flex flex-row items-center font-heading text-lg text-headline tracking-wider"
          onClick={handleBookmark}
        >
          {isBookmarked ? (
            <BsJournalBookmarkFill className="mr-2 text-[#FFD700]" />
          ) : (
            <BsJournalBookmark className="mr-2" />
          )}

          <h2>Bookmark</h2>
        </ButtonAlt>
      </div>
      <CarouselGroup items={carouselItems} />
    </section>
  )
}

export default Detail

'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import useSWR from 'swr'
import { DetailSkeleton } from 'skeletons'
import { useCarouselItems, useSelectDetailUrls } from 'hooks'
import { fetcher, fetchers } from 'utils'
import {
  CarouselGroup,
  DetailImages,
  DetailHeaderInfo,
  DetailActionButtons
} from 'components'

import type { IMovieDetail, ISeriesDetail } from 'types'

interface IDetailProps {
  mediaType: 'TV' | 'MOVIE'
}

const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string

function Detail(props: IDetailProps): JSX.Element {
  const { id } = useParams() as { id: string }
  const urls = useSelectDetailUrls(id, props.mediaType, API_KEY)
  const { data } = useSWR<IMovieDetail & ISeriesDetail>(urls.detailUrl, fetcher)
  const additionalData = useSWR(
    [urls.castUrl, urls.recommendationsUrl],
    fetchers
  )
  const carouselItems = useCarouselItems(data, additionalData, props.mediaType)

  if (
    data === undefined ||
    carouselItems === undefined ||
    additionalData === undefined
  ) {
    return <DetailSkeleton mediaType={props.mediaType} />
  }

  return (
    <section className="lg:px-10 px-2 space-y-4">
      <DetailImages data={data} />
      <DetailHeaderInfo data={data} />
      <DetailActionButtons data={data} />
      <CarouselGroup items={carouselItems} />
    </section>
  )
}

export default Detail

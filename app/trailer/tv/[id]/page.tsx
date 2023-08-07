'use client'
import React from 'react'
import useSWR from 'swr'
import { useParams } from 'next/navigation'
import { fetcher } from 'utils'
import { TrailerPageWrapper, Footer } from 'components'
import type { ITrailerList } from 'types'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string

function SeriesTrailerPage(): JSX.Element {
  const { id } = useParams() as { id: string }
  const { data } = useSWR<ITrailerList>(
    `http://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_KEY}`,
    fetcher
  )

  if (data === undefined) {
    return <h1>Loading....</h1>
  }

  return (
    <main className=" py-2">
      <TrailerPageWrapper data={data} />
      <Footer />
    </main>
  )
}

export default SeriesTrailerPage

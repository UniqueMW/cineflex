'use client'
import React from 'react'
import useSWR from 'swr'
import { useParams } from 'next/navigation'
import { fetcher } from 'utils'
import { TrailerPageWrapper, Footer } from 'components'
import { TrailerPageSkeleton } from 'skeletons'
import type { ITrailerList } from 'types'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string

function SeriesTrailerPage(): JSX.Element {
  const { id } = useParams() as { id: string }
  const { data } = useSWR<ITrailerList>(
    `https://api.themoviedb.org/3/tv/${id}/videos?api_key=${API_KEY}`,
    fetcher
  )

  if (data === undefined) {
    return (
      <section className="py-2">
        <TrailerPageSkeleton />
      </section>
    )
  }

  return (
    <main className=" py-2 min-h-screen flex flex-col justify-between">
      <TrailerPageWrapper data={data} />
      <Footer />
    </main>
  )
}

export const dynamic = 'force-dynamic'

export default SeriesTrailerPage

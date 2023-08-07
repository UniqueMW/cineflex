'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import useSWR from 'swr'
import { EpisodeCard, Footer } from 'components'

import type { ISeasonDetail } from 'types'
import { EpisodesSkeleton } from '@/skeletons'

const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string

function SeasonPage(): JSX.Element {
  const { info } = useParams() as { info: string }
  const data = useSWR<ISeasonDetail>(
    `https://api.themoviedb.org/3/tv/${info.split('_')[0]}/season/${
      info.split('_')[1]
    }?api_key=${API_KEY}`
  )

  const episodeCards = React.useMemo(() => {
    console.log(info)
    return data.data?.episodes.map((episode) => (
      <EpisodeCard episode={episode} key={episode.id} />
    ))
  }, [data])

  if (data === undefined) {
    return <EpisodesSkeleton />
  }
  return (
    <main className="min-h-screen">
      <div className="px-2 lg:px-10">
        <h1 className="text-lg font-heading text-heading tracking-wider w-full text-center">
          {data.data?.name}
        </h1>
        <section className="space-y-2">{episodeCards}</section>
      </div>
      <Footer />
    </main>
  )
}

export default SeasonPage

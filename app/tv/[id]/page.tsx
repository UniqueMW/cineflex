import React from 'react'
import { Detail, Footer } from 'components'
import type { ISeriesDetail } from 'types'
import type { Metadata } from 'next'

interface IGenerateMetadataProps {
  params: { id: string }
}

const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string

function Movie(): JSX.Element {
  return (
    <main className="min-h-screen bg-background py-1">
      <Detail mediaType="TV" />
      <Footer />
    </main>
  )
}

export async function generateMetadata(
  props: IGenerateMetadataProps
): Promise<Metadata> {
  const seriesResponse = await fetch(
    `https://api.themoviedb.org/3/tv/${props.params.id}?api_key=${API_KEY}`
  )
  const series: ISeriesDetail = await seriesResponse.json()

  return { title: series.name, description: series.overview }
}

export const dynamic = 'force-dynamic'

export default Movie

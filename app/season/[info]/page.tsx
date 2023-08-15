import React from 'react'
import { SeasonDetail, Footer } from 'components'
import type { ISeasonDetail } from 'types'
import type { Metadata } from 'next'

interface IGenerateMetadataProps {
  params: { info: string }
}

const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string

function SeasonPage(): JSX.Element {
  return (
    <main>
      <SeasonDetail />
      <Footer />
    </main>
  )
}

export async function generateMetadata(
  props: IGenerateMetadataProps
): Promise<Metadata> {
  const seasonResponse = await fetch(
    `https://api.themoviedb.org/3/tv/${
      props.params.info.split('_')[0]
    }/season/${props.params.info.split('_')[1]}?api_key=${API_KEY}`
  )
  const season: ISeasonDetail = await seasonResponse.json()

  return { title: season.name, description: season.overview }
}

export default SeasonPage

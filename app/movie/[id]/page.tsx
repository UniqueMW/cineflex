import React from 'react'
import { Detail, Footer } from 'components'
import type { IMovieDetail } from 'types'
import type { Metadata } from 'next'

interface IGenerateMetadataProps {
  params: { id: string }
}

const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string

function Movie(): JSX.Element {
  return (
    <main className="min-h-screen bg-background py-1">
      <Detail mediaType="MOVIE" />
      <Footer />
    </main>
  )
}

export async function generateMetadata(
  props: IGenerateMetadataProps
): Promise<Metadata> {
  const movieResponse = await fetch(
    `https://api.themoviedb.org/3/movie/${props.params.id}?api_key=${API_KEY}`
  )
  const movie: IMovieDetail = await movieResponse.json()

  return { title: movie.title, description: movie.overview }
}

export default Movie

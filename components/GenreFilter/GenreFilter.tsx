'use client'
import React from 'react'
import useSWR from 'swr'
import { GrDrag } from 'react-icons/gr'
import { GiClapperboard } from 'react-icons/gi'
import { fetcher } from 'utils'
import { ButtonIcon } from 'components'
import type { GenreList } from 'types'

interface IGenreFilter {
  title: string
}

function GenreFilter(props: IGenreFilter): JSX.Element {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string
  const genresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
  const { data } = useSWR<GenreList>(genresUrl, fetcher)

  const genreCards = React.useMemo(
    () =>
      data?.genres.map((genre) => (
        <div
          key={genre.id}
          className="w-fit border p-2 shadow-sm font-paragraph text-headline tracking-wide"
        >
          {genre.name}
        </div>
      )),
    [data]
  )

  return (
    <section className="flex flex-col items-center w-full justify-between text-lg text-headline font-heading tracking-wider">
      <div className="flex flex-row items-center justify-between w-full">
        <h3 className="flex flex-row items-center">
          <GiClapperboard />
          {props.title}
        </h3>
        <ButtonIcon>
          <GrDrag />
        </ButtonIcon>
      </div>
      <div className="flex flex-row flex-wrap gap-1 text-base">
        {genreCards}
      </div>
    </section>
  )
}

export default GenreFilter

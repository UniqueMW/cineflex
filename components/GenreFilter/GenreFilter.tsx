'use client'
import React from 'react'
import useSWR from 'swr'
import { GiClapperboard } from 'react-icons/gi'
import { fetcher } from 'utils'
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
        <option
          key={genre.id}
          className="w-fit border p-2 shadow-sm font-paragraph text-headline tracking-wide"
        >
          {genre.name}
        </option>
      )),
    [data]
  )

  return (
    <section className="flex flex-col items-center lg:w-1/2 w-full justify-between text-lg text-headline font-heading tracking-wider">
      <h3 className="flex flex-row items-center text-left w-full">
        <GiClapperboard className="mr-2" />
        {props.title}
      </h3>
      <select className=" text-base w-full bg-background h-10 border border-button outline-none">
        {genreCards}
      </select>
    </section>
  )
}

export default GenreFilter

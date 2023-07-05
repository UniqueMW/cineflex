'use client'
import React from 'react'
import useSWR from 'swr'
import { GiClapperboard } from 'react-icons/gi'
import { ToggleButton } from 'components'
import { PageFilterContext } from 'reactContexts'
import { fetcher } from 'utils'
import type { GenreList } from 'types'

interface IGenreFilter {
  title: string
}

function GenreFilter(props: IGenreFilter): JSX.Element {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string
  const genresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
  const { data } = useSWR<GenreList>(genresUrl, fetcher)
  const filterContext = React.useContext(PageFilterContext)

  const genreCards = React.useMemo(
    () =>
      data?.genres.map((genre) => (
        <option
          key={genre.id}
          value={genre.id}
          className="w-fit border p-2 shadow-sm font-paragraph text-headline tracking-wide"
        >
          {genre.name}
        </option>
      )),
    [data]
  )

  const handleOnGenreSelect = (
    event: React.ChangeEvent<HTMLSelectElement>
  ): void => {
    if (filterContext !== null) {
      filterContext.setPageConfig({
        ...filterContext.pageConfig,
        with_genres: parseInt(event.target.value),
        page: 1
      })
    }
  }

  return (
    <section className="flex flex-col items-center lg:w-1/2 w-full justify-between text-lg text-headline font-heading tracking-wider space-y-1">
      <div className="flex flex-row items-center justify-between w-full">
        <h3 className="flex flex-row items-center text-left w-full">
          <GiClapperboard className="mr-2" />
          {props.title}
        </h3>
        <ToggleButton options={['Include', 'Exclude']} />
      </div>
      <select
        className=" text-base w-full bg-background h-10 border border-button outline-none"
        onChange={handleOnGenreSelect}
      >
        {genreCards}
      </select>
    </section>
  )
}

export default GenreFilter

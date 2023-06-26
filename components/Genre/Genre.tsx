'use client'
import { fetcher } from 'utils'
import React from 'react'
import useSWR from 'swr'
import type { GenreList } from 'types'

interface IGenreProps {
  genreIds: number[]
}

const Genre = React.memo(function (props: IGenreProps): JSX.Element {
  const { data } = useSWR<GenreList>(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${
      process.env.NEXT_PUBLIC_API_KEY as string
    }`,
    fetcher
  )

  const genreHeading = React.useMemo(() => {
    const filteredGenre = data?.genres.filter((genre) =>
      props.genreIds.includes(genre.id)
    )

    const genreText = filteredGenre?.map((genre) => genre.name).join(', ')

    return genreText
  }, [data])
  return <h3>{genreHeading}</h3>
})

Genre.displayName = 'Genre'

export default Genre

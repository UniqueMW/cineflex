'use client'
import React from 'react'
import { PageGrid } from 'components'
import { getBookmarks } from 'utils'
import type {
  IMovieDetail,
  ISeriesDetail,
  Season,
  IMovie,
  ICardSeriesAndMovie
} from 'types'

type pageGridDataType = Array<
  IMovie & ICardSeriesAndMovie & Season & IMovieDetail & ISeriesDetail
>

function BookmarkPage(): JSX.Element {
  const [data, setData] = React.useState<Array<
    ISeriesDetail | IMovieDetail
  > | null>(null)

  React.useEffect(() => {
    setData(getBookmarks())
  }, [])

  if (data === null) {
    return <h1>Empty</h1>
  }

  return (
    <main className="lg:px-10 px-2 space-y-2">
      <h1 className="text-headline font-heading tracking-wider text-xl font-semibold">
        Your Watchlist
      </h1>
      <PageGrid data={data as pageGridDataType} />
    </main>
  )
}

export default BookmarkPage

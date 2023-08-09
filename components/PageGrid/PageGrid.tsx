'use client'
import React from 'react'
import { Card, Empty } from 'components'
import type {
  IMovie,
  ICardSeriesAndMovie,
  Season,
  IMovieDetail,
  ISeriesDetail
} from 'types'

interface IPageGridProps {
  data: Array<
    IMovie & ICardSeriesAndMovie & Season & IMovieDetail & ISeriesDetail
  >
  message?: string
}
const defaultMessage = 'Nothing found. Try a different search query.'

function PageGrid({ data, message }: IPageGridProps): JSX.Element {
  const renderedCards = React.useMemo(
    () => data.map((item) => <Card key={item.id} data={item} />),
    [data]
  )

  if (renderedCards.length <= 0) {
    return <Empty message={message === undefined ? defaultMessage : message} />
  }
  return (
    <section className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-2 min-h-screen">
      {renderedCards}
    </section>
  )
}

export default PageGrid

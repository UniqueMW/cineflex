'use client'
import React from 'react'
import { Card } from 'components'
import type { IMovie, ICardSeriesAndMovie, Season } from 'types'

interface IPageGridProps {
  data: Array<IMovie & ICardSeriesAndMovie & Season>
}

// TODO refactor
function PageGrid({ data }: IPageGridProps): JSX.Element {
  const renderedCards = React.useMemo(
    () => data.map((item) => <Card key={item.id} data={item} />),
    [data]
  )
  return (
    <section className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-2 min-h-screen">
      {renderedCards}
    </section>
  )
}

export default PageGrid

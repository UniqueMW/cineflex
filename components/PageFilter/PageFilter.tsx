import React from 'react'
import { SortByFilter, GenreFilter, WatchProviderFilter } from 'components'

// TODO Add and, or filter for watch provider with toggle button
// TODO add include and exclude for genres with toggle button
function PageFilter(): JSX.Element {
  return (
    <section className="flex flex-col items-center px-2 lg:px-10 space-y-2">
      <SortByFilter />
      <GenreFilter title="Genre" />
      <WatchProviderFilter />
    </section>
  )
}

export default PageFilter

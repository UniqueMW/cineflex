import React from 'react'
import { SortByFilter, GenreFilter, WatchProviderFilter } from 'components'

interface IPageFilterProps {
  isShowFilter: boolean
}

function PageFilter(props: IPageFilterProps): JSX.Element {
  return (
    <section
      className={`${
        props.isShowFilter ? 'flex' : 'hidden'
      } flex-col items-center px-2 lg:px-10 space-y-2`}
    >
      <SortByFilter />
      <GenreFilter title="Genre" />
      <WatchProviderFilter />
    </section>
  )
}

export default PageFilter

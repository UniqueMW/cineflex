import React from 'react'
import { BiSort } from 'react-icons/bi'
import { SortByCard } from 'components'

type sortFilterType = Array<{
  text: string
  value: string
  direction: 'asc' | 'desc'
}>

function SortByFilter(): JSX.Element {
  const sortFilters: sortFilterType = [
    { text: 'Popularity', value: 'popularity.asc', direction: 'asc' },
    { text: 'Popularity', value: 'popularity.desc', direction: 'desc' },
    { text: 'Revenue', value: 'revenue.asc', direction: 'asc' },
    { text: 'Revenue', value: 'popularity.desc', direction: 'desc' },
    {
      text: 'Release Date',
      value: 'primary_release_date.asc',
      direction: 'asc'
    },
    {
      text: 'Release Date',
      value: 'primary_release_date.desc',
      direction: 'desc'
    },
    { text: 'Ratings', value: 'vote_average.asc', direction: 'asc' },
    { text: 'Ratings', value: 'vote_average.desc', direction: 'desc' }
  ]

  return (
    <section>
      <h1 className="flex flex-row items-center text-headline font-heading text-lg w-full text-left">
        <BiSort className="mr-2" />
        Sort By
      </h1>
      <div className="flex flex-row flex-wrap gap-1">
        {sortFilters.map((filter) => (
          <SortByCard
            text={filter.text}
            value={filter.value}
            direction={filter.direction}
            key={filter.value}
          />
        ))}
      </div>
    </section>
  )
}

export default SortByFilter

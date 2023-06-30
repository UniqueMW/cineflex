import React from 'react'
import { SortByFilter, ButtonIcon, GenreFilter } from 'components'
import { GiSettingsKnobs } from 'react-icons/gi'

function PageFilter(): JSX.Element {
  return (
    <section className="w-[30%]">
      <ButtonIcon className="py-2">
        <GiSettingsKnobs className="transform rotate-90" />
      </ButtonIcon>
      <SortByFilter />
      <GenreFilter title="Genre" />
    </section>
  )
}

export default PageFilter

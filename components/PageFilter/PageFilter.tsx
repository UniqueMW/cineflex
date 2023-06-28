import React from 'react'
import { SortByFilter, ButtonIcon } from 'components'
import { GiSettingsKnobs } from 'react-icons/gi'

function PageFilter(): JSX.Element {
  return (
    <section className="w-[30%]">
      <ButtonIcon>
        <GiSettingsKnobs className="transform rotate-90" />
      </ButtonIcon>
      <SortByFilter />
    </section>
  )
}

export default PageFilter

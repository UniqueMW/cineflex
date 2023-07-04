import React from 'react'
import { ButtonIcon } from 'components'
import { GiSettingsKnobs } from 'react-icons/gi'

interface ITotalResults {
  numberOfResults: number

  setIsShowFilter: React.Dispatch<React.SetStateAction<boolean>>
}

function TotalResults({
  numberOfResults,
  setIsShowFilter
}: ITotalResults): JSX.Element {
  const handleShowFilter = (): void => {
    setIsShowFilter((prev) => !prev)
  }
  return (
    <div className="flex flex-row items-center justify-between w-full text-lg text-paragraph font-paragraph tracking-wider lg:py-4 py-2">
      <ButtonIcon
        className="flex flex-row items-center py-2"
        onClick={handleShowFilter}
      >
        <GiSettingsKnobs className="transform rotate-90 mr-2" />
        Filter
      </ButtonIcon>
      <h2 className="w-full text-right">{numberOfResults} Results</h2>
    </div>
  )
}

export default TotalResults

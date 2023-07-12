import React from 'react'
import type { Genre } from 'types'
import { LiaTimesSolid } from 'react-icons/lia'

interface IChipProps {
  children: React.ReactNode
  id: number
  selectedChips: Genre[] | undefined
  setSelectedChips: React.Dispatch<React.SetStateAction<Genre[] | undefined>>
}

function Chip(props: IChipProps): JSX.Element {
  const handleRemoveChip = (): void => {
    const filteredChips = props.selectedChips?.filter(
      (chipInfo) => chipInfo.id !== props.id
    )
    props.setSelectedChips(filteredChips)
  }
  return (
    <section className="flex flex-row items-center text-paragraph text-sm font-paragraph tracking-wider shadow-sm rounded-md border border-button p-2">
      {props.children}
      <button onClick={handleRemoveChip}>
        <LiaTimesSolid />
      </button>
    </section>
  )
}

export default Chip

import React from 'react'
import type { Genre, IWatchProvider } from 'types'
import { LiaTimesSolid } from 'react-icons/lia'

interface IChipProps {
  children: React.ReactNode
  id: number
  selectedChips: Array<Genre & IWatchProvider> | undefined
  setSelectedChips: React.Dispatch<
    React.SetStateAction<Array<Genre & IWatchProvider> | undefined>
  >
}

function Chip(props: IChipProps): JSX.Element {
  const handleRemoveChip = (): void => {
    const filteredChips = props.selectedChips?.filter(
      (chipInfo) =>
        (chipInfo.id !== undefined ? chipInfo.id : chipInfo.provider_id) !==
        props.id
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

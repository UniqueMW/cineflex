import React from 'react'
import { BsArrowUp, BsArrowDown } from 'react-icons/bs'
import type { sortByType } from '@/types'
interface ISortByCardProp {
  direction: 'asc' | 'desc'
  text: string
  value: sortByType
  sortFilterValue: sortByType
  setSortFilterValue: React.Dispatch<React.SetStateAction<sortByType>>
}

function SortByCard(props: ISortByCardProp): JSX.Element {
  const sortByHandler = (): void => {
    props.setSortFilterValue(props.value)
  }
  return (
    <button
      className={`flex flex-row items-center justify-between w-fit border p-2 shadow-sm font-paragraph tracking-wide ${
        props.value === props.sortFilterValue
          ? 'border-button text-button'
          : 'text-headline'
      }`}
      onClick={sortByHandler}
    >
      {props.direction === 'asc' ? <BsArrowUp /> : <BsArrowDown />}
      <h3>{props.text}</h3>
    </button>
  )
}

export default SortByCard

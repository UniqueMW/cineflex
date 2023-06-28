import React from 'react'
import { BsArrowUp, BsArrowDown } from 'react-icons/bs'
interface ISortByCardProp {
  direction: 'asc' | 'desc'
  text: string
  value: string
}

function SortByCard(props: ISortByCardProp): JSX.Element {
  return (
    <div className="flex flex-row items-center justify-between w-fit border p-2 shadow-sm font-paragraph text-headline tracking-wide">
      {props.direction === 'asc' ? <BsArrowUp /> : <BsArrowDown />}
      <h3>{props.text}</h3>
    </div>
  )
}

export default SortByCard

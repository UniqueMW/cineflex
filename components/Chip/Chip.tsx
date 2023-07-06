import React from 'react'
import { LiaTimesSolid } from 'react-icons/lia'

interface IChipProps {
  children: React.ReactNode
}

function Chip(props: IChipProps): JSX.Element {
  return (
    <section className="flex flex-row items-center text-paragraph text-sm font-paragraph tracking-wider shadow-sm rounded-md border border-secondary p-2">
      {props.children}
      <LiaTimesSolid />
    </section>
  )
}

export default Chip

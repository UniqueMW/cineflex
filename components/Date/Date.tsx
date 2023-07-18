import React from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'

interface IDateProps {
  date: string | undefined
  className?: string
}

function Date(props: IDateProps): JSX.Element {
  return (
    <h3
      className={`flex flex-row items-center w-fit tracking-wider ${
        props.className !== undefined ? props.className : ''
      }`}
    >
      <AiOutlineCalendar className="mr-2" />
      {props.date !== undefined ? props.date : 'Not Available'}
    </h3>
  )
}

export default Date

import React from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'

interface IDateProps {
  date: string | undefined
  className?: string
}

function Date(props: IDateProps): JSX.Element | null {
  if (props.date === undefined) {
    return null
  }
  return (
    <h3
      className={`flex flex-row items-center w-fit tracking-wider ${
        props.className !== undefined ? props.className : ''
      }`}
    >
      <AiOutlineCalendar className="mr-2" />
      {props?.date.length > 0 ? props.date : 'Not Available'}
    </h3>
  )
}

export default Date

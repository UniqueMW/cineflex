import React from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'

interface IDateProps {
  date: string | undefined
  className?: string
}

function Date(props: IDateProps): JSX.Element | null {
  const [date, setDate] = React.useState('Not Available')

  React.useEffect(() => {
    if (typeof props.date === 'string') {
      props.date.length > 0 && setDate(props.date)
    }
  }, [props.date])

  return (
    <h3
      className={`flex flex-row items-center w-fit tracking-wider ${
        props.className !== undefined ? props.className : ''
      }`}
    >
      <AiOutlineCalendar className="mr-2" />
      {date}
    </h3>
  )
}

export default Date

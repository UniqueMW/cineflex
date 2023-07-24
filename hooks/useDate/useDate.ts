import React from 'react'

function useDate(unformattedDate: string): string {
  const [date, setDate] = React.useState('Not Available')

  React.useEffect(() => {
    const formattedDate = new Date(unformattedDate)
    const day =
      formattedDate.getDate() >= 10
        ? formattedDate.getDate().toString()
        : '0' + formattedDate.getDate().toString()

    const month =
      formattedDate.getMonth() + 1 >= 10
        ? formattedDate.getMonth() + 1
        : '0' + (formattedDate.getMonth() + 1).toString()

    const year = formattedDate.getFullYear()

    setDate(`${year}-${month}-${day}`)
  }, [unformattedDate])

  return date
}

export default useDate

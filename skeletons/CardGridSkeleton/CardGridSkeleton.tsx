import React from 'react'
import { CardSkeleton } from 'skeletons'

// TODO add total results skeleton

function CardGridSkeleton(): JSX.Element {
  const cards = React.useMemo(() => {
    const cardsArray = []
    let i = 0
    while (i <= 20) {
      cardsArray.push(<CardSkeleton />)
      i++
    }
    return cardsArray
  }, [])

  return (
    <section className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-2 min-h-screen">
      {cards}
    </section>
  )
}

export default CardGridSkeleton

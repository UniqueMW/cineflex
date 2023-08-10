import React from 'react'
import { CardSkeleton, SquareSkeleton } from 'skeletons'

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
    <div className="space-y-2 w-full">
      <SquareSkeleton height="30px" width="100%" />
      <section className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-2 min-h-screen w-full">
        {cards}
      </section>
    </div>
  )
}

export default CardGridSkeleton

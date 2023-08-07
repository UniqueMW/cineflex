import { useWindowSize } from 'hooks'
import React from 'react'
import { SquareSkeleton, CardSkeleton, CastCardSkeleton } from 'skeletons'

interface ICardCarouselSkeletonProps {
  type?: 'CAST' | 'NORMAL'
}

function CardCarouselSkeleton({
  type = 'NORMAL'
}: ICardCarouselSkeletonProps): JSX.Element {
  const [sizeName] = useWindowSize()

  const cardSkeletons = React.useMemo(() => {
    let cardNumber = sizeName === 'lg' ? 6 : sizeName === 'md' ? 4 : 3
    const cardsArray = []

    while (cardNumber > 0) {
      cardsArray.push(
        type === 'NORMAL' ? <CardSkeleton /> : <CastCardSkeleton />
      )
      cardNumber--
    }

    return cardsArray
  }, [sizeName])

  return (
    <section className="space-y-2">
      <SquareSkeleton width="300px" height="30px" />
      <div className="flex flex-row justify-between w-full">
        {cardSkeletons}
      </div>
    </section>
  )
}

export default CardCarouselSkeleton

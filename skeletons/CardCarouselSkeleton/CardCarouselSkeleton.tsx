import React from 'react'
import { SquareSkeleton, CardSkeleton } from 'skeletons'

// TODO Make Cards number responsive

function CardCarouselSkeleton(): JSX.Element {
  return (
    <section className="space-y-2">
      <SquareSkeleton width="300px" height="30px" />
      <div className="flex flex-row gap-x-[10px]">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
    </section>
  )
}

export default CardCarouselSkeleton

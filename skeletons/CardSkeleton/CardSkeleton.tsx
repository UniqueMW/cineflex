import React from 'react'
import { SquareSkeleton } from 'skeletons'

function CardSkeleton(): JSX.Element {
  return (
    <section className="pb-2 px-1 space-y-1 bg-[#fffffe] shadow-sm w-full">
      <SquareSkeleton width="195.16px" height="292.73px" />
      <SquareSkeleton width="180px" height="25px" />
      <SquareSkeleton width="140px" height="20px" />
      <SquareSkeleton width="100px" height="20px" />
    </section>
  )
}

export default CardSkeleton

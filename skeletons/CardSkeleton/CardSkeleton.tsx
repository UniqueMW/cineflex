import React from 'react'
import { SquareSkeleton } from 'skeletons'

function CardSkeleton(): JSX.Element {
  return (
    <section className="pb-2 px-1 space-y-1 bg-[#fffffe] shadow-sm w-full h-fit">
      <SquareSkeleton
        width="100%"
        height="211.5px"
        className="lg:hidden block"
      />
      <SquareSkeleton
        width="100%"
        height="292.73px"
        className="lg:block hidden"
      />
      <SquareSkeleton width="90%" height="25px" />
      <SquareSkeleton width="70%" height="20px" />
      <SquareSkeleton width="80&" height="20px" />
    </section>
  )
}

export default CardSkeleton

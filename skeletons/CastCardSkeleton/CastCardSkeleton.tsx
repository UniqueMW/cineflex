import React from 'react'
import { SquareSkeleton } from 'skeletons'

function CastCardSkeleton(): JSX.Element {
  return (
    <section className="flex flex-col items-center space-y-1">
      <SquareSkeleton width="150px" height="150px" radius="100%" />
      <SquareSkeleton width="120px" height="30px" />
      <SquareSkeleton width="40px" height="30px" />
      <SquareSkeleton width="120px" height="30px" />
    </section>
  )
}

export default CastCardSkeleton

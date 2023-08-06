import React from 'react'
import { SquareSkeleton } from 'skeletons'

function HeroSlideSkeleton(): JSX.Element {
  return (
    <div className="absolute lg:top-32 lg:left-10 lg:bottom-0 left-4 bottom-16 z-10 space-y-4 w-full border border-red-500">
      <SquareSkeleton width="50px" height="20px" className="z-10" />
      <SquareSkeleton width="200px" height="30px" className="z-10" />
      <SquareSkeleton width="150px" height="15px" className="z-10" />
      <SquareSkeleton width="40%" height="150px" className="z-10" />
    </div>
  )
}

export default HeroSlideSkeleton

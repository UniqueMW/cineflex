import React from 'react'
import { SquareSkeleton } from 'skeletons'

function HeroSlideSkeleton(): JSX.Element {
  return (
    <div className="absolute lg:top-32 lg:left-10 lg:bottom-0 left-4 bottom-16 z-10 space-y-4 w-fit">
      <SquareSkeleton width="128px" height="40px" className="z-10" />
      <SquareSkeleton width="100%" height="60px" className="z-10" />
      <SquareSkeleton width="128px" height="40px" className="z-10" />
      <SquareSkeleton width="160px" height="40px" className="z-10" />
      <SquareSkeleton
        width="500px"
        height="150px"
        className="z-10 lg:block hidden"
      />
    </div>
  )
}

export default HeroSlideSkeleton

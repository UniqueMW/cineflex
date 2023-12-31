'use client'
import React from 'react'
import { SquareSkeleton, CardCarouselSkeleton } from 'skeletons'

interface IDetailSkeletonProps {
  mediaType: 'TV' | 'MOVIE'
}

function DetailSkeleton(props: IDetailSkeletonProps): JSX.Element {
  return (
    <section className="flex flex-col px-2 lg:px-10 gap-y-4">
      <SquareSkeleton
        width="100%"
        height="1349px"
        className="lg:block hidden"
      />
      <SquareSkeleton
        width="100%"
        height="748.5px"
        className="lg:hidden block"
      />
      <SquareSkeleton height="40px" width="500px" />
      <div className=" text-paragraph font-paragraph tracking-wider space-y-1">
        <div className="flex flex-row items-center gap-x-2">
          <SquareSkeleton height="30px" width="200px" />
          <h4>|</h4>
          <SquareSkeleton height="30px" width="150px" />
        </div>
        <SquareSkeleton height="30px" width="300px" />
      </div>
      <div className="space-y-2">
        <SquareSkeleton height="35px" width="150px" />
        <SquareSkeleton width="100%" height="200px" />
      </div>
      <div className="flex flex-row justify-center space-x-6 w-full">
        <SquareSkeleton width="120px" height="30px" />
        <SquareSkeleton width="120px" height="30px" />
      </div>
      <CardCarouselSkeleton type="CAST" />
      <CardCarouselSkeleton />
      {props.mediaType === 'TV' ? <CardCarouselSkeleton /> : null}
    </section>
  )
}

export default DetailSkeleton

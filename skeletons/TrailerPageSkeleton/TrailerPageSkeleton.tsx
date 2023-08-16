import React from 'react'
import { SquareSkeleton } from 'skeletons'

function TrailerPageSkeleton(): JSX.Element {
  const trailerSkeletons = React.useMemo(() => {
    let i = 15
    const trailerCards = []

    while (i > 0) {
      trailerCards.push(<SquareSkeleton width="274.64px" height="42px" />)
      i--
    }

    return trailerCards
  }, [])

  return (
    <section className="lg:gap-x-4 gap-y-2 flex lg:flex-row flex-col lg:px-10 px-2">
      <div className="w-full h-screen flex flex-col justify-start gap-y-4">
        <SquareSkeleton width="100%" height="90%" />
        <SquareSkeleton height="28px" width="200px" />
        <SquareSkeleton height="24px" width="150px" />
      </div>
      <div className="lg:w-[30%] w-full lg:max-h-screen lg:overflow-y-scroll lg:scrollbar-thumb-button lg:scrollbar-thin lg:px-1 space-y-2">
        <SquareSkeleton width="120px" height="24px" />
        <section className="space-y-1 bg-background">
          {trailerSkeletons}
        </section>
      </div>
    </section>
  )
}

export default TrailerPageSkeleton

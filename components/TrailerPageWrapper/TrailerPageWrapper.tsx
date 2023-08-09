'use client'
import React from 'react'
import { TrailerIFrame, TrailerSidePanel, Empty } from 'components'
import type { ITrailerList } from 'types'

interface ITrailerPageWrapperProps {
  data: ITrailerList
}

function TrailerPageWrapper({ data }: ITrailerPageWrapperProps): JSX.Element {
  const [activeTrailer, setActiveTrailer] = React.useState(data.results[0])

  if (data.results.length <= 0) {
    return <Empty />
  }

  return (
    <div className="lg:gap-x-4 gap-y-2 flex lg:flex-row flex-col lg:px-10 px-2">
      <TrailerIFrame Trailer={activeTrailer} />
      <TrailerSidePanel
        Trailers={data.results}
        setActiveTrailer={setActiveTrailer}
        activeTrailer={activeTrailer}
      />
    </div>
  )
}

export default TrailerPageWrapper

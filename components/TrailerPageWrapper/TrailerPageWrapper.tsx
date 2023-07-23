'use client'
import React from 'react'
import { TrailerIFrame, TrailerSidePanel } from 'components'
import type { ITrailerList } from 'types'

interface ITrailerPageWrapperProps {
  data: ITrailerList
}

// TODO handle empty trailers

function TrailerPageWrapper({ data }: ITrailerPageWrapperProps): JSX.Element {
  const [activeTrailer, setActiveTrailer] = React.useState(data.results[0])
  return (
    <div className="lg:gap-x-4 gap-y-2 flex lg:flex-row flex-col">
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

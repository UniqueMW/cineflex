import React from 'react'
import type { ITrailer } from 'types'
import { TrailerCard } from 'components'

interface ITrailerSidePanelProps {
  Trailers: ITrailer[]
  activeTrailer: ITrailer
  setActiveTrailer: React.Dispatch<React.SetStateAction<ITrailer>>
}

function TrailerSidePanel(props: ITrailerSidePanelProps): JSX.Element {
  const trailerCards = React.useMemo(() => {
    return props.Trailers.map((trailer) => (
      <TrailerCard
        Trailer={trailer}
        key={trailer.id}
        setActiveTrailer={props.setActiveTrailer}
        activeTrailer={props.activeTrailer}
      />
    ))
  }, [props.Trailers, props.activeTrailer])

  return (
    <div className="lg:w-[30%] w-full lg:max-h-screen lg:overflow-y-scroll lg:scrollbar-thumb-button lg:scrollbar-thin lg:px-1">
      <h2 className="text-lg tracking-wider font-heading text-headline font-semibold">
        Trailers
      </h2>
      <section className=" space-y-1 bg-background">{trailerCards}</section>
    </div>
  )
}

export default TrailerSidePanel

import type { ITrailer } from 'types'
import React from 'react'
import { Date } from 'components'

interface ITrailerIFrameProps {
  Trailer: ITrailer
}

// TODO Adjust Iframe based on screen size

function TrailerIFrame(props: ITrailerIFrameProps): JSX.Element {
  return (
    <section className="w-full h-screen flex flex-col justify-start gap-y-4">
      <iframe
        width="100%"
        height="90%"
        src={`https://www.youtube.com/embed/${props.Trailer.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div>
        <h1 className="text-headline font-heading tracking-wider text-xl text-left">
          {props.Trailer.name}
        </h1>
        <Date date={props.Trailer.published_at} />
      </div>
    </section>
  )
}

export default TrailerIFrame

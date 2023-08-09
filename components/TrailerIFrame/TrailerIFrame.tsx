'use client'
import React from 'react'
import { Date } from 'components'
import type { ITrailer } from 'types'
import { useDate, useWindowSize } from 'hooks'

interface ITrailerIFrameProps {
  Trailer: ITrailer
}

function TrailerIFrame(props: ITrailerIFrameProps): JSX.Element {
  const date = useDate(props.Trailer.published_at)
  const [windowType] = useWindowSize()
  return (
    <section className="w-full lg:h-screen md:h-[70vh] h-[70vh] flex flex-col justify-start gap-y-4">
      <iframe
        width="100%"
        height={windowType === 'lg' ? '90%' : '100%'}
        src={`https://www.youtube.com/embed/${props.Trailer.key}`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div>
        <h1 className="text-headline font-heading tracking-wider text-xl text-left">
          {props.Trailer.name}
        </h1>
        <Date date={date} />
      </div>
    </section>
  )
}

export default TrailerIFrame

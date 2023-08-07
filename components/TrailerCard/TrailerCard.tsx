'use client'
import React from 'react'
import { Date } from 'components'
import { useDate } from 'hooks'
import type { ITrailer } from 'types'

interface ITrailerCardProps {
  Trailer: ITrailer
  activeTrailer: ITrailer
  setActiveTrailer: React.Dispatch<React.SetStateAction<ITrailer>>
}

function TrailerCard(props: ITrailerCardProps): JSX.Element {
  const handleTrailer = (): void => {
    props.setActiveTrailer(props.Trailer)
  }

  const date = useDate(props.Trailer.published_at)

  return (
    <button
      className={`shadow-sm bg-cardBackground w-full ${
        props.Trailer.id === props.activeTrailer.id
          ? 'border border-button'
          : ''
      }`}
      onClick={handleTrailer}
    >
      <h3 className="text-headline text-left font-heading tracking-wider lg:text-base text-sm">
        {props.Trailer.name}
      </h3>
      <Date date={date} className="text-paragraph font-paragraph text-xs" />
    </button>
  )
}

export default TrailerCard

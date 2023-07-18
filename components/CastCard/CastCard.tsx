import React from 'react'
import Image from 'next/image'
import type { Cast } from 'types'

interface ICastCardProps {
  cast: Cast
}

function CastCard(props: ICastCardProps): JSX.Element {
  return (
    <section className="flex flex-col items-center">
      <Image
        src={`https://image.tmdb.org/t/p/original/${
          props.cast.profile_path as string
        }`}
        width={150}
        height={150}
        alt={props.cast.name}
        placeholder="blur"
        blurDataURL="/cardPlaceholder.png"
        className="object-cover rounded-[100%] object-center aspect-square"
      />
      <h1 className="text-lg font-heading text-headline tracking-wider">
        {props.cast.name}
      </h1>
      <h4 className="text-secondary text-xs font-paragraph">As</h4>
      <h3 className="text-sm font-heading text-button tracking-wider">
        {props.cast.character}
      </h3>
    </section>
  )
}

export default CastCard

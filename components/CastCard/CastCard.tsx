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
        onError={(event) => {
          event.currentTarget.src = '/account.png'
        }}
      />
      <h1 className="md:text-lg text-base font-heading text-headline tracking-wider text-center w-full">
        {props.cast.name}
      </h1>
      <h4 className="text-secondary text-xs font-paragraph text-center w-full">
        As
      </h4>
      <h3 className="text-sm font-heading text-button tracking-wider text-center w-full">
        {props.cast.character}
      </h3>
    </section>
  )
}

export default CastCard

import React from 'react'
import Image from 'next/image'
import { Ratings } from 'components'
import * as _ from 'lodash'
import type { ICardSeriesAndMovie, IMovie } from 'types'
import { useWindowSize } from 'hooks'

interface ICardProps {
  data: IMovie & ICardSeriesAndMovie
}

function Card({ data }: ICardProps): JSX.Element {
  const [cardName] = React.useState<string>(
    typeof data.title === 'string' ? data.title : (data?.name as string)
  )
  const [, width] = useWindowSize()
  return (
    <section className="bg-cardBackground shadow-sm pb-2 px-1">
      <Image
        src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
        width={195.16}
        height={292.73}
        alt={cardName}
        placeholder="blur"
        blurDataURL="/cardPlaceholder.png"
        className="object-cover object-center"
      />
      <h1 className="text-headline font-heading font-[400] sm:text-base text-xs">
        {_.truncate(cardName, {
          length: width > 300 && width < 768 ? 12 : width <= 300 ? 10 : 20,
          omission: '...'
        })}
      </h1>
      <Ratings rating={data.vote_average} />
    </section>
  )
}

export default Card

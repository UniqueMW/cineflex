import React from 'react'
import Image from 'next/image'
import { Ratings } from 'components'
import * as _ from 'lodash'
import type { ICardSeriesAndMovie, IMovie } from 'types'

interface ICardProps {
  data: IMovie & ICardSeriesAndMovie
}

function Card({ data }: ICardProps): JSX.Element {
  const [cardName] = React.useState<string>(
    typeof data.title === 'string' ? data.title : (data?.name as string)
  )
  return (
    <section className="bg-cardBackground shadow-sm pb-2 px-1 min-h-[200]">
      <Image
        src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
        width={200}
        height={150}
        alt={cardName}
        className="h-[150] object-cover object-center"
      />
      <h1 className="text-headline font-heading font-[400]">
        {_.truncate(cardName, { length: 20, omission: '....' })}
      </h1>
      <Ratings rating={data.vote_average} />
    </section>
  )
}

export default Card

'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Ratings, Date } from 'components'
import * as _ from 'lodash'
import { useParams } from 'next/navigation'
import { useWindowSize } from 'hooks'
import type { ICardSeriesAndMovie, IMovie, Season } from 'types'

interface ICardProps {
  data: IMovie & ICardSeriesAndMovie & Season
  id?: string
}

function Card({ data }: ICardProps): JSX.Element {
  const { id } = useParams() as { id: string }

  const [cardName] = React.useState<string>(
    typeof data.title === 'string' ? data.title : data?.name
  )
  const [, width] = useWindowSize()

  const cardUrl = React.useMemo(() => {
    let url = ''
    if (data.first_air_date !== undefined) {
      url = `/tv/${data.id}`
    } else if (data.season_number !== undefined) {
      url = `/season/${id}_${data.season_number}`
    } else {
      url = `/movie/${data.id}`
    }

    return url
  }, [data])

  return (
    <Link href={cardUrl}>
      <section className="bg-cardBackground shadow-sm pb-2 px-1">
        <Image
          src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
          width={195.16}
          height={292.73}
          alt={cardName}
          placeholder="blur"
          blurDataURL="/cardPlaceholder.png"
          className="object-cover object-center w-full "
        />
        <h1 className="text-headline font-heading font-[400] sm:text-base text-xs">
          {_.truncate(cardName, {
            length: width > 300 && width < 768 ? 12 : width <= 300 ? 10 : 20,
            omission: '...'
          })}
        </h1>
        <Date
          date={
            data.first_air_date !== undefined
              ? data.first_air_date
              : data.release_date !== undefined
              ? data.release_date
              : data.air_date
          }
          className="lg:text-sm text-xs font-heading text-headline"
        />
        <Ratings rating={data.vote_average} />
      </section>
    </Link>
  )
}

export default Card

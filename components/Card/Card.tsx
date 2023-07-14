'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Ratings } from 'components'
import * as _ from 'lodash'
import { useWindowSize } from 'hooks'
import { AiOutlineCalendar } from 'react-icons/ai'
import type { ICardSeriesAndMovie, IMovie } from 'types'

interface ICardProps {
  data: IMovie & ICardSeriesAndMovie
}

function Card({ data }: ICardProps): JSX.Element {
  const [cardName] = React.useState<string>(
    typeof data.title === 'string' ? data.title : (data?.name as string)
  )
  const [, width] = useWindowSize()
  return (
    <Link
      className="bg-cardBackground shadow-sm pb-2 px-1"
      href={`${data.first_air_date !== undefined ? 'tv' : 'movie'}/${data.id}`}
    >
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
      <h3 className="text-heading text-xs font-heading tracking-wider flex flex-row items-center">
        <AiOutlineCalendar className="mr-1" />
        {typeof data.first_air_date === 'string'
          ? data.first_air_date
          : data.release_date}
      </h3>
      <Ratings rating={data.vote_average} />
    </Link>
  )
}

export default Card

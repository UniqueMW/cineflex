import React from 'react'
import Image from 'next/image'
import type { IMovieDetail, ISeriesDetail } from 'types'

interface IDetailImagesProps {
  data: IMovieDetail & ISeriesDetail
}

function DetailImages({ data }: IDetailImagesProps): JSX.Element {
  return (
    <section>
      <Image
        src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`}
        height={758.81}
        placeholder="blur"
        blurDataURL="/heroPlaceholder.png"
        width={1349}
        alt={data.title !== undefined ? data.title : data.name}
        className="w-full object-cover object-center hidden lg:block"
        onError={(event) => {
          event.currentTarget.src = '/heroBrokenImage.png'
        }}
      />
      <Image
        src={`https://image.tmdb.org/t/p/original/${data.poster_path}`}
        height={748.5}
        width={499}
        alt={data.title !== undefined ? data.title : data.name}
        placeholder="blur"
        blurDataURL="/mobilePlaceholder.png"
        className="object-cover object-center w-full lg:hidden block"
        onError={(event) => {
          event.currentTarget.src = '/brokenImageCard.png'
        }}
      />
    </section>
  )
}

export default DetailImages

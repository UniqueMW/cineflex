import React from 'react'
import { Date, Ratings } from 'components'
import type { IMovieDetail, ISeriesDetail } from 'types'

interface IDetailHeaderInfoProps {
  data: IMovieDetail & ISeriesDetail
}

function DetailHeaderInfo({ data }: IDetailHeaderInfoProps): JSX.Element {
  return (
    <section className="space-y-4">
      <h1 className="text-4xl text-headline font-heading tracking-wider font-bold">
        {data.title !== undefined ? data.title : data.name}
      </h1>
      <div className=" text-paragraph font-paragraph tracking-wider space-y-1">
        <div className="flex flex-row items-center gap-x-2">
          <Date
            date={
              data.first_air_date === undefined
                ? data.release_date
                : data.first_air_date
            }
          />
          <h4>|</h4>
          <Ratings rating={data.vote_average} />
        </div>
        <h3 className="text-left">
          {data.genres.map((genre) => genre.name).join(', ')}
        </h3>
      </div>
      <div>
        <h2 className="text-headline font-heading tracking-wider text-xl font-semibold">
          Overview
        </h2>
        <p className="text-lg font-paragraph text-paragraph tracking-wider text-left">
          {data.overview}
        </p>
      </div>
    </section>
  )
}

export default DetailHeaderInfo

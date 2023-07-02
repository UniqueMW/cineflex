import React from 'react'
import Image from 'next/image'
import * as _ from 'lodash'
import type { IWatchProvider } from 'types'

interface IWatchProviderCardProps {
  provider: IWatchProvider
}

function WatchProviderCard({ provider }: IWatchProviderCardProps): JSX.Element {
  return (
    <div className="flex flex-row items-center space-x-1 shadow-sm w-fit">
      <Image
        width={30}
        height={30}
        src={`https://image.tmdb.org/t/p/original/${provider.logo_path}`}
        alt={provider.provider_id.toString()}
        placeholder="blur"
        blurDataURL="/cardPlaceholder.png"
      />
      <h3>
        {_.truncate(provider.provider_name, { length: 13, omission: '...' })}
      </h3>
    </div>
  )
}

export default WatchProviderCard

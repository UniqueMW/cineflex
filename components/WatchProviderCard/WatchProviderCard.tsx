import React from 'react'
import Image from 'next/image'
import type { IWatchProvider } from 'types'

interface IWatchProviderCardProps {
  provider: IWatchProvider
}

function WatchProviderCard({ provider }: IWatchProviderCardProps): JSX.Element {
  return (
    <div className="flex flex-row items-center space-x-1 shadow-sm w-full">
      <Image
        width={30}
        height={30}
        src={`https://image.tmdb.org/t/p/original/${provider.logo_path}`}
        alt={provider.provider_id.toString()}
        placeholder="blur"
        blurDataURL="/cardPlaceholder.png"
      />
      <h3>{provider.provider_name}</h3>
    </div>
  )
}

export default WatchProviderCard

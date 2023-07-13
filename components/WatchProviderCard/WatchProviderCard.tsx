import React from 'react'
import Image from 'next/image'
import type { IWatchProvider, Genre } from 'types'

interface IWatchProviderCardProps {
  provider: IWatchProvider
  selectedWatchProviders?: Array<Genre & IWatchProvider> | undefined
  setSelectedWatchProviders?: React.Dispatch<
    React.SetStateAction<Array<Genre & IWatchProvider> | undefined>
  >
  setIsSuggestionsVisible?: React.Dispatch<React.SetStateAction<boolean>>
}

function WatchProviderCard(props: IWatchProviderCardProps): JSX.Element {
  const handleAddWatchProvider = (): void => {
    if (
      Array.isArray(props.selectedWatchProviders) &&
      props.setSelectedWatchProviders !== undefined
    ) {
      props.setSelectedWatchProviders([
        ...props.selectedWatchProviders,
        props.provider as IWatchProvider & Genre
      ])
    } else if (
      !Array.isArray(props.selectedWatchProviders) &&
      props.setSelectedWatchProviders !== undefined
    ) {
      props.setSelectedWatchProviders([
        props.provider as IWatchProvider & Genre
      ])
    }
    if (props.setIsSuggestionsVisible !== undefined) {
      props.setIsSuggestionsVisible(false)
    }
  }

  return (
    <button
      className="flex flex-row items-center space-x-1 w-full"
      onClick={handleAddWatchProvider}
    >
      <Image
        width={30}
        height={30}
        src={`https://image.tmdb.org/t/p/original/${props.provider.logo_path}`}
        alt={props.provider.provider_id.toString()}
        placeholder="blur"
        blurDataURL="/cardPlaceholder.png"
      />
      <h3>{props.provider.provider_name}</h3>
    </button>
  )
}

export default WatchProviderCard

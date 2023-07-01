'use client'
import React from 'react'
import useSWR from 'swr'
import Image from 'next/image'
import { fetcher } from 'utils'
import { GrDrag } from 'react-icons/gr'
import { ButtonIcon } from 'components'
import type { IWatchProviderList } from 'types'

function WatchProviderFilter(): JSX.Element {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string
  const watchProviderUrl = `https://api.themoviedb.org/3/watch/providers/movie?api_key=${API_KEY}`
  const { data } = useSWR<IWatchProviderList>(watchProviderUrl, fetcher)

  // const watchProviderCards = React.useMemo(() => {
  //   return data?.results.map((provider) => (
  //     <div
  //       key={provider.provider_id}
  //       className="flex flex-row items-center space-x-1"
  //     >
  //       <Image
  //         width={30}
  //         height={30}
  //         src={`https://image.tmdb.org/t/p/original/${provider.logo_path}`}
  //         alt={provider.provider_id.toString()}
  //         placeholder="blur"
  //         blurDataURL="/cardPlaceholder.png"
  //       />
  //       <h3>{provider.provider_name}</h3>
  //     </div>
  //   ))
  // }, [data])

  return (
    <section>
      <div className="flex flex-row items-center justify-between w-full">
        <h3 className="flex flex-row items-center">Watch Provider</h3>
        <ButtonIcon>
          <GrDrag />
        </ButtonIcon>
      </div>
      <input
        type="text"
        className="bg-transparent w-full border border-button h-10 text-headline font-heading "
        placeholder="Try Netflix"

      />
    </section>
  )
}

export default WatchProviderFilter

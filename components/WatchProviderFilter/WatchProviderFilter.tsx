'use client'
import React from 'react'
import useSWR from 'swr'
import { fetcher, debounce } from 'utils'
import { GrDrag } from 'react-icons/gr'
import { ButtonIcon, WatchProviderCard } from 'components'
import type { IWatchProviderList, IWatchProvider } from 'types'

function WatchProviderFilter(): JSX.Element {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string
  const watchProviderUrl = `https://api.themoviedb.org/3/watch/providers/movie?api_key=${API_KEY}`
  const { data } = useSWR<IWatchProviderList>(watchProviderUrl, fetcher)
  const searchDebounce = React.useCallback(debounce(), [])

  const [suggestions, setSuggestion] = React.useState<IWatchProvider[]>([])

  const handleProvider = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    const searchedText = event.currentTarget.value
    if (typeof data !== 'undefined' && searchedText.length > 0) {
      searchDebounce(() => {
        const suggestionsResults = []
        for (const provider of data?.results) {
          if (
            provider.provider_name
              .toLowerCase()
              .includes(searchedText.toLowerCase())
          ) {
            suggestionsResults.push(provider)
          }
        }
        setSuggestion(suggestionsResults)
      }, 500)
    }
  }

  const suggestionsCards = React.useMemo(() => {
    return suggestions.map((provider) => (
      <WatchProviderCard provider={provider} key={provider.provider_id} />
    ))
  }, [suggestions])

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
        onKeyUp={handleProvider}
      />
      <div className="max-h-[200px] overflow-scroll space-y-1">
        {suggestionsCards}
      </div>
    </section>
  )
}

export default WatchProviderFilter

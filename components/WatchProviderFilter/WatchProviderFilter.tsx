'use client'
import React from 'react'
import useSWR from 'swr'
import { LiaTvSolid } from 'react-icons/lia'
import { fetcher, debounce } from 'utils'
import { WatchProviderCard } from 'components'
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
    } else {
      setSuggestion([])
    }
  }

  const suggestionsCards = React.useMemo(() => {
    return suggestions.map((provider) => (
      <WatchProviderCard provider={provider} key={provider.provider_id} />
    ))
  }, [suggestions])

  return (
    <section className="lg:w-1/2 w-full justify-center">
      <h3 className="flex flex-row items-center text-lg font-heading tracking-wider text-left w-full">
        <LiaTvSolid className="mr-2" />
        Watch Provider
      </h3>
      <input
        type="text"
        className="bg-transparent w-full border border-button h-10 text-headline font-heading "
        placeholder="Try Netflix"
        onKeyUp={handleProvider}
      />
      <div className="max-h-[200px] overflow-y-scroll space-y-1 font-paragraph text-base">
        {suggestionsCards}
      </div>
    </section>
  )
}

export default WatchProviderFilter

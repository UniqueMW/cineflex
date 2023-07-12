'use client'
import React from 'react'
import useSWR from 'swr'
import { LiaTvSolid } from 'react-icons/lia'
import { fetcher, debounce } from 'utils'
import { WatchProviderCard, ToggleButton, Chip } from 'components'
import type { IWatchProviderList, IWatchProvider, Genre } from 'types'

function WatchProviderFilter(): JSX.Element {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string
  const watchProviderUrl = `https://api.themoviedb.org/3/watch/providers/movie?api_key=${API_KEY}`
  const { data } = useSWR<IWatchProviderList>(watchProviderUrl, fetcher)
  const searchDebounce = React.useCallback(debounce(), [])

  const [suggestions, setSuggestion] = React.useState<IWatchProvider[]>([])
  const [selectedWatchProviders, setSelectedWatchProviders] =
    React.useState<Array<IWatchProvider & Genre>>()

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
      <WatchProviderCard
        provider={provider}
        key={provider.provider_id}
        selectedWatchProviders={selectedWatchProviders}
        setSelectedWatchProviders={setSelectedWatchProviders}
      />
    ))
  }, [suggestions, selectedWatchProviders])

  const watchProvidersChips = React.useMemo(() => {
    if (selectedWatchProviders !== undefined) {
      return selectedWatchProviders.map((providerInfo) => (
        <Chip
          key={providerInfo.provider_id}
          selectedChips={selectedWatchProviders}
          setSelectedChips={setSelectedWatchProviders}
          id={providerInfo.provider_id}
        >
          <WatchProviderCard provider={providerInfo} />
        </Chip>
      ))
    }

    return []
  }, [selectedWatchProviders])

  return (
    <section className="lg:w-1/2 w-full justify-center space-y-1">
      <div className="flex flex-row items-center justify-between w-full">
        <h3 className="flex flex-row items-center text-lg font-heading tracking-wider text-left w-full">
          <LiaTvSolid className="mr-2" />
          Watch Provider
        </h3>
        <ToggleButton options={['Include', 'Exclude']} />
      </div>
      <input
        type="text"
        className="bg-transparent w-full border border-button h-10 text-headline font-heading outline-none px-1"
        placeholder="Try Netflix"
        onKeyUp={handleProvider}
      />
      <div className="flex flex-row flex-wrap justify-center gap-1">
        {watchProvidersChips}
      </div>
      <div className="max-h-[200px] overflow-y-scroll space-y-1 font-paragraph text-base scrollbar scrollbar-thumb-button scrollbar-thin">
        {suggestionsCards}
      </div>
    </section>
  )
}

export default WatchProviderFilter

'use client'
import React from 'react'
import useSWR from 'swr'
import { LiaTvSolid } from 'react-icons/lia'
import { fetcher, debounce } from 'utils'
import { WatchProviderCard, ToggleButton, Chip } from 'components'
import { useFilterEffect } from 'hooks'
import { PageFilterContext } from 'reactContexts'
import type { IWatchProviderList, IWatchProvider, Genre } from 'types'

function WatchProviderFilter(): JSX.Element {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY as string
  const filterContext = React.useContext(PageFilterContext)
  const watchProviderUrl =
    filterContext?.genreType === 'MOVIES'
      ? `https://api.themoviedb.org/3/watch/providers/movie?api_key=${API_KEY}`
      : `https://api.themoviedb.org/3/watch/providers/tv?api_key=${API_KEY}`
  const { data } = useSWR<IWatchProviderList>(watchProviderUrl, fetcher)
  const searchDebounce = React.useCallback(debounce(), [])

  const [suggestions, setSuggestion] = React.useState<IWatchProvider[]>([])
  const [isSuggestionsVisible, setIsSuggestionsVisible] = React.useState(false)
  const [selectedWatchProviders, setSelectedWatchProviders] =
    React.useState<Array<IWatchProvider & Genre>>()
  const [toggleOption, setToggleOption] = React.useState('Include')

  const handleProvider = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    setIsSuggestionsVisible(true)
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
        setIsSuggestionsVisible={setIsSuggestionsVisible}
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

  useFilterEffect(
    filterContext,
    selectedWatchProviders,
    toggleOption,
    'watch_providers'
  )

  // React.useEffect(() => {
  //   if (
  //     filterContext !== null &&
  //     typeof selectedWatchProviders !== 'undefined'
  //   ) {
  //     delete filterContext.pageConfig.with_watch_providers
  //     delete filterContext.pageConfig.without_watch_providers
  //     const genreKey =
  //       toggleOption === 'Include'
  //         ? 'with_watch_providers'
  //         : 'without_watch_providers'

  //     filterContext.setPageConfig({
  //       ...filterContext.pageConfig,
  //       [genreKey]: groupFilterOptionsWithLogic(selectedWatchProviders),
  //       page: 1
  //     })
  //   }
  // }, [toggleOption, selectedWatchProviders])

  return (
    <section className="lg:w-1/2 w-full justify-center space-y-1">
      <div className="flex flex-row items-center justify-between w-full">
        <h3 className="flex flex-row items-center text-lg font-heading tracking-wider text-left w-full">
          <LiaTvSolid className="mr-2" />
          Watch Provider
        </h3>
        <ToggleButton
          options={['Include', 'Exclude']}
          setOption={setToggleOption}
        />
      </div>
      <input
        type="text"
        className="bg-transparent w-full border border-button h-10 text-headline font-heading px-1"
        placeholder="Try Netflix"
        onKeyUp={handleProvider}
      />
      <div className="flex flex-row flex-wrap justify-center gap-1">
        {watchProvidersChips}
      </div>
      <div
        className={`max-h-[200px] overflow-y-scroll space-y-1 font-paragraph text-base scrollbar scrollbar-thumb-button scrollbar-thin ${
          isSuggestionsVisible ? 'block' : 'hidden'
        }`}
      >
        {suggestionsCards}
      </div>
    </section>
  )
}

export default WatchProviderFilter

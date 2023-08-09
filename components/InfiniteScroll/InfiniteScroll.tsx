'use client'
import React from 'react'
import useSWR from 'swr'
import { PageFilter, PageGrid, TotalResults } from 'components'
import { PageFilterContext } from 'reactContexts'
import { useFilter, useInfiniteScroll } from 'hooks'
import { fetcher } from 'utils'
import { PulseLoader } from 'PackagesClientComponents/reactSpinner'

import type {
  IMoviePage,
  IMovie,
  ICardSeriesAndMovie,
  IFilterConfig,
  Season,
  IMovieDetail,
  ISeriesDetail
} from 'types'
import { CardGridSkeleton } from 'skeletons'

interface IInfiniteScrollProps {
  url: string
  genreType: 'MOVIES' | 'SERIES'
  displayFilter: boolean
  config?: IFilterConfig
  segment?: string
  emptyStateMessage?: string
}

function InfiniteScroll({
  url,
  genreType,
  displayFilter,
  config,
  segment,
  emptyStateMessage
}: IInfiniteScrollProps): JSX.Element {
  const [pageConfig, setPageConfig] = React.useState<IFilterConfig>({ page: 1 })
  const [isShowFilter, setIsShowFilter] = React.useState(false)
  const [isEndReached, setIsEndReached] = React.useState(false)
  const pageUrl = useFilter(url, pageConfig)
  const { data, isLoading } = useSWR<IMoviePage>(pageUrl, fetcher)
  const [cardData, setCardData] =
    React.useState<Array<IMovie & ICardSeriesAndMovie>>()
  const targetElementRef = React.useRef(null)

  const scrollToBottom = useInfiniteScroll(targetElementRef.current)

  React.useEffect(() => {
    if (scrollToBottom && !isLoading) {
      setPageConfig({ ...pageConfig, page: pageConfig.page + 1 })
    }
  }, [scrollToBottom])

  React.useEffect(() => {
    if (typeof data !== 'undefined') {
      if (typeof cardData === 'undefined' || data.page === 1) {
        setCardData(data.results)
      } else if (typeof cardData !== 'undefined') {
        setCardData([...cardData, ...data.results])
      }
    }
  }, [data])

  React.useEffect(() => {
    if (config !== undefined) {
      setPageConfig(config)
    }
  }, [config, segment])

  React.useEffect(() => {
    if (data !== undefined) {
      const isEndReachedYet =
        data?.results.length === 0 || pageConfig.page > 500

      setIsEndReached(isEndReachedYet)
    }
  }, [pageUrl, data])

  return (
    <section className="flex flex-col items-center w-full">
      {cardData !== undefined ? (
        <div className="flex flex-col space-y-2 w-full">
          <TotalResults
            numberOfResults={cardData.length}
            setIsShowFilter={setIsShowFilter}
            displayFilter={displayFilter}
          />
          <PageFilterContext.Provider
            value={{ pageConfig, setPageConfig, genreType }}
          >
            <PageFilter isShowFilter={isShowFilter} />
          </PageFilterContext.Provider>
          <PageGrid
            data={
              cardData as Array<
                IMovie &
                  ICardSeriesAndMovie &
                  Season &
                  IMovieDetail &
                  ISeriesDetail
              >
            }
            message={emptyStateMessage}
          />
        </div>
      ) : (
        <CardGridSkeleton />
      )}
      {isEndReached ? (
        <p className="text-sm tracking-wide text-secondary font-paragraph text-center w-full">
          End Of Results
        </p>
      ) : (
        <PulseLoader loading={isLoading} color="#078080" />
      )}
      <div ref={targetElementRef} />
    </section>
  )
}

export default InfiniteScroll

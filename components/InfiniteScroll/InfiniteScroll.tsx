'use client'
import React from 'react'
import useSWR from 'swr'
import { PageFilter, PageGrid, TotalResults } from 'components'
import { useFilter, useInfiniteScroll } from 'hooks'
import { fetcher } from 'utils'
import { PulseLoader } from 'PackagesClientComponents/reactSpinner'

import type { IMoviePage, IMovie, ICardSeriesAndMovie } from 'types'

interface IInfiniteScrollProps {
  url: string
}

function InfiniteScroll({ url }: IInfiniteScrollProps): JSX.Element {
  const [pageConfig, setPage] = React.useState({ page: 1 })
  const [isShowFilter, setIsShowFilter] = React.useState(false)
  const pageUrl = useFilter(url, pageConfig)
  const { data, isLoading } = useSWR<IMoviePage>(pageUrl, fetcher)
  const [cardData, setCardData] =
    React.useState<Array<IMovie & ICardSeriesAndMovie>>()
  const targetElementRef = React.useRef(null)

  const scrollToBottom = useInfiniteScroll(targetElementRef.current)

  React.useEffect(() => {
    if (scrollToBottom && !isLoading) {
      setPage({ page: pageConfig.page + 1 })
    }
  }, [scrollToBottom])

  React.useEffect(() => {
    if (typeof data !== 'undefined' && typeof cardData === 'undefined') {
      setCardData([...data?.results])
    } else if (typeof data !== 'undefined' && typeof cardData !== 'undefined') {
      setCardData([...cardData, ...data.results])
    }
  }, [data])

  return (
    <section className="flex flex-col items-center">
      {cardData !== undefined ? (
        <div className="flex flex-col space-y-2">
          <TotalResults
            numberOfResults={cardData.length}
            setIsShowFilter={setIsShowFilter}
          />
          {isShowFilter && <PageFilter />}
          <PageGrid data={cardData} />
        </div>
      ) : (
        <h1>Loading....</h1>
      )}
      <PulseLoader loading={isLoading} color="#078080" />
      <div ref={targetElementRef} />
    </section>
  )
}

export default InfiniteScroll

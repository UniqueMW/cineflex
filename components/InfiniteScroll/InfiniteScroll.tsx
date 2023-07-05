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
  IFilterConfig
} from 'types'

interface IInfiniteScrollProps {
  url: string
}

function InfiniteScroll({ url }: IInfiniteScrollProps): JSX.Element {
  const [pageConfig, setPageConfig] = React.useState<IFilterConfig>({ page: 1 })
  const [isShowFilter, setIsShowFilter] = React.useState(false)
  const [currentPage, setCurrentPage] = React.useState(pageConfig.page)
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
      if (typeof cardData === 'undefined' || currentPage >= pageConfig.page) {
        setCardData(data.results)
      } else if (currentPage < pageConfig.page) {
        setCurrentPage(pageConfig.page)
        setCardData([...cardData, ...data.results])
      }
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
          <PageFilterContext.Provider value={{ pageConfig, setPageConfig }}>
            <PageFilter isShowFilter={isShowFilter} />
          </PageFilterContext.Provider>
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

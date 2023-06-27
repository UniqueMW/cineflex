'use client'
import React from 'react'
import useSWR from 'swr'
import { PageGrid } from 'components'
import { useInfiniteScroll } from 'hooks'
import { fetcher } from 'utils'

import type { IMoviePage, IMovie, ICardSeriesAndMovie } from 'types'

interface IInfiniteScrollProps {
  url: string
}

function InfiniteScroll({ url }: IInfiniteScrollProps): JSX.Element {
  const [page, setPage] = React.useState(1)
  const [pageUrl, setPageUrl] = React.useState(`${url}&page=${1}`)
  const { data, isLoading } = useSWR<IMoviePage>(pageUrl, fetcher)
  const [cardData, setCardData] =
    React.useState<Array<IMovie & ICardSeriesAndMovie>>()
  const targetElementRef = React.useRef(null)

  const scrollToBottom = useInfiniteScroll(targetElementRef.current)

  React.useEffect(() => {
    if (scrollToBottom && !isLoading) {
      setPageUrl(`${url}&page=${page + 1}`)
      setPage(page + 1)
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
    <section>
      {cardData !== undefined ? (
        <PageGrid data={cardData} />
      ) : (
        <h1>Loading....</h1>
      )}
      {isLoading && <h1>Loading More.....</h1>}
      <div ref={targetElementRef} />
    </section>
  )
}

export default InfiniteScroll

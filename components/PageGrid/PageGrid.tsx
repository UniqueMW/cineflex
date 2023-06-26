'use client'
import React from 'react'
import useSWR from 'swr'
import { Card } from 'components'
import { fetcher } from 'utils'
import type { IMovie, IMoviePage, ICardSeriesAndMovie } from 'types'

interface IPageGridProps {
  url: string
}

// TODO refactor
function PageGrid({ url }: IPageGridProps): JSX.Element {
  const [page, setPage] = React.useState(1)
  const [pageUrl, setPageUrl] = React.useState(`${url}&page=${1}`)
  const { data, isLoading } = useSWR<IMoviePage>(pageUrl, fetcher)
  const [scrollToBottom, setScrollToBottom] = React.useState(false)
  const [cardData, setCardData] =
    React.useState<Array<IMovie & ICardSeriesAndMovie>>()

  React.useEffect(() => {
    const handleScroll = (): void => {
      setScrollToBottom(
        window.innerHeight + window.scrollY >= document.body.offsetHeight
      )
    }
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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

  if (typeof cardData !== 'undefined') {
    return (
      <section className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-3 gap-2">
        {cardData.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </section>
    )
  }

  return <h1>Loading....</h1>
}

export default PageGrid

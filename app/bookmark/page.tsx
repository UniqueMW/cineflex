'use client'
import React from 'react'
import { Empty, Footer, PageGrid } from 'components'
import { getAllDatabaseBookmarks, getBookmarks } from 'utils'
import type {
  IMovieDetail,
  ISeriesDetail,
  Season,
  IMovie,
  ICardSeriesAndMovie
} from 'types'
import { useAuth } from 'hooks'
import type { Metadata } from 'next'

type pageGridDataType = Array<
  IMovie & ICardSeriesAndMovie & Season & IMovieDetail & ISeriesDetail
>

export const metadata: Metadata = {
  title: 'Bookmark',
  description:
    'Bookmark Your Favorites with CineFlex! Keep track of your most-loved movies and series by using our convenient bookmark feature. Never lose sight of your must-watch titles again. Elevate your movie-watching experience with CineFlex bookmarks.'
}

function BookmarkPage(): JSX.Element {
  const [isAuthenticated, user] = useAuth()
  const [data, setData] = React.useState<Array<
    ISeriesDetail | IMovieDetail
  > | null>(null)

  React.useEffect(() => {
    if (isAuthenticated && user !== null) {
      getAllDatabaseBookmarks(user.uid)
        .then((value) => {
          setData(value)
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      setData(getBookmarks())
    }
  }, [isAuthenticated, user])

  if (data === null) {
    return (
      <main className="min-h-screen justify-center items-center w-full h-full">
        <Empty message="Save Your Favorite Movies and Series Here" />
      </main>
    )
  }

  return (
    <main className=" space-y-2">
      <h1 className="text-headline font-heading tracking-wider text-xl font-semibold lg:px-10 px-2">
        Your Watchlist
      </h1>
      <div className="lg:px-10 px-2">
        <PageGrid
          data={data as pageGridDataType}
          message="Save Your Favorite Movies and Series Here"
        />
      </div>
      <Footer />
    </main>
  )
}

export default BookmarkPage

import React from 'react'
import { Button, ButtonAlt } from 'components'
import { useAuth, useCheckBookmarkStatus } from 'hooks'
import { ref } from 'firebase/database'
import { database } from 'firebase.config'
import { useRouter } from 'next/navigation'
import { BsJournalBookmark, BsJournalBookmarkFill } from 'react-icons/bs'
import { SlSocialYoutube } from 'react-icons/sl'
import { PuffLoader } from 'PackagesClientComponents/reactSpinner'
import {
  addAndRemoveMoviesOrSeriesInDatabase,
  addAndRemoveBookmark,
  checkInBookmark,
  checkMovieOrSeriesInDatabase
} from 'utils'

import type { IMovieDetail, ISeriesDetail } from 'types'

interface IDetailActionButtonsProps {
  data: IMovieDetail & ISeriesDetail
}

function DetailActionButtons({ data }: IDetailActionButtonsProps): JSX.Element {
  const router = useRouter()
  const [isAuthenticated, user] = useAuth()
  const bookmarkStatus = useCheckBookmarkStatus(data)

  const handleTrailer = (): void => {
    if (data !== undefined) {
      router.push(
        `/trailer/${data.first_air_date !== undefined ? 'tv' : 'movie'}/${
          data.id
        }`
      )
    }
  }

  const handleBookmark = async (): Promise<void> => {
    if (data !== undefined) {
      if (isAuthenticated && user !== null) {
        bookmarkStatus.setIsBookmarkStatusLoading(true)
        await addAndRemoveMoviesOrSeriesInDatabase(data, user.uid)
        const isMovieOrSeriesBookmarked = await checkMovieOrSeriesInDatabase(
          data.id,
          ref(database, `bookmarks/${user.uid}`)
        )
        bookmarkStatus.setIsBookmarkStatusLoading(false)
        bookmarkStatus.setIsBookmarked(
          typeof isMovieOrSeriesBookmarked !== 'boolean'
        )
      } else {
        addAndRemoveBookmark(data)
        bookmarkStatus.setIsBookmarked(checkInBookmark(data))
      }
    }
  }
  return (
    <div className="flex flex-row justify-center space-x-6 w-full">
      <Button
        className="flex flex-row items-center text-lg font-heading text-headline tracking-wider"
        onClick={handleTrailer}
      >
        <SlSocialYoutube className="mr-2" />
        <h2>Trailer</h2>
      </Button>
      <ButtonAlt
        className="flex flex-row items-center font-heading text-lg text-headline tracking-wider"
        // eslint-disable-next-line
        onClick={handleBookmark}
      >
        {bookmarkStatus.isBookmarkStatusLoading ? (
          <PuffLoader
            className="mr-2"
            color="#078080"
            loading={bookmarkStatus.isBookmarkStatusLoading}
            size={18}
          />
        ) : bookmarkStatus.isBookmarked ? (
          <BsJournalBookmarkFill className="mr-2 text-[#FFD700]" />
        ) : (
          <BsJournalBookmark className="mr-2" />
        )}

        <h2>Bookmark</h2>
      </ButtonAlt>
    </div>
  )
}

export default DetailActionButtons

import React from 'react'
import { database } from 'firebase.config'
import { ref } from 'firebase/database'
import { checkInBookmark, checkMovieOrSeriesInDatabase } from 'utils'
import { useAuth } from 'hooks'
import type {
  IMovieDetail,
  ISeriesDetail,
  IUseCheckBookmarkStatusObj
} from 'types'

// TODO: Think of a feature that display if a movie or series is bookmarked and if series and movies bookmarks should be separate
function useCheckBookmarkStatus(
  data: (IMovieDetail & ISeriesDetail) | undefined
): IUseCheckBookmarkStatusObj {
  const [isBookmarked, setIsBookmarked] = React.useState(false)
  const [isBookmarkStatusLoading, setIsBookmarkStatusLoading] =
    React.useState(false)
  const [isAuthenticated, user] = useAuth()

  React.useEffect(() => {
    if (data !== undefined) {
      if (isAuthenticated && user !== null) {
        setIsBookmarkStatusLoading(true)
        checkMovieOrSeriesInDatabase(
          data.id,
          ref(database, `bookmarks/${user.uid}`)
        )
          .then((value) => {
            setIsBookmarkStatusLoading(false)
            setIsBookmarked(typeof value !== 'boolean')
          })
          .catch((error) => {
            console.log(error)
          })
      } else {
        setIsBookmarked(checkInBookmark(data))
      }
    }
  }, [data, isAuthenticated, user])

  return {
    isBookmarked,
    isBookmarkStatusLoading,
    setIsBookmarked,
    setIsBookmarkStatusLoading
  }
}

export default useCheckBookmarkStatus

import { database } from 'firebase.config'
import { ref, push, set, remove } from 'firebase/database'
import { checkMovieOrSeriesInDatabase } from 'utils'
import type { IMovieDetail, ISeriesDetail } from 'types'

async function addAndRemoveMoviesOrSeriesInDatabase(
  movieOrSeries: IMovieDetail | ISeriesDetail,
  uid: string
): Promise<void> {
  const userBookmarksRef = ref(database, `bookmarks/${uid}`)
  const databaseResults = await checkMovieOrSeriesInDatabase(
    movieOrSeries.id,
    userBookmarksRef
  )
  if (databaseResults === false) {
    const movieOrSeriesToAddRef = push(userBookmarksRef)
    try {
      await set(movieOrSeriesToAddRef, movieOrSeries)
    } catch (error) {
      console.log(error)
    }
  } else if (typeof databaseResults === 'object') {
    const movieOrSeriesToDeleteRef = ref(
      database,
      `bookmarks/${uid}/${databaseResults.key}`
    )
    try {
      await remove(movieOrSeriesToDeleteRef)
    } catch (error) {
      console.log(error)
    }
  }
}

export default addAndRemoveMoviesOrSeriesInDatabase

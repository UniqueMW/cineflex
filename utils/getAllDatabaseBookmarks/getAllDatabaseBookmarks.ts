import { database } from 'firebase.config'
import { onValue, ref } from 'firebase/database'

import type { ISeriesDetail, IMovieDetail } from 'types'
async function getAllDatabaseBookmarks(
  uid: string
): Promise<Array<ISeriesDetail | IMovieDetail>> {
  // eslint-disable-next-line
  const bookmarkDrinksPromise = new Promise((resolve) => {
    onValue(
      ref(database, `bookmarks/${uid}`),
      (snapshot) => {
        const moviesOrSeries = []
        const databaseMoviesOrSeries = snapshot.val()
        for (const key in databaseMoviesOrSeries) {
          moviesOrSeries.push(databaseMoviesOrSeries[key])
        }
        resolve(moviesOrSeries)
      },
      { onlyOnce: true }
    )
  }) as Promise<Array<ISeriesDetail | IMovieDetail>>

  // eslint-disable-next-line
  return bookmarkDrinksPromise
}

export default getAllDatabaseBookmarks

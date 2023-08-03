import { onValue } from 'firebase/database'
import type { DatabaseReference } from 'firebase/database'

async function checkMovieOrSeriesInDatabase(
  id: string | number,
  ref: DatabaseReference
): Promise<boolean | { isAvailable: boolean; key: string }> {
  // eslint-disable-next-line
  return new Promise((resolve) => {
    onValue(
      ref,
      (snapshot) => {
        const movieOrSeriesSnapshot = snapshot.val()

        for (const key in movieOrSeriesSnapshot) {
          if (movieOrSeriesSnapshot[key].id === id) {
            resolve({ isAvailable: true, key })
          }
        }
        resolve(false)
      },
      {
        onlyOnce: true
      }
    )
  })
}

export default checkMovieOrSeriesInDatabase

import type { IMovieDetail, ISeriesDetail } from 'types'
import { checkInBookmark } from 'utils'

function addAndRemoveBookmark(
  movieSeriesData: IMovieDetail | ISeriesDetail,
  key: string = 'uniqueMWCineflex'
): void {
  const stringifiedBookmarks = localStorage.getItem(key)

  if (typeof stringifiedBookmarks === 'string') {
    const bookmarkList: Array<IMovieDetail | ISeriesDetail> =
      JSON.parse(stringifiedBookmarks)
    if (checkInBookmark(movieSeriesData, key)) {
      const filteredBookmarks = bookmarkList.filter(
        (movieSeries) => movieSeries.id !== movieSeriesData.id
      )
      localStorage.setItem(key, JSON.stringify(filteredBookmarks))
    } else {
      bookmarkList.push(movieSeriesData)
      localStorage.setItem(key, JSON.stringify(bookmarkList))
    }
  } else {
    localStorage.setItem(key, JSON.stringify([movieSeriesData]))
  }
}

export default addAndRemoveBookmark

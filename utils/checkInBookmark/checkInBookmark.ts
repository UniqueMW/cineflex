import type { IMovieDetail, ISeriesDetail } from 'types'

function checkInBookmark(
  movieSeriesData: IMovieDetail | ISeriesDetail,
  key: string = 'uniqueMWCineflex'
): boolean {
  const stringifiedBookmarks = localStorage.getItem(key)
  if (typeof stringifiedBookmarks === 'string') {
    const getBookmarkList: Array<IMovieDetail | ISeriesDetail> =
      JSON.parse(stringifiedBookmarks)
    const filterBookmarkList = getBookmarkList.filter(
      (movieSeries) => movieSeries.id === movieSeriesData.id
    )
    return filterBookmarkList.length > 0
  }
  return false
}

export default checkInBookmark

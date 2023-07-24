import type { IMovieDetail, ISeriesDetail } from 'types'

function getBookmarks(
  key: string = 'uniqueMWCineflex'
): Array<ISeriesDetail | IMovieDetail> | null {
  const getBookmarks = localStorage.getItem(key)
  if (typeof getBookmarks === 'string') {
    return JSON.parse(getBookmarks) as Array<ISeriesDetail | IMovieDetail>
  }

  return null
}

export default getBookmarks

import React from 'react'
interface IUseSelectDetailUrlsObj {
  detailUrl: string
  recommendationsUrl: string
  castUrl: string
}

function useSelectDetailUrls(
  id: string,
  mediaType: string,
  API_KEY: string = process.env.NEXT_PUBLIC_API_KEY as string
): IUseSelectDetailUrlsObj {
  const urls = React.useMemo(() => {
    const detailUrl =
      mediaType === 'MOVIE'
        ? `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
        : `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}`

    const recommendationsUrl =
      mediaType === 'MOVIE'
        ? `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}`
        : `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=${API_KEY}`

    const castUrl =
      mediaType === 'MOVIE'
        ? `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
        : `https://api.themoviedb.org/3/tv/${id}/credits?api_key=${API_KEY}`

    return { detailUrl, recommendationsUrl, castUrl }
  }, [id, mediaType])

  return urls
}

export default useSelectDetailUrls

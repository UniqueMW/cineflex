import React from 'react'

interface IFilterConfig {
  language?: 'en-US'
  include_adult?: boolean
  include_video?: boolean
  page?: number
  with_genres?: number
  without_genres?: number
  with_watch_providers?: number
  without_watch_providers?: number
  year?: number
  'vote_average.gte'?: number
  sort_by?:
    | 'popularity.asc'
    | 'popularity.desc'
    | 'revenue.asc'
    | 'revenue.desc'
    | 'primary_release_date.asc'
    | 'primary_release_date.desc'
    | 'vote_average.asc'
    | 'vote_average.desc'
    | 'vote_count.asc'
    | 'vote_count.desc'
  [key: string]: undefined | boolean | number | string
}

function useFilter(baseUrl: string, filterConfig?: IFilterConfig): string {
  const defaultConfig: IFilterConfig = { language: 'en-US', page: 1 }
  const [url, setUrl] = React.useState(baseUrl)

  React.useEffect(() => {
    const regex = /^https?:\/\/[^?]+\?([^=&]*api_key=[^=&]*)$/
    const config: IFilterConfig = { ...defaultConfig, ...filterConfig }
    const isValid = regex.test(baseUrl)

    if (isValid) {
      let generatedUrl = url
      for (const key in config) {
        generatedUrl = `${generatedUrl}&${key}=${String(config[key])}`
      }
      setUrl(generatedUrl)
    } else {
      throw new Error(
        `${baseUrl} this url is invalid make sure it only include the api_key as the only parameter.`
      )
    }
  }, [baseUrl, filterConfig])

  return url
}

export default useFilter

import React from 'react'
import type { IFilterConfig } from 'types'

const defaultConfig: IFilterConfig = { language: 'en-US', page: 1 }
function useFilter(baseUrl: string, filterConfig?: IFilterConfig): string {
  const [url, setUrl] = React.useState(baseUrl)

  React.useEffect(() => {
    const regex = /^https?:\/\/[^?]+\?([^=&]*api_key=[^=&]*)$/
    // const regex =
    //   /^https?:\/\/[^?]+\?(?=.*\bapi_key=)(?=.*\bquery=|\bapi_key=|[^&]*$).+$/
    const config: IFilterConfig = { ...defaultConfig, ...filterConfig }
    const isValid = regex.test(baseUrl)

    if (isValid) {
      let generatedUrl = baseUrl
      for (const key in config) {
        const checkKeyValue = Boolean(config[key])
        if (
          checkKeyValue ||
          typeof config[key] === 'boolean' ||
          typeof config[key] === 'number'
        ) {
          generatedUrl = `${generatedUrl}&${key}=${String(config[key])}`
        }
      }
      // Only fetch up to 500 pages as specified by the api
      if (config.page <= 500) {
        setUrl(generatedUrl)
      }
    } else {
      throw new Error(
        `${baseUrl} this url is invalid make sure it only include the api_key as the only parameter.`
      )
    }
  }, [baseUrl, filterConfig])
  return url
}

export default useFilter

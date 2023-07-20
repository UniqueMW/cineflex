import React from 'react'
import type { IFilterConfig } from 'types'

function useFilter(baseUrl: string, filterConfig?: IFilterConfig): string {
  const defaultConfig: IFilterConfig = { language: 'en-US', page: 1 }
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

import React from 'react'
import { groupFilterOptionsWithLogic } from 'utils'
import type { IPageFilterContext, IWatchProvider, Genre } from 'types'

function useFilterEffect(
  filterContext: IPageFilterContext | null,
  selectedOptions: Array<IWatchProvider & Genre> | undefined,
  toggleOption: string,
  keyName: 'watch_providers' | 'genres'
): void {
  React.useEffect(() => {
    if (filterContext !== null && typeof selectedOptions !== 'undefined') {
      const withKey = `with_${keyName}`
      const withoutKey = `without_${keyName}`
      filterContext.pageConfig[withKey] = ''
      filterContext.pageConfig[withoutKey] = ''

      const genreKey =
        toggleOption === 'Include' ? `with_${keyName}` : `without_${keyName}`

      filterContext.setPageConfig({
        ...filterContext.pageConfig,
        [genreKey]: groupFilterOptionsWithLogic(selectedOptions),
        page: 1
      })
    }
  }, [selectedOptions, toggleOption, keyName])
}

export default useFilterEffect

import React from 'react'
import type { IFilterConfig } from 'types'

interface IPageFilterContext {
  pageConfig: IFilterConfig
  setPageConfig: React.Dispatch<React.SetStateAction<IFilterConfig>>
}

const PageFilterContext = React.createContext<IPageFilterContext | null>(null)

export default PageFilterContext

import React from 'react'
import type { IPageFilterContext } from 'types'

const PageFilterContext = React.createContext<IPageFilterContext | null>(null)

export default PageFilterContext

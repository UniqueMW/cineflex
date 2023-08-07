'use client'
import 'client-only'
import React from 'react'
import { getScreenWidth } from 'utils'

function useWindowSize(): ['lg' | 'md' | 'sm' | 'xs', number] {
  const initialWidth = typeof window !== 'undefined' ? window.innerWidth : 0
  const [windowSize, setWindowSize] = React.useState<
    ['lg' | 'md' | 'sm' | 'xs', number]
  >(getScreenWidth(initialWidth))

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      // Only access window object in the browser environment
      window.addEventListener('resize', () => {
        const width = window.innerWidth
        setWindowSize(getScreenWidth(width))
      })
    }
  }, [])

  return windowSize
}

export default useWindowSize

import React from 'react'
import { getScreenWidth } from 'utils'

function useWindowSize(): ['lg' | 'md' | 'sm' | 'xs', number] {
  const [windowSize, setWindowSize] = React.useState<
    ['lg' | 'md' | 'sm' | 'xs', number]
  >(getScreenWidth(window.innerWidth))

  React.useEffect(() => {
    window.addEventListener('resize', () => {
      const width = window.innerWidth
      setWindowSize(getScreenWidth(width))
    })
  }, [])

  return windowSize
}

export default useWindowSize

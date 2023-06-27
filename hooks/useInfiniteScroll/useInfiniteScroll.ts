import React from 'react'

function useInfiniteScroll(targetElement: any): boolean {
  const [isAtBottom, setIsAtBottom] = React.useState(false)

  React.useEffect(() => {
    const handleScrollFallback = (): void => {
      setIsAtBottom(
        window.scrollY + window.innerHeight >= document.body.offsetHeight
      )
    }

    const handleScroll = (entries: IntersectionObserverEntry[]): void => {
      setIsAtBottom(entries[0].isIntersecting)
    }

    const observer = new IntersectionObserver(handleScroll)

    if (observer !== undefined) {
      targetElement !== null && observer.observe(targetElement as HTMLElement)
    } else {
      window.addEventListener('scroll', handleScrollFallback)
    }

    return () => {
      if (observer !== undefined) {
        observer.disconnect()
      } else {
        window.removeEventListener('scroll', handleScrollFallback)
      }
    }
  }, [targetElement])

  return isAtBottom
}

export default useInfiniteScroll

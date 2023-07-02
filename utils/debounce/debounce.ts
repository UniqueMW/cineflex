function debounce(): (cb: () => void, duration: number) => void {
  let timeoutId: NodeJS.Timeout

  return (callback: () => void, duration: number = 500) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(callback, duration)
  }
}

export default debounce

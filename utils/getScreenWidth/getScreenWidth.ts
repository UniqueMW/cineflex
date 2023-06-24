function getScreenWidth(width: number): ['lg' | 'md' | 'sm' | 'xs', number] {
  if (width >= 1024) {
    return ['lg', width]
  } else if (width < 1024 && width >= 768) {
    return ['md', width]
  } else if (width < 768 && width >= 640) {
    return ['sm', width]
  } else {
    return ['xs', width]
  }
}

export default getScreenWidth

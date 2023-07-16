async function fetchers(urls: string[]): Promise<any> {
  const responses = await Promise.all(urls.map(async (url) => await fetch(url)))
  const data = await Promise.all(
    responses.map(async (response) => await response.json())
  )
  return data
}

export default fetchers

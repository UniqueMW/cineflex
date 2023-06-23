async function fetcher(url: string): Promise<any> {
  const fetchedData = await fetch(url)
  const serializedFetchedData = await fetchedData.json()

  return serializedFetchedData
}

export default fetcher

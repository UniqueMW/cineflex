import React from 'react'
import { SquareSkeleton } from 'skeletons'

function EpisodesSkeleton(): JSX.Element {
  const episodes = React.useMemo(() => {
    let numberOfEpisode = 20
    const episodeArray = []
    while (numberOfEpisode > 0) {
      episodeArray.push(<SquareSkeleton width="100%" height="54px" />)
      numberOfEpisode--
    }
    return episodeArray
  }, [])

  return <section className="px-2 lg:px-10">{episodes}</section>
}

export default EpisodesSkeleton

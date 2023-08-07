import React from 'react'
import { Ratings, Date } from 'components'
import type { IEpisode } from 'types'

interface IEpisodeCardProps {
  episode: IEpisode
}

function EpisodeCard(props: IEpisodeCardProps): JSX.Element {
  return (
    <section className="shadow-sm bg-cardBackground px-1 py-1">
      <h2 className="text-headline font-heading tracking-wider lg:text-lg text-base">
        {props.episode.name}
      </h2>
      <div className="flex flex-row justify-start gap-x-1 text-sm font-paragraph text-paragraph tracking-wider">
        <Ratings rating={props.episode.vote_average} />
        <h4>|</h4>
        <Date date={props.episode.air_date} />
        <h4>|</h4>
        <h4>Episode {props.episode.episode_number}</h4>
      </div>
    </section>
  )
}

export default EpisodeCard

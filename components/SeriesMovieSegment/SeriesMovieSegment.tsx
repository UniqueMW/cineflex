import React from 'react'
interface ISeriesMovieSegment {
  segment: string
  setSegment: React.Dispatch<React.SetStateAction<string>>
}

function SeriesMovieSegment(props: ISeriesMovieSegment): JSX.Element {
  const handleSegment = (event: React.MouseEvent<HTMLButtonElement>): void => {
    if ('value' in event.target) {
      props.setSegment(event.target.value as string)
    }
  }
  return (
    <section className="flex flex-row justify-center space-x-4 font-heading tracking-wider text-lg text-headline">
      <button
        onClick={handleSegment}
        value="movie"
        className={`${
          props.segment === 'movie'
            ? 'border border-transparent border-b-button'
            : ''
        }`}
      >
        Movie
      </button>
      <h3>|</h3>
      <button
        onClick={handleSegment}
        value="tv"
        className={`${
          props.segment === 'tv'
            ? 'border border-transparent border-b-button'
            : ''
        }`}
      >
        Series
      </button>
    </section>
  )
}

export default SeriesMovieSegment

import React from 'react'
interface ISeriesMovieSegment {
  segment: string
  setSegment: React.Dispatch<React.SetStateAction<string>>
}

function SeriesMovieSegment(props: ISeriesMovieSegment): JSX.Element {
  const handleSegment = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const buttonValue = event.target.value
    if (typeof buttonValue === 'string') {
      props.setSegment(buttonValue)
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

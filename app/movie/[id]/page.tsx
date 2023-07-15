import React from 'react'
import { Detail } from 'components'

function Movie(): JSX.Element {
  return (
    <main className="min-h-screen bg-background lg:px-10 px-2 py-1">
      <Detail mediaType="MOVIE" />
    </main>
  )
}

export default Movie

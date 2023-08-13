import React from 'react'
import { Detail, Footer } from 'components'

function Movie(): JSX.Element {
  return (
    <main className="min-h-screen bg-background py-1">
      <Detail mediaType="TV" />
      <Footer />
    </main>
  )
}

export const dynamic = 'force-dynamic'

export default Movie

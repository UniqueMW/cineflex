import React from 'react'
import { Hero, CardCarousel } from 'components'

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <CardCarousel />
    </main>
  )
}

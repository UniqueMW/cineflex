import React from 'react'
import { Hero, CarouselGroup } from 'components'

export default function Home(): JSX.Element {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <CarouselGroup />
    </main>
  )
}

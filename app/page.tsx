import React from 'react'
import { Hero, HomeCarouselsWrapper, Footer } from 'components'

function Home(): JSX.Element {
  return (
    <main className="min-h-screen bg-background  space-y-4">
      <Hero />
      <HomeCarouselsWrapper />
      <Footer />
    </main>
  )
}

export default Home

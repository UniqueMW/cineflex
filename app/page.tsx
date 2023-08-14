'use client'
import React from 'react'
import { isSignInWithEmailLink, signInWithEmailLink } from 'firebase/auth'
import { auth } from 'firebase.config'
import { Hero, HomeCarouselsWrapper, Footer } from 'components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cineflex',
  description:
    'Discover the world of CineFlex - your ultimate movie companion. Explore a vast collection of films, from classics to the latest releases, all at your fingertips. Immerse yourself in cinematic wonders with CineFlex, where entertainment meets convenience.'
}

function Home(): JSX.Element {
  React.useEffect(() => {
    if (isSignInWithEmailLink(auth, window.location.href)) {
      let email = localStorage.getItem('userEmail')

      if (email === null) {
        email = window.prompt(
          'Seems like you changed your device, Enter your Email again to continue.'
        )
      }

      if (typeof email === 'string') {
        signInWithEmailLink(auth, email, window.location.href)
          .then((user) => {
            console.log('user signed in with email!', user)
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
  }, [])
  return (
    <main className="min-h-screen bg-background  space-y-4">
      <Hero />
      <HomeCarouselsWrapper />
      <Footer />
    </main>
  )
}

export default Home

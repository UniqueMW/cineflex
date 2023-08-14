import React from 'react'
import { AuthForm, Footer } from 'components'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Join Now',
  description:
    'Join the CineFlex community and unlock a world of movies and series. Create your account today to enjoy a personalized cinematic experience. Gain access to a vast library, create your watchlist, and receive tailored recommendations. Dive into entertainment with CineFlex – your ticket to cinematic adventure. '
}

function JoinNowPage(): JSX.Element {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <AuthForm title="Join Now" />
      <Footer />
    </main>
  )
}

export default JoinNowPage

import React from 'react'
import { AuthForm, Footer } from 'components'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
  description:
    'Welcome back to CineFlex! Log in to continue your cinematic journey. Access your favorite movies and series, manage your watchlist, and enjoy personalized recommendations. Your entertainment world is just a few clicks away with CineFlex.'
}

function LoginPage(): JSX.Element {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <AuthForm title="Login" />
      <Footer />
    </main>
  )
}

export default LoginPage

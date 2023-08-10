import React from 'react'
import { AuthForm, Footer } from 'components'

function JoinNowPage(): JSX.Element {
  return (
    <main className="min-h-screen flex flex-col justify-between">
      <AuthForm title="Join Now" />
      <Footer />
    </main>
  )
}

export default JoinNowPage

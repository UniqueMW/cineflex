import React from 'react'
import { AuthForm, Footer } from 'components'

function LoginPage(): JSX.Element {
  return (
    <main className="min-h-screen">
      <AuthForm title="Login" />
      <Footer />
    </main>
  )
}

export default LoginPage

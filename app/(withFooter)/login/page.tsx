import React from 'react'
import { AuthForm } from 'components'

function LoginPage(): JSX.Element {
  return (
    <main className="min-h-screen lg:px-10 px-2">
      <AuthForm title="Login" />
    </main>
  )
}

export default LoginPage

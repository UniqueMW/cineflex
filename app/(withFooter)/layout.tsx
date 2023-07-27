import React from 'react'
import { Footer } from 'components'
export default function WithFooterLayout({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <section>
      {children}
      <Footer />
    </section>
  )
}

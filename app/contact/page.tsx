import React from 'react'
import { ContactForm, Footer } from 'components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Me',
  description:
    "Get in touch with me, the creator of CineFlex! Whether you have questions, suggestions, or just want to chat about movies, I'd love to hear from you. Reach out via the contact form and let's connect. Your input fuels the evolution of CineFlex."
}

function ContactPage(): JSX.Element {
  return (
    <main className=" min-h-screen">
      <ContactForm />
      <Footer />
    </main>
  )
}

export default ContactPage

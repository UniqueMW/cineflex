import React from 'react'

function ContactForm(): JSX.Element {
  return (
    <section className="flex flex-row justify-center items-center h-full">
      <form className="flex flex-col bg-cardBackground text-headline font-heading text-lg tracking-wider lg:w-3/4 w-full">
        <label htmlFor="name">Name</label>
        <input
          placeholder="What is your Name?"
          id="name"
          className="background-transparent border border-none border-b-headline w-full"
        />
        <label htmlFor="email">Email</label>
        <input
          placeholder="Provide Your Email."
          id="email"
          className="background-transparent  border-b-headline w-full"
        />
        <label htmlFor="subject">Subject</label>
        <input
          placeholder="Subject"
          id="subject"
          className="background-transparent border-b-headline w-full"
        />
        <label htmlFor="message">Message</label>
        <textarea
          placeholder="Message"
          id="message"
          className="h-20 border border-headline"
        />
      </form>
    </section>
  )
}

export default ContactForm

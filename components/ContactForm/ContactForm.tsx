import React from 'react'

function ContactForm(): JSX.Element {
  return (
    <section className="flex flex-row justify-center items-center lg:mt-4 mt-2 ">
      <form className="flex flex-col items-center bg-cardBackground text-headline font-heading text-lg tracking-wider lg:w-1/2 w-full px-2 py-2">
        <label htmlFor="name" className="text-left w-full">
          Name
        </label>
        <input
          placeholder="What is your Name?"
          id="name"
          className="background-transparent border-b border-b-headline w-full"
        />
        <label htmlFor="email" className="text-left w-full">
          Email
        </label>
        <input
          placeholder="Provide Your Email."
          id="email"
          className="background-transparent  border-b border-b-headline w-full"
        />
        <label htmlFor="subject" className="text-left w-full">
          Subject
        </label>
        <input
          placeholder="Subject"
          id="subject"
          className="background-transparent border-b border-b-headline w-full"
        />
        <label htmlFor="message" className="text-left w-full mt-3">
          Message
        </label>
        <textarea
          placeholder="Message"
          id="message"
          className="h-32 border border-headline w-full"
        />
        <button
          type="submit"
          className="bg-button lg:px-6 px-3 py-2 w-1/2 mt-2"
        >
          Send
        </button>
      </form>
    </section>
  )
}

export default ContactForm

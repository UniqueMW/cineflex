import React from 'react'
import Image from 'next/image'
import { LiaHandPointLeftSolid } from 'react-icons/lia'
import Link from 'next/link'
import { Footer } from 'components'

function NotFound(): JSX.Element {
  return (
    <main className=" min-h-screen flex flex-col justify-between">
      <section className="lg:px-10 px-2 flex flex-col items-center justify-center w-full space-y-4">
        <Image src="/404Error.svg" alt="404 Cat" width={400} height={400} />
        <Link
          className="flex flex-row items-center space-x-2 text-secondary text-lg font-heading tracking-wider"
          href="/"
        >
          <LiaHandPointLeftSolid />
          <h4>Go Back</h4>
        </Link>
      </section>
      <Footer />
    </main>
  )
}

export default NotFound

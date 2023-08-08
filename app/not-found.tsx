import React from 'react'
import Image from 'next/image'
import { LiaHandPointLeftSolid } from 'react-icons/lia'
import Link from 'next/link'

function Page404(): JSX.Element {
  return (
    <main className="lg:px-10 px-2 min-h-screen flex flex-col items-center justify-center w-full space-y-4">
      <Image src="/404Error.svg" alt="404 Cat" width={400} height={400} />
      <Link
        className="flex flex-row space-x-2 text-secondary text-lg font-heading tracking-wider"
        href="/"
      >
        <LiaHandPointLeftSolid />
        <h4>Go Back</h4>
      </Link>
    </main>
  )
}

export default Page404

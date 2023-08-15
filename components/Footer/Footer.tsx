import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiUpwork } from 'react-icons/si'

const date = new Date()

function Footer(): JSX.Element {
  return (
    <footer className="flex flex-col items-center bg-cardBackground lg:px-10 px-2 py-4 mt-4  justify-between text-headline font-heading tracking-wider text-lg">
      <div className="flex md:flex-row flex-col items-center lg:items-start justify-between w-full">
        <Link href="/" className="text-2xl font-logo text-button">
          CINEFLEX
        </Link>
        <div className="md:space-x-6 flex md:flex-row flex-col items-center md:items-start space-y-1 md:space-y-0">
          <Link href="/contact">Contact Me</Link>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="about">About Me</Link>
        </div>
        <div className="flex flex-row items-center gap-x-2">
          <a
            href="https://github.com/UniqueMW"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01a53d98963ca4a0a6"
            target="_blank"
            rel="noreferrer"
          >
            <SiUpwork className="text-[#6FDA44]" />
          </a>
          <a
            href="https://www.linkedin.com/in/cliff-likovo-57b148263/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="text-[#0A66C2]" />
          </a>
        </div>
      </div>
      <p className="text-base font-paragraph tracking-wider text-center">
        &copy; {date.getFullYear()} CINEFLEX(By Cliff Likovo). All rights
        reserved.
      </p>
    </footer>
  )
}

export default Footer

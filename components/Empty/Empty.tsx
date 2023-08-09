import React from 'react'
import Image from 'next/image'

interface IEmptyProps {
  message?: string
}

const defaultMessage =
  'Oops! It looks like this resource is temporarily unavailable.'

function Empty({ message = defaultMessage }: IEmptyProps): JSX.Element {
  return (
    <section className="flex flex-col items-center space-y-2 w-full">
      <Image
        src="/empty-box.svg"
        width={400}
        height={400}
        alt="Empty Resources"
      />
      <h3 className="text-secondary text-lg font-heading font-semibold tracking-wider text-center">
        {message}
      </h3>
    </section>
  )
}

export default Empty

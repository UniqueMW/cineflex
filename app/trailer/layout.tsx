import React from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Experience the Thrills: Trailer Page',
  description:
    "Step into the world of anticipation and excitement with our Trailer Page. Immerse yourself in a collection of captivating trailers that offer a sneak peek into the latest and upcoming movies and series. Discover the magic of storytelling through captivating visuals, heart-pounding action, and intriguing narratives. Whether you're a fan of action-packed blockbusters, heartwarming dramas, or spine-tingling thrillers, our Trailer Page has something for everyone. Get ready to embark on a cinematic journey as you explore trailers that set the stage for unforgettable entertainment experiences. It's time to get a taste of what's to come on the big and small screens, all in one place."
}

export default function TrailerLayout({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return <section>{children}</section>
}

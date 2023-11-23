import React from 'react'
import { Footer, Bookmark } from 'components'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bookmark',
  description:
    'Bookmark Your Favorites with CineFlex! Keep track of your most-loved movies and series by using our convenient bookmark feature. Never lose sight of your must-watch titles again. Elevate your movie-watching experience with CineFlex bookmarks.'
}

function BookmarkPage(): JSX.Element {
  return (
    <main className=" space-y-2 min-h-screen">
      <Bookmark />
      <Footer />
    </main>
  )
}

export default BookmarkPage

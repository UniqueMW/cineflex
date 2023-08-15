import React from 'react'
import './globals.css'
import localFonts from 'next/font/local'
import { NavWrapper } from 'components'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cineflex',
  description:
    'Discover the world of CineFlex - your ultimate movie companion. Explore a vast collection of films, from classics to the latest releases, all at your fingertips. Immerse yourself in cinematic wonders with CineFlex, where entertainment meets convenience.'
}

const exo2 = localFonts({
  src: [
    { path: '../public/fonts/Exo_2/Exo2-Italic-VariableFont_wght.ttf' },
    { path: '../public/fonts/Exo_2/Exo2-VariableFont_wght.ttf' }
  ],
  variable: '--font-paragraph'
})

const shadowsIntoLightTwo = localFonts({
  src: [
    {
      path: '../public/fonts/Shadows_Into_Light_Two/ShadowsIntoLightTwo-Regular.ttf'
    }
  ],
  variable: '--font-heading'
})

const rubikMoonrocks = localFonts({
  src: [{ path: '../public/fonts/Rubik_Moonrocks/RubikMoonrocks-Regular.ttf' }],
  variable: '--font-logo'
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <body
        className={`bg-background  ${exo2.variable} ${shadowsIntoLightTwo.variable} ${rubikMoonrocks.variable}`}
      >
        <NavWrapper>{children}</NavWrapper>
      </body>
    </html>
  )
}

'use client'
import React, { useEffect } from 'react'
import { Nav, SideMenu } from 'components'

interface INavWrapper {
  children: React.ReactNode
}

function NavWrapper(props: INavWrapper): JSX.Element {
  const [openMenu, setOpenMenu] = React.useState(false)

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [openMenu])

  return (
    <>
      <Nav setOpenMenu={setOpenMenu} />
      <SideMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />
      {props.children}
    </>
  )
}

export default NavWrapper

'use client'
import React from 'react'
import Link from 'next/link'
import { RiSearch2Line } from 'react-icons/ri'
import { BsJournalBookmark } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useRouter } from 'next/navigation'
import { Button, ButtonAlt, ButtonIcon } from 'components'

interface INavProps {
  setOpenMenu: (arg: boolean) => void
}

function Nav(props: INavProps): JSX.Element {
  const router = useRouter()
  const handleOpenMenu = React.useCallback(() => {
    props.setOpenMenu(true)
  }, [])

  const handleSearchPage = (): void => {
    router.push('/search')
  }

  return (
    <nav className="sticky top-0 left-0 z-10 w-full flex flex-row justify-between items-center lg:px-10 md:px-6 px-2 text-heading text-lg tracking-wider font-heading bg-background border shadow-md py-3">
      <ButtonIcon className="block lg:hidden" onClick={handleOpenMenu}>
        <GiHamburgerMenu />
      </ButtonIcon>
      <div>
        <Link
          className="md:text-3xl text-xl text-button font-logo tracking-wider"
          href="/"
        >
          CINEFLEX
        </Link>
      </div>
      <div className="lg:flex hidden flex-row space-x-4">
        <Link href="/">Home</Link>
        <Link href="/movies">Movies</Link>
        <Link href="/series">Series</Link>
        <Link href="/cinema">Cinema</Link>
        <Link href="/upcoming">Upcoming</Link>
      </div>
      <div className="flex flex-row items-center space-x-3">
        <ButtonIcon onClick={handleSearchPage}>
          <RiSearch2Line />
        </ButtonIcon>
        <ButtonIcon>
          <BsJournalBookmark />
        </ButtonIcon>
        <div className="md:flex hidden flex-row space-x-3">
          <Button>Join Now</Button>
          <ButtonAlt>LOGIN</ButtonAlt>
        </div>
      </div>
    </nav>
  )
}

export default Nav

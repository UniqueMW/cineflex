'use client'
import React from 'react'
import Link from 'next/link'
import { RxCross2 } from 'react-icons/rx'
import { useRouter } from 'next/navigation'
import { Button, ButtonAlt, ButtonIcon } from 'components'
import { motion, AnimatePresence } from 'PackagesClientComponents/framerMotion'

interface ISideMenuProps {
  openMenu: boolean
  setOpenMenu: (arg: boolean) => void
}

const linkVariant = {
  start: { opacity: 0, x: -10 },
  open: { opacity: 1, x: 0 }
}
const navVariant = {
  start: { x: -100, opacity: 0 },
  open: { x: 0, opacity: 1 }
}

function SideMenu(props: ISideMenuProps): JSX.Element {
  const router = useRouter()
  const handleCloseMenu = React.useCallback((): void => {
    props.setOpenMenu(false)
  }, [])

  const handleJoinNow = (): void => {
    router.push('/join')
  }

  const handleLogin = (): void => {
    router.push('/login')
  }

  return (
    <AnimatePresence>
      {props.openMenu && (
        <motion.nav
          className="lg:hidden fixed flex flex-row left-0 top-0 z-30 h-full w-full text-lg text-headline tracking-wider font-heading"
          variants={navVariant}
          initial={'start'}
          animate={'open'}
          transition={{
            staggerChildren: 0.1,
            duration: 0.5,
            when: 'afterChildren'
          }}
          exit={{
            x: -100,
            opacity: 0,
            transition: { delay: 1, when: 'afterChildren' }
          }}
        >
          <motion.section
            className="relative flex flex-col justify-between w-[70%] h-full bg-background border px-6 py-20"
            animate={{ transition: { staggerChildren: 0.1 }, opacity: 1 }}
            initial={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <ButtonIcon
                onClick={handleCloseMenu}
                className="absolute top-4 right-4 justify-end w-fit "
              >
                <RxCross2 />
              </ButtonIcon>
            </motion.div>
            <motion.div
              className="w-full flex flex-row justify-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ delay: 0.8 }}
            >
              <Link
                className="md:text-2xl text-xl text-button font-logo font-[700] tracking-wider"
                href="/"
              >
                CINEFLEX
              </Link>
            </motion.div>
            <motion.div
              className="flex flex-col space-y-2 justify-center items-center"
              variants={linkVariant}
              initial={'start'}
              animate={'open'}
            >
              <motion.div
                variants={linkVariant}
                initial={'start'}
                animate={'open'}
                exit={'start'}
                transition={{ delay: 0.1 }}
              >
                <Link href="/" className="font-heading">
                  Home
                </Link>
              </motion.div>
              <motion.div
                variants={linkVariant}
                initial={'start'}
                animate={'open'}
                exit={'start'}
                transition={{ delay: 0.2 }}
              >
                <Link href="/movies">Movies</Link>
              </motion.div>
              <motion.div
                variants={linkVariant}
                initial={'start'}
                animate={'open'}
                exit={'start'}
                transition={{ delay: 0.3 }}
              >
                <Link href="/">Series</Link>
              </motion.div>
              <motion.div
                variants={linkVariant}
                initial={'start'}
                animate={'open'}
                exit={'start'}
                transition={{ delay: 0.4 }}
              >
                <Link href="/">Cinema</Link>
              </motion.div>
              <motion.div
                variants={linkVariant}
                initial={'start'}
                animate={'open'}
                exit={'start'}
                transition={{ delay: 0.5 }}
              >
                <Link href="/">Upcoming</Link>
              </motion.div>
            </motion.div>
            <motion.div
              className="flex flex-col space-y-3"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.8 }}
            >
              <Button onClick={handleJoinNow}>Join Now</Button>
              <ButtonAlt onClick={handleLogin}>LOGIN</ButtonAlt>
            </motion.div>
          </motion.section>
        </motion.nav>
      )}
    </AnimatePresence>
  )
}

export default SideMenu

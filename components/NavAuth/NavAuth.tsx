import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from 'hooks'
import { UserAvatar, Button, ButtonAlt } from 'components'

const NavAuth = React.memo((): JSX.Element => {
  const router = useRouter()
  const [, user] = useAuth()

  const handleJoinNow = (): void => {
    router.push('/join')
  }

  const handleLogin = (): void => {
    router.push('/login')
  }

  if (user === null) {
    return (
      <div className="md:flex hidden flex-row space-x-3">
        <Button onClick={handleJoinNow}>Join Now</Button>
        <ButtonAlt onClick={handleLogin}>LOGIN</ButtonAlt>
      </div>
    )
  }

  return (
    <Link className="md:block hidden" href="/user">
      <UserAvatar user={user} />
    </Link>
  )
})

NavAuth.displayName = 'NavAuth'

export default NavAuth

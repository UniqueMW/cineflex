import React from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from 'hooks'
import { Button, ButtonAlt, UserAvatar } from 'components'

const SideMenuAuth = React.memo((): JSX.Element => {
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
      <div className="flex flex-col space-y-3">
        <Button onClick={handleJoinNow}>Join Now</Button>
        <ButtonAlt onClick={handleLogin}>LOGIN</ButtonAlt>
      </div>
    )
  }
  return (
    <Link
      className="flex flex-row shadow-sm gap-x-2 p-2 items-center justify-center w-fit"
      href="/user"
    >
      <UserAvatar user={user} />
      <h2 className="text-headline tracking-wider font-heading">
        {user.email}
      </h2>
    </Link>
  )
})

SideMenuAuth.displayName = 'SideMenuAuth'

export default SideMenuAuth

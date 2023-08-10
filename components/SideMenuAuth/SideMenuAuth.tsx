import React from 'react'
import { useAuth } from 'hooks'
import { Button, ButtonAlt, UserAvatar } from 'components'
import { useRouter } from 'next/navigation'

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
    <section className="flex flex-row shadow-sm gap-x-2 p-2 items-center justify-center w-fit">
      <UserAvatar user={user} />
      <h2 className="text-headline tracking-wider font-heading">
        {user.email}
      </h2>
    </section>
  )
})

SideMenuAuth.displayName = 'SideMenuAuth'

export default SideMenuAuth

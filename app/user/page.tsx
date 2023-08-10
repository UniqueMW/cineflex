'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { signOut } from 'firebase/auth'
import { auth } from 'firebase.config'
import { FiLogOut } from 'react-icons/fi'
import { Footer, Button, ButtonAlt } from 'components'
import { useAuth } from 'hooks'

function UserPage(): JSX.Element {
  const router = useRouter()
  const [, user] = useAuth()

  const handleJoinNow = (): void => {
    router.push('/join')
  }

  const handleLogin = (): void => {
    router.push('/login')
  }

  const handleLogOut = (): void => {
    signOut(auth)
      .then(() => {
        router.push('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  if (user === null) {
    return (
      <main className="min-h-screen flex flex-col items-center justify-center space-y-3">
        <h1 className="text-lg text-secondary font-semibold font-paragraph tracking-wider">
          Login or Create an account first.
        </h1>
        <div className="flex  flex-row space-x-3">
          <Button onClick={handleJoinNow}>Join Now</Button>
          <ButtonAlt onClick={handleLogin}>LOGIN</ButtonAlt>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <section className="lg:px-10 px-2 flex md:flex-row flex-col w-full min-h-screen justify-center items-center space-x-6">
        <Image
          src={user.photoURL !== null ? user.photoURL : '/account.png'}
          alt="Profile Image"
          width={200}
          height={200}
        />
        <div className="flex flex-col items-center md:items-start text-headline font-heading tracking-wider space-y-2">
          <h3>User ID: {user.uid}</h3>
          <h3>User Email: {user.email}</h3>
          <Button className="bg-secondary" onClick={handleLogOut}>
            <div className="flex flex-row gap-x-2 items-center">
              <h3> Logout</h3>
              <FiLogOut />
            </div>
          </Button>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default UserPage

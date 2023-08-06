'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import GoogleButton from 'react-google-button'
import {
  GoogleAuthProvider,
  browserLocalPersistence,
  browserSessionPersistence,
  sendSignInLinkToEmail,
  setPersistence,
  signInWithPopup
} from 'firebase/auth'
import { auth } from 'firebase.config'

interface IAuthFormProps {
  title: string
}

const actionCodeSettings = {
  url: 'https://cineflex.netlify.app/',
  handleCodeInApp: true
}

function AuthForm(props: IAuthFormProps): JSX.Element {
  const formRef = React.useRef<HTMLFormElement>(null)
  const router = useRouter()
  const [isEmailSent, setIsEmailSent] = React.useState(false)
  const handleGoogleAuth = (): void => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then(() => {
        console.log('user signed in with google')
        router.push('/')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  const handleRememberMe = (
    event: React.MouseEvent<HTMLInputElement>
  ): void => {
    const target = event.target as HTMLInputElement
    const isChecked = target.checked

    if (!isChecked) {
      setPersistence(auth, browserSessionPersistence)
        .then(() => {
          console.log("don't remember")
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      setPersistence(auth, browserLocalPersistence)
        .then(() => {
          console.log('remember')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  const handleSignIn = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    if (formRef.current !== null) {
      const email = formRef.current.email.value

      sendSignInLinkToEmail(auth, email, actionCodeSettings)
        .then(() => {
          setIsEmailSent(true)
          localStorage.setItem('userEmail', email)
          router.push('/')
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  return (
    <section className="w-full flex flex-col justify-center items-center lg:mt-10 mt-4">
      <form
        className="text-headline font-heading tracking-wider space-y-2 text-lg"
        ref={formRef}
      >
        <h1 className="text-xl font-semibold">{props.title}</h1>
        <div className="flex flex-col">
          <label htmlFor="emailLink">Email</label>
          <input
            type="email"
            id="emailLink"
            className="bg-transparent border-b border-b-headline outline-none"
          />
          {isEmailSent ? (
            <p className="text-sm text-action tracking-wide text-left">
              Click the link sent to your Email to continue.If you have not
              received any Email try signing in or up again.
            </p>
          ) : null}
        </div>
        <div>
          <input type="checkbox" onClick={handleRememberMe} />
          <label htmlFor="remember" className="ml-2 text-sm">
            Remember Me
          </label>
        </div>
        <button
          className="lg:px-6 px-3 py-2 bg-button"
          type="submit"
          onClick={handleSignIn}
        >
          {props.title}
        </button>
        <GoogleButton onClick={handleGoogleAuth} />
      </form>
    </section>
  )
}

export default AuthForm

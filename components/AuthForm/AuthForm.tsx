'use client'
import React from 'react'
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
  const formRef = React.useRef(null)
  const [persistUser, setPersistUser] = React.useState(false)
  const [isEmailSent, setIsEmailSent] = React.useState(false)
  const handleGoogleAuth = (): void => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then(() => {
        console.log('user signed in with google')
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
    setPersistUser(isChecked)
  }

  const handleSignIn = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    if (formRef.current === null) {
      throw new Error('No form')
    }
    const email = formRef.current.email.value

    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        setIsEmailSent(true)
        localStorage.setItem('userEmail', email)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  React.useEffect(() => {
    if (!persistUser) {
      setPersistence(auth, browserSessionPersistence)
        .then(() => {
          console.log('dont remember')
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
  }, [persistUser])

  return (
    <form
      className="text-headline font-heading tracking-wider space-y-2 text-lg"
      ref={formRef}
    >
      <h1>{props.title}</h1>
      <div>
        <label htmlFor="emailLink">Email</label>
        <input type="email" id="emailLink" />
        {isEmailSent ? (
          <p className="text-sm text-action tracking-wide text-left">
            Click the link sent to your Email to continue.If you have not
            received any Email try signing in or up again.
          </p>
        ) : null}
      </div>
      <div>
        <label htmlFor="remember">Remember Me</label>
        <input type="checkbox" onClick={handleRememberMe} />
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
  )
}

export default AuthForm

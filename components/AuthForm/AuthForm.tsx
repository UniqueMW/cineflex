import React from 'react'
import GoogleButton from 'react-google-button'

interface IAuthFormProps {
  title: string
}

function AuthForm(props: IAuthFormProps): JSX.Element {
  return (
    <form className="text-headline font-heading tracking-wider space-y-2 text-lg">
      <h1>{props.title}</h1>
      <div>
        <label htmlFor="emailLink">Email</label>
        <input type="email" id="emailLink" />
      </div>
      <div>
        <label htmlFor="remember">Remember Me</label>
        <input type="checkbox" />
      </div>
      <button className="lg:px-6 px-3 py-2 bg-button" type="submit">
        {props.title}
      </button>
      <GoogleButton />
    </form>
  )
}

export default AuthForm

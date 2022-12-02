'use client'

import { useSession, signIn, signOut } from 'next-auth/react'

const LoginButton = () => {
  const { data: session } = useSession()
  if (session) {
    return (
      <button
        className='text-sm font-medium tracking-wider uppercase text-stone-500'
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    )
  }

  return (
    <button
      className='text-sm font-medium tracking-wider uppercase text-stone-500'
      onClick={() => signIn()}
    >
      Sign In
    </button>
  )
}

export default LoginButton

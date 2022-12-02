'use client'

import Link from 'next/link'
import { signIn } from 'next-auth/react'

const Header = () => {
  return (
    <header className='bg-stone-100 py-12'>
      <nav className='center flex justify-center gap-12 text-sm font-medium tracking-wider uppercase text-stone-500'>
        <ul className='ml-auto flex justify-center gap-8'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/users'>Users</Link>
          </li>
        </ul>
        <ul className='ml-auto'>
          <li>
            <button onClick={() => signIn()}>Sign In</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

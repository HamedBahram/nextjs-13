import Link from 'next/link'

const Header = () => {
  return (
    <header className='bg-stone-100 py-12'>
      <nav className='center'>
        <ul className='flex justify-center gap-8'>
          <li>
            <Link
              className='text-sm font-medium uppercase text-stone-500'
              href='/'
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className='text-sm font-medium uppercase text-stone-500'
              href='/users'
            >
              Users
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

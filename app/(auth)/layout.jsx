import '../(site)/globals.css'

import Link from 'next/link'
import Provider from '../(site)/provider'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'

export default function AuthLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <Provider>
          <main className='flex min-h-full overflow-hidden pt-16 sm:py-28'>
            <div className='mx-auto flex w-full max-w-2xl flex-col px-4 sm:px-6'>
              <Link
                href='/'
                className='flex items-center gap-2 text-stone-500 hover:text-stone-800 transition-colors'
              >
                <ChevronLeftIcon className='w-5' />
                <span className='uppercase font-medium'>Home</span>
              </Link>
              <div className='relative mt-12 sm:mt-16'>
                <h1 className='text-center text-2xl font-medium tracking-tight text-gray-900'>
                  Sign in to your account
                </h1>
              </div>
              <div className='-mx-4 mt-10 flex-auto bg-white py-10 px-4 shadow-2xl shadow-gray-900/10 sm:mx-0 sm:flex-none sm:rounded-5xl sm:p-24'>
                {children}
              </div>
            </div>
          </main>
        </Provider>
      </body>
    </html>
  )
}

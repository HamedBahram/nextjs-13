import './globals.css'
import Footer from './footer'
import Header from './header'
import Provider from './provider'

import { Nunito_Sans } from 'next/font/google'

// Fonts
const nunito = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-nunito'
})

export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      className={`${nunito.className} h-full scroll-smooth antialiased`}
    >
      <head />
      <body className='flex h-full flex-col'>
        <Provider>
          <Header />
          <main className='grow'>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}

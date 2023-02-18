import './globals.css'
import Footer from './footer'
import Header from './header'
import Provider from './provider'

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='h-full scroll-smooth antialiased'>
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

import './globals.css'
import Footer from './footer'
import Header from './header'
import Provider from './provider'

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <Provider>
          <Header />
          <main>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  )
}

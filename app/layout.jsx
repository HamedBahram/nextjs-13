import './globals.css'
import Footer from './footer'
import Header from './header'

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}

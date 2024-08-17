import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700', '900'] })

export const metadata = {
  title: 'Hot Fries',
  description: 'Welcome to our Hotel',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {/* remove border (word) later  */}

        <main className="max-w-4xl mx-auto border  p-4">


          {children}
        </main>

      </body>
    </html>
  )
}
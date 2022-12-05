import '../styles/globals.css'
import '../styles/custom.css'
import { League_Spartan } from '@next/font/google'

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-league-spartan"
})


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={leagueSpartan.variable}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}

'use client'

import { useEffect } from 'react' // Import useEffect
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import ScrollToTop from '@/components/ScrollToTop'
import { Inter, Anton } from 'next/font/google' // Import both fonts
import '../globals.css'
import { GoogleAnalytics } from 'nextjs-google-analytics'

const inter = Inter({ subsets: ['latin'] })
const anton = Anton({ weight: '400', subsets: ['latin'] }) // Configure Anton with weight

import ToasterContext from '../context/ToastContext'
import { ApolloProvider } from '@apollo/client'
import client from '../../apollo-client'
import Script from 'next/script'
import '../globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // useEffect(() => {
  //   window.scrollTo(0, 0) // Scroll to top on load
  // }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      {/* Google Translate */}

      <head>
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <GoogleAnalytics strategy="lazyOnload" />
      </head>
      <body className={`overflow-x-hidden !top-0 dark:bg-black ${inter.className} `}>
        <ApolloProvider client={client}>
          {/* <ThemeProvider enableSystem={false} attribute="class" defaultTheme="light"> */}
          <Header />
          <ToasterContext />
          {children}
          <Footer />
          <ScrollToTop />
          {/* </ThemeProvider> */}
        </ApolloProvider>
      </body>
    </html>
  )
}

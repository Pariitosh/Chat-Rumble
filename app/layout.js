import './globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import '@mantine/core/styles.css';
import NextTopLoader from 'nextjs-toploader';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
const inter = Inter({ subsets: ['latin'] })
import { Analytics } from '@vercel/analytics/react';
export const metadata = {
  title: 'Chat Rumble',
  description: '',
}

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      
    <head>
        <ColorSchemeScript />
        <link rel='icon' type='image/png' href='/logo.png'></link>
        
    </head>
      <body className={inter.className}>
        <MantineProvider> 
        <NextTopLoader
          color='#ededed'
          showSpinner={false}
          height={3}
        />
          {children}
        </MantineProvider>
        <Analytics/>
      </body>
    </html>
    </ClerkProvider>
  )
}

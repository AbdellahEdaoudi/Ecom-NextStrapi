'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './Pages/Header'
import Footer from './Pages/Footer'
import { ClerkProvider } from '@clerk/nextjs'
import { CartContext } from './context/CartContx'
import { useState } from 'react'
const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({ children }) {
  const [cart,setCart]=useState([])
  return (
    <ClerkProvider>
      <CartContext.Provider value={{cart,setCart}}>
        <html lang="en">
          <body className={inter.className}>
            <Header />
            {children}
            <Footer />
          </body>
        </html>
      </CartContext.Provider>
    </ClerkProvider>

  )
}

import { ReactNode } from 'react'
import { Metadata } from 'next'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Neuron Interface Project',
  description: 'Reliable, Cost Effective In Vitro Neural Stimulation',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
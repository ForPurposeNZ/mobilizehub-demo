import { Toaster } from '@/components/ui/sonner'
import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './styles.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'For Purpose',
  description:
    'For Purpose is a platform that connects individuals with non-profit organizations, allowing them to discover and support causes they care about. Our mission is to empower people to make a positive impact in their communities and around the world by providing a seamless way to find and contribute to meaningful initiatives.',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className="min-h-screen antialiased" suppressHydrationWarning>
      <body
        className={`${inter.className} text-foreground relative flex min-h-screen w-full flex-col font-sans antialiased`}
      >
        {children}
        <Toaster richColors position="top-center" theme="light" />
      </body>
    </html>
  )
}

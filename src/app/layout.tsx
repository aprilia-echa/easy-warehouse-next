import type { Metadata } from 'next'
import { Lora } from 'next/font/google'
import './globals.css'

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora'
})

export const metadata: Metadata = {
  title: 'Easy Warehouse',
  description: 'Warehouse Management System berbasis QR & RFID',
  icons: {
    icon: '/logo.ico'
  }
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={lora.variable}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}

import type { Metadata, Viewport } from 'next'
import { Poppins, Space_Grotesk } from 'next/font/google'

import './globals.css'

const _poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})
// const _spaceGrotesk = Space_Grotesk({
//   subsets: ['latin'],
//   variable: '--font-space-grotesk',
// })

export const metadata: Metadata = {
  title: 'Malaysian Business Machines | Enterprise Technology Solutions',
  description:
    'Malaysian Business Machines delivers purpose-built, next-gen technology solutions across industries. AI-powered digital transformation, data analytics, and enterprise solutions.',
}

export const viewport: Viewport = {
  themeColor: '#1a2744',
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${_poppins.variable} `}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}

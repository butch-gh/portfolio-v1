import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Botchki Pielago — Senior Fullstack Developer',
  description: 'Senior Fullstack Developer (.NET, React/TypeScript, Microservices) — 18+ years building enterprise-grade systems.',
  icons: { icon: '/favicon.ico' }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  )
}

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Menu from '@/app/components/Menu';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LoandGameStore',
  description: 'Tienda online para prestar juegos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <main className="flex flex-wrap">
            <Menu />
            <section className="w-full bg-gray-800 pl-0 lg:pl-64 min-h-screen">
                <div className="p-6 bg-gray-800 mb-20">
                    { children }
                </div>
            </section>
        </main>
      </body>
    </html>
  )
}

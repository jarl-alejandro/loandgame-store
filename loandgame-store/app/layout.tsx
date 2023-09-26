import React from "react"
import layoutStyle from './layout.module.css'

interface Prop {
    children: React.ReactNode
}

export default function RootLayout({ children, }: Prop) {
    return (
      <html lang="es">
        <body>
          <main className={layoutStyle.container}>
            <h1 className={layoutStyle.title}>Welcome to <a href="https://nextjs.org">Next.js with MongoDB!</a></h1>
            <div className={layoutStyle.container}>
              { children }
            </div>
          </main>
        </body>
      </html>
    )
  }
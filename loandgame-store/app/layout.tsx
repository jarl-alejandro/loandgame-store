import React from "react";
import layoutStyle from './layout.module.css';
import type { Metadata } from 'next';
import { Roboto_Condensed } from 'next/font/google';

import './globals.css';

interface Prop {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Loandgame store',
  description: 'Crea tiendas para alquilar tus juegos',
}

const roboto = Roboto_Condensed({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'optional',
});

export default function RootLayout({ children, }: Prop) {
    return (
      <html lang="es" className={roboto.className}>
        <body>
          <main className={layoutStyle.container}>
            <h1 className="text-3xl font-bold">Loandgame store</h1>
            <div className={layoutStyle.container}>
              { children }
            </div>
          </main>
        </body>
      </html>
    )
  }
import React from "react";
import layoutStyle from './layout.module.css';
import type { Metadata } from 'next';
import { Roboto_Condensed } from 'next/font/google';

import '../styles/globals.css';
import Link from 'next/link'
import MobileHeader from './page'





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
            <main className="w-full flex-grow p-6">{ children }</main>
        </body>
      </html>
    )
  }
import React from "react";
//import layoutStyle from './layout.module.css';
import '../../styles/globals.css';
import type { Metadata } from 'next';
import { Roboto_Condensed } from 'next/font/google';

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
            <section className="bg-gray-100 font-family-karla flex">
                <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
                    <div className="p-6">
                        <Link href="/" 
                          className="text-white text-5x font-semibold uppercase hover:text-gray-300">
                          Loandgame store
                        </Link>
                        <button className="w-full bg-white cta-btn font-semibold py-2 mt-5 rounded-br-lg rounded-bl-lg rounded-tr-lg shadow-lg hover:shadow-xl hover:bg-gray-300 flex items-center justify-center">
                            <i className="fas fa-plus mr-3"></i>
                            <Link href="/store/dashboard">
                              Mi tienda
                            </Link>
                        </button>
                    </div>
                    <nav className="text-white text-base font-semibold pt-3">
                       
                        <Link href="/store/game" 
                            className="flex items-center active-nav-link text-white py-4 pl-6 nav-item">
                            <i className="fas fa-tachometer-alt mr-3"></i>
                            Juegos
                        </Link>

                        <Link href="/store/customer"  
                            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                            <i className="fas fa-sticky-note mr-3"></i>
                            Cliente
                        </Link>

                        <Link href="/store/loan" 
                            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                            <i className="fas fa-table mr-3"></i>
                            Préstamo
                        </Link>

                        <Link href="/store/study" 
                            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                            <i className="fas fa-align-left mr-3"></i>
                            Estudio
                        </Link>

                        <Link href="/store/collaborator" 
                            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                            <i className="fas fa-tablet-alt mr-3"></i>
                            Colaboradores
                        </Link>

                        <Link href="/store/category" 
                            className="flex items-center text-white opacity-75 hover:opacity-100 py-4 pl-6 nav-item">
                            <i className="fas fa-calendar mr-3"></i>
                            Categoria
                        </Link>
                    </nav>

                        <Link href="/" 
                            className="absolute w-full upgrade-btn bottom-0 active-nav-link text-white flex items-center justify-center py-4">
                            <i className="fas fa-arrow-circle-up mr-3"></i>
                            Cerrar sesion
                        </Link>
                </aside>
    
                <div className='relative w-full flex flex-col h-screen overflow-y-hidden'>
                    <MobileHeader/>
                </div>
    
                <div className="w-full overflow-x-hidden border-t flex flex-col">
                    <main className="w-full flex-grow p-6">{ children }</main>
                </div>
            </section>
        </body>
      </html>
    )
  }
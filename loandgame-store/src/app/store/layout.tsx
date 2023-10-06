import React from "react";
import '../../styles/globals.css';
import SideNavbar from "../../components/SideNavbar";
import type { Metadata } from 'next';
import { Roboto_Condensed } from 'next/font/google';


interface Prop {
  children: React.ReactNode
}


export default function RootLayout({ children, }: Prop) {
    return (
      <html lang="es">
        <body>
            <section className="bg-gray-100 font-family-karla flex">
                <aside className="relative bg-sidebar h-screen w-64 hidden sm:block shadow-xl">
                    <SideNavbar />
                </aside>
                <div className="w-full overflow-x-hidden border-t flex flex-col">
                    <main className="w-full flex-grow p-6">{ children }</main>
                </div>
            </section>
        </body>
      </html>
    )
  }

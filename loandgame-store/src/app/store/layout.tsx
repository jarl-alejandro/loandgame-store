import React from "react";
import '../../styles/globals.css';
import SideNavbar from "../../components/SideNavbar";

import Link from 'next/link'



interface Prop {
  children: React.ReactNode
}


export default function RootLayout({ children, }: Prop) {

    return (
        <section className="bg-gray-100 font-family-karla grid-layout">
            <SideNavbar />

            <div className='relative w-full flex flex-col h-screen overflow-y-hidden'>
                <main className="w-full flex-grow">{ children }</main>
            </div>

        </section>
    )
  }

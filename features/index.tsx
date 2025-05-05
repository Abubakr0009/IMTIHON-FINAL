import Footer from '@/modules/Footer'
import Header from '@/modules/Header'
import React, { ReactNode } from 'react'

export function Layout({ children }: { children: ReactNode }) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}


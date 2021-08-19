import React from 'react'
import Link from 'next/link'

const MainMenu = () => (
    <div className="s-grid-1 lg-cols-3 s-cross-center s-main-end header-links">
        <nav className="main-menu">
            <ul>
                <li> <Link href="/">Inicio</Link> </li>
                <li> <Link href="/about">Acerca de</Link> </li>
                <li> <Link href="/contact">Contactanos</Link> </li>
            </ul>
        </nav>
    </div>
)

export default MainMenu
import React from 'react'
import Link from 'next/link'

const MainMenu = () => (
    <nav>
        <ul>
            <li> <Link href="/">Inicio</Link> </li>
            <li> <Link href="/about">Acerca de</Link> </li>
            <li> <Link href="/contact">Contactanos</Link> </li>
        </ul>
    </nav>
)

export default MainMenu
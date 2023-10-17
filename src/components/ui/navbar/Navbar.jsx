import React, { useContext } from 'react'
import { StyledNavbar } from './Navbar.styled'
import Image from 'next/image'
import oasisLight from '../../../../public/assets/logo/oasis-light.png'
import { navBarLeftButtons, navBarRightButtons } from '@/config/navbarConfig'
import Link from 'next/link'
import { navMenuState } from '@/state/navMenuState/navMenuContext'
import Burger from '@animated-burgers/burger-squeeze'
import '@animated-burgers/burger-squeeze/dist/styles.css'

export const Navbar = () => {
    const { isOpen, handleToggle } = useContext(navMenuState)
    return (
        <StyledNavbar>
            <section className='navbar-left'>
                <div className='nav-logo'><Image src={oasisLight} alt='Logo' /></div>
                {navBarLeftButtons.map((i) => {
                    return (
                        <Link href={i.route} key={i.label}>
                            <button type='button'>{i.label}</button>
                        </Link>
                    )
                })}
            </section>
            <section className='navbar-right'>
                {navBarRightButtons.map((i) => {
                    return (
                        <Link href={i.route} key={i.label}>
                            <button type='button'>{i.label}</button>
                        </Link>
                    )
                })}
                <button type="button" className='burger-button' onClick={handleToggle}>
                    <Burger isOpen={isOpen} />
                </button>
            </section>
        </StyledNavbar>

    )
}

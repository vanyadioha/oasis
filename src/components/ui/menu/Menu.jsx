import { StyledMenu } from './Menu.styled'
import { navBarLeftButtons, navBarRightButtons } from '@/config/navbarConfig'
import Link from 'next/link'
import { useContext } from 'react'
import { navMenuState } from '@/state/navMenuState/navMenuContext'
import { AnimatePresence } from 'framer-motion'

export const Menu = () => {
    const { isOpen } = useContext(navMenuState)

    return (
        <AnimatePresence>
            {isOpen && <StyledMenu
                isOpen={isOpen}
                initial={{
                    x: '100vw',
                    opacity: 0
                }}
                animate={{
                    x: 0,
                    opacity: 1
                }}
                exit={{
                    x: '100vw',
                    opacity: 0
                }}
                transition={{
                    duration: 0.3
                }}
            >
                <section className='menu-top'>
                    {navBarLeftButtons.map((i) => {
                        return (
                            <Link href={i.route} key={i.label}>
                                <button type='button'>{i.label}</button>
                            </Link>
                        )
                    })}
                </section>
                <section className='menu-bottom'>
                    {navBarRightButtons.map((i) => {
                        return (
                            <Link href={i.route} key={i.label}>
                                <button type='button' className={i.route}>{i.label}</button>
                            </Link>
                        )
                    })}
                </section>
            </StyledMenu>}
        </AnimatePresence>
    )
}

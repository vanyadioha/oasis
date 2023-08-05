import { StyledMenu } from './Menu.styled'
import { navBarLeftButtons, navBarRightButtons } from '@/config/navbarConfig'
import Link from 'next/link'

export const Menu = () => {
    return (
        <StyledMenu>
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
        </StyledMenu>
    )
}

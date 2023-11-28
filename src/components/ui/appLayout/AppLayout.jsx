import { StyledAppLayout } from './AppLayout.styled'
import { AiOutlineArrowUp as AOAU } from 'react-icons/ai'
import { useMediaQuery } from '@/hooks'

export const AppLayout = ({ children }) => {
    const isSmallDevice = useMediaQuery('only screen and (max-width: 780px)')
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <StyledAppLayout>
            <div className='inner-layout'>
                {children}
                <button type='button' id='to-top' onClick={handleScrollToTop}><AOAU size={isSmallDevice ? 25 : 35} /></button>
            </div>
        </StyledAppLayout>
    )
}

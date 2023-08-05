import { StyledAppLayout } from './AppLayout.styled'

export const AppLayout = ({ children }) => {
    return (
        <StyledAppLayout>
            <div className='inner-layout'>
                {children}
            </div>
        </StyledAppLayout>
    )
}

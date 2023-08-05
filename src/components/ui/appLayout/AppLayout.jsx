import { StyledAppLayout } from './AppLayout.styled'

export const AppLayout = ({ children }) => {
    return (
        <StyledAppLayout>
            <div>
                {children}
            </div>
        </StyledAppLayout>
    )
}

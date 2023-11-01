import { StyledError } from "./Error.styled"
import { AiOutlineInfoCircle as AOIC } from 'react-icons/ai'

export const Error = () => {
    return (
        <StyledError>
            <p>
                <span><AOIC size={35} /></span>
                <span>Check your Internet connection and try again</span>
            </p>
        </StyledError>
    )
}
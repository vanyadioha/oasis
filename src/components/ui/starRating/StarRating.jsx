import { StyledStarRatings } from "./StarRating.styled"
import { FaRegStar, FaStar } from 'react-icons/fa'

export const StarRating = ({ rating }) => {
    const full = Math.floor(rating)
    const decimal = rating % 1
    const empty = Math.floor(5 - rating)
    return (
        <StyledStarRatings dec={decimal}>
            {[...Array(full)].map((_, index) => (
                <FaStar key={index} />
            ))}
            {decimal > 0 && decimal < 1 && (
                <div className="half-star-container">
                    <FaStar style={{ color: 'grey' }} />
                    <div className="inner-star">
                        <FaStar style={{ color: 'white', position: 'relative' }} />
                    </div>
                </div>
            )}
            {[...Array(empty)].map((_, index) => (
                <FaStar key={index} style={{ color: 'grey' }} />
            ))}
        </StyledStarRatings>
    )
}

import { Skeleton } from "@/components/ui"
import { StyledHeroAside } from "./HeroAside.styled"

export const HeroAside = ({ deets }) => {
    return (
        <StyledHeroAside>
            <div className="game-details">
                <div className="developer">
                    <Skeleton w={'5rem'} h={'2.5rem'} br={'1rem'} />
                    <Skeleton w={'5rem'} h={'2.5rem'} br={'1rem'} />
                </div>
                <div className="publisher">
                    <Skeleton w={'5rem'} h={'2.5rem'} br={'1rem'} />
                    <Skeleton w={'5rem'} h={'2.5rem'} br={'1rem'} />
                </div>
                <div className="release">
                    <Skeleton w={'5rem'} h={'2.5rem'} br={'1rem'} />
                    <Skeleton w={'5rem'} h={'2.5rem'} br={'1rem'} />
                </div>
                <div className="platforms">
                    <Skeleton w={'5rem'} h={'2.5rem'} br={'1rem'} />
                    <Skeleton w={'5rem'} h={'2.5rem'} br={'1rem'} />
                </div>
            </div>
            <div className="price">
                <Skeleton w={'15rem'} h={'8rem'} />
            </div>
            <div className="checkout-container">
                <Skeleton h={'6rem'} />
                <Skeleton h={'6rem'} />
                <Skeleton h={'5rem'} />
            </div>
        </StyledHeroAside>
    )
}
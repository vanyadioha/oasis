import { Skeleton } from "@/components/ui"
import { StyledHero } from "./Hero.styled"

export const Hero = ({ deets }) => {
    return (
        <StyledHero>
            {/* Name, Developer, Publisher */}
            <div className="title-info">
                <Skeleton w={'50rem'} h={'3rem'} />
                <Skeleton w={'5rem'} h={'2rem'} br={'0.5rem'} />
            </div>
            <div className="ratings">
                <Skeleton w={'10rem'} h={'3rem'} br={'0.5rem'} />
                <Skeleton w={'3rem'} h={'2rem'} />
            </div>
            {/* Image Carousel */}
            <div className="carousel">
                <Skeleton h={'45rem'} />
            </div>
            <div className="flickity">
                <div className="flickity-container">
                    <Skeleton w={'10rem'} h={'8rem'} />
                    <Skeleton w={'10rem'} h={'8rem'} />
                    <Skeleton w={'10rem'} h={'8rem'} />
                </div>
            </div>
            <div className="game-desc">
                <Skeleton h={'15rem'} />
            </div>
        </StyledHero>
    )
}
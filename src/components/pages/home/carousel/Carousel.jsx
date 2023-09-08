import { StyledCarousel, StyledFrame } from "./Carousel.styled"
import { carouselConfig } from "@/config/carouselConfig"

export const Carousel = () => {
    return (
        <StyledCarousel>
            <section className="carousel">
                <StyledFrame wp={carouselConfig[5].bg}></StyledFrame>
            </section>
            <section className="flickity"></section>
        </StyledCarousel>
    )
}

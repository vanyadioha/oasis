'use client'
import { StyledGamePage } from "./GamePage.styled";
import { useAxiosGet } from "@/hooks";
import { Hero, HeroAside } from "./sections";

export const GamePage = ({ slug, baseUrl, apiKey }) => {
    const gameDetails = useAxiosGet(`${baseUrl}/games/${slug}?key=${apiKey}`)
    return (
        <StyledGamePage>
            <div className="brief-overview">
                <Hero deets={gameDetails} slug={slug} baseUrl={baseUrl} apiKey={apiKey} />
                <HeroAside deets={gameDetails} slug={slug} baseUrl={baseUrl} apiKey={apiKey} />
            </div>
        </StyledGamePage>
    )
}
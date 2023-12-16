'use client'
import { StyledGamePage } from "./GamePage.styled";
import { useAxiosGet } from "@/hooks";
import { DlcAndParent, Extras, Hero, HeroAside } from "./sections";

export const GamePage = ({ slug, baseUrl, apiKey }) => {
    const gameDetails = useAxiosGet(`${baseUrl}/games/${slug}?key=${apiKey}`)
    return (
        <StyledGamePage>
            <div className="brief-overview">
                <Hero deets={gameDetails} slug={slug} baseUrl={baseUrl} apiKey={apiKey} />
                <HeroAside deets={gameDetails} />
            </div>
            <div className="extra-content">
                <Extras deets={gameDetails} />
                <DlcAndParent deets={gameDetails} slug={slug} baseUrl={baseUrl} apiKey={apiKey} />
            </div>
            {/* {GAMENAEM} DLCS & BONUS CONTENT */}
            {/* {GAMENAEM} PARENT GAME */}
            {/* GAMES PART OF THE SAME SERIES AS {GAMENAEM} */}
            {/* {GAMENAEM} RATINGS: METACRITIC, RAWG, ESRB */}
            {/* {GAMENAEM} SYSTEM REQUIREMENTS */}
            {/* {GAMENAME} IS DEVLOPED BY {DEVELOPER AND PUBLISHED BY {PUBLISHER}. COPYRIGHT C-SIGN {DEVELOPER}{YEAR OF DEV}. "{GAMENAME}" IS A TRADEMARK OF {DEVELOPER}, REGISTERED IN THE IUNITD STATES AND OTHER COUNTRIES. ALL RIGHTS RESERVED  */}
            {/* PRIVACY POLICY TEXT */}

        </StyledGamePage>
    )
}
'use client'

import { StyledGamePage } from "./GamePage.styled";

export const GamePage = ({ slug, baseUrl, apiKey }) => {
    const game = slug.split('-')
    const gameName = game.join(' ').toUpperCase()
    return (
        <StyledGamePage>
            <h1>{gameName}</h1>
        </StyledGamePage>
    )
}
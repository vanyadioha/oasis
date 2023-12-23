import { StyledGameSeries } from "./GameSeries.styled"
import { useAxiosGet, useMediaQuery } from "@/hooks"
import Link from "next/link"
import Image from "next/image"

export const GameSeries = ({ deets: { data }, apiKey, baseUrl, slug }) => {
    const series = useAxiosGet(`${baseUrl}/games/${slug}/game-series?key=${apiKey}`)
    const isSmallDevice = useMediaQuery('only screen and (max-width: 780px)')
    return (
        <>
            {series.data && series.data.count > 0 &&
                <StyledGameSeries>
                    <h2>{data && `Games in the same series as ${data.name}`}</h2>
                    <div className="series-games">
                        {series.data.results.map((i, j) => (
                            <Link key={i.slug} href={`/games/${i.slug}`}>
                                <div className='series-game'>
                                    <div className="game-img-container">
                                        <Image
                                            src={i.background_image}
                                            alt={i.slug}
                                            width={1280}
                                            height={720}
                                        />
                                    </div>
                                    <h3 className={`game-name ${!isSmallDevice && 'truncate'}`}>{i.name}</h3>
                                    <p>$59.99</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </StyledGameSeries>
            }
        </>
    )
}

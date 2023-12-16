import { StyledDlcAndParent } from "./DlcAndParent.styled"
import { useAxiosGet, useMediaQuery } from "@/hooks"
import Link from "next/link"
import Image from "next/image"

export const DlcAndParent = ({ deets: { data }, apiKey, baseUrl, slug }) => {
    const additions = useAxiosGet(`${baseUrl}/games/${slug}/additions?key=${apiKey}`)
    const parents = useAxiosGet(`${baseUrl}/games/${slug}/parent-games?key=${apiKey}`)
    const isSmallDevice = useMediaQuery('only screen and (max-width: 780px)')
    return (
        <>
            {/* DLC and ADD-ONs */}
            {additions.data && additions.data.count > 0 &&
                <StyledDlcAndParent>
                    <h2>{data && `DLCs and Extra Content for ${data.name}`}</h2>
                    <div className="dlc-games">
                        {additions.data.results.map((i, j) => (
                            <Link key={i.slug} href={`/games/${i.slug}`}>
                                <div className='dlc-game'>
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
                </StyledDlcAndParent>
            }
            {/* PARENT GAMES */}
            {parents.data && parents.data.count > 0 &&
                <StyledDlcAndParent>
                    <h2>{data && `Parent Game for ${data.name}`}</h2>
                    <div className="dlc-games">
                        {parents.data.results.map((i, j) => (
                            <Link key={i.slug} href={`/games/${i.slug}`}>
                                <div className='dlc-game'>
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
                </StyledDlcAndParent>
            }
        </>
    )
}

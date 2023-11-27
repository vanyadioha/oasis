import { StyledSpotlight } from "./Spotlight.styled"
import { useAxiosGet } from '@/hooks'
import Image from 'next/image'
import { Error, Skeleton } from '@/components/ui'
import { useMediaQuery } from "@/hooks"
import { motion } from "framer-motion"


export const Spotlight = ({ baseUrl, apiKey }) => {
    const { data, loading, error } = useAxiosGet(`${baseUrl}/games?key=${apiKey}&page_size=10&publishers=sony-interactive-entertainment`)
    const isSmallDevice = useMediaQuery('only screen and (max-width: 780px)')
    return (
        <StyledSpotlight>
            <h1 className="spotlight-h1">Publisher Spotlight: Sony Interactive Ent.</h1>
            {loading && <Skeleton />}
            {data &&
                <ul className='sony-games'>
                    {data.results.map((i) => {
                        return (
                            <li className='sony-game' key={i.slug}>
                                <div className="game-img-container">
                                    {i.background_image && <Image
                                        src={i.background_image}
                                        alt={i.slug}
                                        width={1280}
                                        height={720}
                                    />}
                                </div>
                                <h3>{i.name}</h3>
                                <p>$59.99</p>
                            </li>
                        )
                    })}
                </ul>}
            {error && <Error />}
            <div className="spidey2">
                <motion.button type="button"
                    initial={{
                        backgroundColor: '#fff',
                        color: '#000'
                    }}
                    whileHover={{
                        backgroundColor: '#5f5f5f',
                        color: '#fff',
                        transition: {
                            duration: 0.2
                        }
                    }}
                >Out Now</motion.button>
            </div>
            {isSmallDevice && (
                <>
                    <p className="spidey-txt">Be Greater. Together</p>
                    <h3 className="spidey-h1">Marvel&#39;s Spider-Man 2</h3>
                    <p className="spidey-price">$69.99</p>
                </>
            )}
        </StyledSpotlight>
    )
}
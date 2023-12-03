import { StyledSpotlight } from "./Spotlight.styled"
import { useAxiosGet } from '@/hooks'
import Image from 'next/image'
import { Error, Skeleton } from '@/components/ui'
import { useMediaQuery } from "@/hooks"
import { motion } from "framer-motion"
import { AiOutlineArrowRight as AOAR } from 'react-icons/ai'
import Link from "next/link"

const variants = {
    headingVar: {
        hover: {

        }
    },
    headingSpanVar: {
        hover: { x: 10 }
    }
}

const { headingVar, headingSpanVar } = variants

export const Spotlight = ({ baseUrl, apiKey }) => {
    const { data, loading, error } = useAxiosGet(`${baseUrl}/games?key=${apiKey}&page_size=10&publishers=sony-interactive-entertainment`)
    const isSmallDevice = useMediaQuery('only screen and (max-width: 780px)')
    return (
        <StyledSpotlight>
            <Link href='/browse'>
                <motion.h1 className="spotlight-h1" variants={headingVar} whileHover='hover'>Publisher Spotlight: Sony Interactive Ent. <motion.span variants={headingSpanVar}><AOAR size={15} /></motion.span></motion.h1>
            </Link>
            {loading && <Skeleton br={'2rem'} />}
            {data &&
                <ul className='sony-games'>
                    {data.results.map((i) => {
                        return (
                            <Link key={i.slug} href={`/games/${i.slug}`}>
                                <li className='sony-game'>
                                    <div className="game-img-container">
                                        {i.background_image && <Image
                                            src={i.background_image}
                                            alt={i.slug}
                                            width={1280}
                                            height={720}
                                        />}
                                    </div>
                                    <h3 className={`game-name ${!isSmallDevice && 'truncate'}`}>{i.name}</h3>
                                    <p>$59.99</p>
                                </li>
                            </Link>
                        )
                    })}
                </ul>}
            {error && <Error />}
            <Link href='/games/marvels-spider-man-2'>
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
            </Link>
        </StyledSpotlight>
    )
}
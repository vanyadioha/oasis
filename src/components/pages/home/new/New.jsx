import { ImgFallback, StyledNew } from "./New.styled"
import { useAxiosGet } from '@/hooks'
import Image from 'next/image'
import { Error, Skeleton } from '@/components/ui'
import { AiOutlineArrowRight as AOAR } from 'react-icons/ai'
import { motion } from "framer-motion"
import Link from "next/link"
import { useMediaQuery } from "@/hooks"

const variants = {
    headingVar: {
        hover: {

        }
    },
    headingSpanVar: {
        hover: { x: 10 }
    }
}
const { headingSpanVar, headingVar } = variants

export const New = ({ baseUrl, apiKey }) => {
    const { data, loading, error } = useAxiosGet(`${baseUrl}/games?key=${apiKey}&page_size=10&ordering=released`)
    const isSmallDevice = useMediaQuery('only screen and (max-width: 780px)')

    return (
        <StyledNew>
            <Link href='/browse'>
                <motion.h1 className="new-h1" variants={headingVar} whileHover='hover'>New Releases <motion.span variants={headingSpanVar}><AOAR size={15} /></motion.span></motion.h1>
            </Link>
            {loading && <Skeleton br={'2rem'} />}
            {data &&
                <ul className='new-games'>
                    {data.results.map((i) => {
                        return (
                            <Link key={i.slug} href={`/games/${i.slug}`}>
                                <li className='new-game'>
                                    <div className="game-img-container">
                                        {i.background_image ? <Image
                                            src={i.background_image}
                                            alt={i.slug}
                                            width={1280}
                                            height={720}
                                        /> : <ImgFallback
                                            bg={i.dominant_color}>{i.name}</ImgFallback>}
                                    </div>
                                    <h3 className={`game-name ${!isSmallDevice && 'truncate'}`}>{i.name}</h3>
                                    <p>$59.99</p>
                                </li>
                            </Link>
                        )
                    })}
                </ul>}
            {error && <Error />}
        </StyledNew>
    )
}

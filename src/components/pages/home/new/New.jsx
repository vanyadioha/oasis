import { ImgFallback, StyledNew } from "./New.styled"
import { useAxiosGet } from '@/hooks'
import Image from 'next/image'
import { Error, Skeleton } from '@/components/ui'
import { AiOutlineArrowRight as AOAR } from 'react-icons/ai'
import { motion } from "framer-motion"
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
const { headingSpanVar, headingVar } = variants

export const New = ({ baseUrl, apiKey }) => {
    const { data, loading, error } = useAxiosGet(`${baseUrl}/games?key=${apiKey}&page_size=10&ordering=released`)
    return (
        <StyledNew>
            <Link href='/browse'>
                <motion.h1 className="new-h1" variants={headingVar} whileHover='hover'>New Releases <motion.span variants={headingSpanVar}><AOAR size={15} /></motion.span></motion.h1>
            </Link>
            {loading && <Skeleton />}
            {data &&
                <ul className='new-games'>
                    {data.results.map((i) => {
                        return (
                            <li className='new-game' key={i.slug}>
                                <div className="game-img-container">
                                    {i.background_image ? <Image
                                        src={i.background_image}
                                        alt={i.slug}
                                        width={1280}
                                        height={720}
                                    /> : <ImgFallback
                                        bg={i.dominant_color}>{i.name}</ImgFallback>}
                                </div>
                                <h3 className="game-name truncate">{i.name}</h3>
                                <p>$59.99</p>
                            </li>
                        )
                    })}
                </ul>}
            {error && <Error />}
        </StyledNew>
    )
}

import { Error, Skeleton } from '@/components/ui'
import { StyledPopularGames } from './PopularGames.styled'
import { useAxiosGet } from '@/hooks'
import { AiOutlineArrowRight as AOAR } from 'react-icons/ai'
import { motion } from 'framer-motion'
import Image from 'next/image'

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
export const PopularGames = ({ apiKey, baseUrl }) => {
    const { data, loading, error } = useAxiosGet(`${baseUrl}/games?key=${apiKey}&page=1&page_size=10`)
    return (
        <StyledPopularGames>
            <motion.h1 variants={headingVar} whileHover='hover'>Games that you love <motion.span variants={headingSpanVar}><AOAR size={15} /></motion.span></motion.h1>
            {loading && <Skeleton />}
            {data &&
                <ul className='popular-games'>
                    {data.results.map((i) => {
                        return (
                            <li className='popular-game' key={i.slug}>
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
        </StyledPopularGames>
    )
}

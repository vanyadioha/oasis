import { Error, Skeleton } from '@/components/ui'
import { StyledPopularGames } from './PopularGames.styled'
import { useAxiosGet } from '@/hooks'
import { AiOutlineArrowRight as AOAR } from 'react-icons/ai'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useMediaQuery } from '@/hooks'

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
    const isSmallDevice = useMediaQuery('only screen and (max-width: 780px)')

    return (
        <StyledPopularGames>
            <Link href='/browse'>
                <motion.h1 variants={headingVar} whileHover='hover'>Games that you love <motion.span variants={headingSpanVar}><AOAR size={15} /></motion.span></motion.h1>
            </Link>
            {loading && <Skeleton />}
            {data &&
                <ul className='popular-games'>
                    {data.results.map((i) => {
                        return (
                            <Link key={i.slug} href={`/games/${i.slug}`}>
                                <li className='popular-game'>
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
        </StyledPopularGames>
    )
}

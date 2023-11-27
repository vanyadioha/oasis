import { StyledGenres } from "./Genre.styled"
import { useAxiosGet } from '@/hooks'
import Image from 'next/image'
import { Error, Skeleton } from '@/components/ui'
import { AiOutlineArrowRight as AOAR } from 'react-icons/ai'
import { motion } from "framer-motion"

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

export const Genres = ({ baseUrl, apiKey }) => {
    const { data, loading, error } = useAxiosGet(`${baseUrl}/genres?key=${apiKey}&page_size=30`)
    return (
        <StyledGenres>
            <motion.h1 className="genre-h1" variants={headingVar} whileHover='hover'>Explore Games by Genre <motion.span variants={headingSpanVar}><AOAR size={15} /></motion.span></motion.h1>
            {loading && <Skeleton />}
            {data &&
                <ul className='game-genres'>
                    {data.results.map((i) => {
                        return (
                            <li className='game-genre' key={i.slug}>
                                <div className="game-img-container">
                                    {i.image_background && <Image
                                        src={i.image_background}
                                        alt={i.slug}
                                        width={1280}
                                        height={720}
                                    />}
                                    <div className="genre-txt"
                                    >
                                        <h3>{i.name}</h3>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                    <li className="browse-all">+ Browse all Games</li>
                </ul>}
            {error && <Error />}
        </StyledGenres>
    )
}

//  : <ImgFallback
//     bg={i.dominant_color}>{i.name}</ImgFallback>
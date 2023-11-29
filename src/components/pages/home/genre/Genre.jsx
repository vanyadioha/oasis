import { StyledGenres } from "./Genre.styled"
import { useAxiosGet } from '@/hooks'
import Image from 'next/image'
import { Error, Skeleton } from '@/components/ui'
import { AiOutlineArrowRight as AOAR } from 'react-icons/ai'
import { motion } from "framer-motion"
import Link from "next/link"


const variants = {
    containerVar: {},
    imgContainerVar: {
        initial: {
            scale: 1.05,
        },
        hover: {
            scale: 1,
        },
    },
    headingVar: {
        hover: {

        }
    },
    headingSpanVar: {
        hover: { x: 10 }
    }
}
const { headingSpanVar, headingVar, containerVar, imgContainerVar } = variants

export const Genres = ({ baseUrl, apiKey }) => {
    const { data, loading, error } = useAxiosGet(`${baseUrl}/genres?key=${apiKey}&page_size=30`)
    return (
        <StyledGenres>
            <Link href='/browse'>
                <motion.h1 className="genre-h1" variants={headingVar} whileHover='hover'>Explore Games by Genre <motion.span variants={headingSpanVar}><AOAR size={15} /></motion.span></motion.h1>
            </Link>
            {loading && <Skeleton />}
            {data &&
                <ul className='game-genres'>
                    {data.results.map((i) => {
                        return (
                            <Link key={i.slug} href={`/browse`}>
                                <motion.li className='game-genre' key={i.slug} variants={containerVar} initial='initial' whileHover='hover'>
                                    <motion.div className="game-img-container" variants={imgContainerVar}>
                                        {i.image_background && <Image
                                            src={i.image_background}
                                            alt={i.slug}
                                            width={1280}
                                            height={720}
                                        />}
                                        <div className="genre-txt"
                                        >
                                            <h3 className="truncate">{i.name}</h3>
                                        </div>
                                    </motion.div>
                                </motion.li>
                            </Link>
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
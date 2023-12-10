import { Skeleton, StarRating } from "@/components/ui"
import { StyledHero } from "./Hero.styled"
import { useAxiosGet, useMediaQuery } from "@/hooks"
import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import { AiOutlineCaretDown as AOCD } from "react-icons/ai"

export const Hero = ({ deets: { loading, data }, slug, baseUrl, apiKey }) => {
    const screenshots = useAxiosGet(`${baseUrl}/games/${slug}/screenshots?key=${apiKey}`)
    const [currentShot, setCurrentShot] = useState(0)
    const isMobile = useMediaQuery('only screen and (max-width: 450px)')
    const isSmallScreen = useMediaQuery('only screen and (max-width: 780px)')
    const isMediumScreen = useMediaQuery('only screen and (max-width: 1320px)')
    const imagesToDisplay = isMobile ? 3 : isSmallScreen ? 4 : isMediumScreen ? 5 : 6
    const [showFullDesc, setShowFullDesc] = useState(false)
    return (
        <StyledHero>
            <div className="title-info">
                {loading &&
                    <>
                        <Skeleton w={'50%'} h={'3rem'} />
                        {!isMobile && <Skeleton w={'5rem'} h={'2rem'} br={'0.5rem'} />}
                    </>
                }
                {data &&
                    <>
                        <h1>{data.name}</h1>
                        {!isMobile && <p>{data.parents_count == 0 ? 'Base Game' : 'Add-ons +/- Base Game'}</p>}
                    </>
                }
            </div>
            <div className="ratings">
                {loading &&
                    <>
                        <Skeleton w={'10rem'} h={'3rem'} br={'0.5rem'} />
                        <Skeleton w={'3rem'} h={'2rem'} />
                    </>
                }
                {data &&
                    <>
                        <StarRating rating={data.rating} />
                        <p>{data.rating}</p>
                    </>
                }
            </div>
            {/* Image Carousel */}
            <div className="carousel">
                {screenshots.loading &&
                    <>
                        <Skeleton h={isMobile ? '20rem' : isSmallScreen ? '30rem' : '45rem'} />
                    </>
                }
                {screenshots.data &&
                    <div className="screenshot-container">
                        <Image
                            src={screenshots.data.results[currentShot].image}
                            alt={`${slug} image${currentShot}`}
                            width={1280}
                            height={720}
                        />
                    </div>
                }
            </div>
            <div className="flickity">
                <div className="flickity-container">
                    {screenshots.loading &&
                        <>
                            <Skeleton w={'10rem'} h={'4.5rem'} />
                            <Skeleton w={'10rem'} h={'4.5rem'} />
                            <Skeleton w={'10rem'} h={'4.5rem'} />
                        </>
                    }
                    {screenshots.data &&
                        <>
                            {screenshots.data.results.map((i, j) => (j < imagesToDisplay &&
                                <div key={j} onClick={() => setCurrentShot(j)} className={`flickity-img-container ${currentShot === j && 'active-shot'}`}>
                                    <Image
                                        src={i.image}
                                        alt={`${slug} image${j}`}
                                        width={1280}
                                        height={720}
                                    />
                                </div>
                            ))}
                        </>
                    }
                </div>
            </div>
            <motion.div
                className="game-desc"
                animate={showFullDesc ? {
                    height: 'auto',
                    overflow: 'visible',
                    paddingBottom: '6rem'
                } : {
                    height: '15rem',
                    overflow: 'hidden',
                    paddingBottom: 0,
                }}
            >
                {loading &&
                    <>
                        <Skeleton h={'15rem'} />
                    </>
                }
                {data &&
                    <>
                        <p>{data.description_raw}</p>
                        <motion.div className="embargo"
                            animate={showFullDesc ? {
                                background: 'transparent'
                            } : {
                                background: 'linear-gradient(to top, var(--bg-primary), #191d20cc, #00000000)'
                            }}
                        >
                            <motion.button
                                type="button"
                                onClick={() => setShowFullDesc((i) => !i)}
                            >Show {showFullDesc ? 'Less' : 'More'} <motion.span animate={showFullDesc ? {
                                rotate: 180
                            } : {
                                rotate: 0
                            }}><AOCD /></motion.span></motion.button>
                        </motion.div>
                    </>
                }
            </motion.div>
        </StyledHero>
    )
}
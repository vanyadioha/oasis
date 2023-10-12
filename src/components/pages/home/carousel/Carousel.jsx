import { StyledCarousel, StyledFrame, StyledFlickity } from "./Carousel.styled"
import { carouselConfig } from "@/config/carouselConfig"
import { AiOutlinePlusCircle as AiOPC } from 'react-icons/ai'
import Image from "next/image"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useMediaQuery } from "@uidotdev/usehooks"

const variants = {
    frameVariants: {
        preMount: {
            x: -100,
            opacity: 0
        },
        mount: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.8,
            }
        },
        unMount: {
            x: 100,
            opacity: 0,
            transition: {
                delay: 0.1,
                duration: 0.8,
            }
        },
    },
    pixVariants: {
        preMount: {
            x: -100,
            opacity: 0
        },
        mount: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.5,
                duration: 0.8,
            }
        },
        unMount: {
            x: 100,
            opacity: 0,
            transition: {
                duration: 0.8,
            }
        },
    },
    LogoVariants: {
        preMount: {
            x: -100,
            opacity: 0
        },
        mount: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.9,
                duration: 0.8,
            }
        },
        unMount: {
            x: 100,
            opacity: 0,
            transition: {
                duration: 0.8,
            }
        },
    },
    textVariants: {
        preMount: {
            x: -100,
            opacity: 0
        },
        mount: {
            x: 0,
            opacity: 1,
            transition: {
                delay: 0.9,
                duration: 0.8,
            }
        },
        unMount: {
            x: 100,
            opacity: 0,
            transition: {
                duration: 0.8,
            }
        },
    },
}
const { frameVariants, pixVariants, LogoVariants, textVariants } = variants

export const Carousel = () => {
    const [currentFrame, setCurrentFrame] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentFrame === 5) {
                setCurrentFrame(0)
            } else {
                setCurrentFrame(prevFrame => prevFrame + 1)
            }
        }, 6000)

        return () => clearInterval(interval)
    }, [currentFrame])

    const isMediumDevice = useMediaQuery('only screen and (max-width: 1320px)')

    return (
        <StyledCarousel>
            <section className="carousel">
                <AnimatePresence mode="wait">
                    {carouselConfig.map((i, j) => {
                        return (j === currentFrame && <StyledFrame
                            wp={`./assets/carousel/wp/${i.bgTag}`}
                            of={i.objectFit}
                            key={`frame ${j}`}
                            variants={frameVariants}
                            initial='preMount'
                            animate='mount'
                            exit='unMount'
                        >
                            <div className="carousel-info">
                                <motion.div className="carousel-logo"
                                    variants={LogoVariants}
                                >
                                    <Image src={i.logo} alt={`${i.name} logo`} />
                                </motion.div>
                                <motion.p className="game-desc"
                                    variants={textVariants}
                                >
                                    {i.synopsis}
                                </motion.p>
                                <motion.p className="game-price"
                                    variants={textVariants}
                                >
                                    Starting at {i.price}
                                </motion.p>
                                <button
                                    type="button" className="cart-btn">
                                    Add to Cart
                                </button>
                                <button
                                    type="button" className="wishlist-btn"><span><AiOPC /></span> Add to Wishlist</button>
                            </div>
                            <motion.div className={`carousel-img img-${j}`}
                                variants={pixVariants}
                            >
                                <Image src={i.pix} alt={i.name} />
                            </motion.div>
                        </StyledFrame>
                        )
                    })}
                </AnimatePresence>
            </section>
            <ul className="flickity">
                {carouselConfig.map((i, j) => {
                    return (
                        <StyledFlickity
                            key={`dot ${j}`}
                            wp={`./assets/carousel/wp/${i.bgTag}`}
                            bgactive={j === currentFrame}
                            onClick={() => setCurrentFrame(j)}
                            initial={{ width: `${j === currentFrame && isMediumDevice ? '1.2rem' : isMediumDevice ? '3rem' : 'auto'}` }}
                            animate={{ width: `${j === currentFrame && isMediumDevice ? '3rem' : isMediumDevice ? '1.2rem' : 'auto'}` }}
                        >
                            <div className="flickity-logo">
                                <Image src={i.logo} alt={i.name} />
                            </div>
                            <p>{i.name}</p>
                            <AnimatePresence>
                                {j === currentFrame &&
                                    <motion.div className="flickity-range"
                                        initial={{ width: 0 }}
                                        animate={{ width: '100%' }}
                                        transition={{
                                            duration: 6,
                                            ease: "linear"
                                        }}
                                        exit={{ display: 'none' }}
                                    />}
                            </AnimatePresence>
                        </StyledFlickity>
                    )
                })}
            </ul>
        </StyledCarousel >
    )
}

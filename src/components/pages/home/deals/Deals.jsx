import Image from "next/image"
import { StyledDeals } from "./Deals.styled"
import { gameDeals } from "@/config/dealsConfig"
import { motion } from 'framer-motion'
import { useMediaQuery } from "@/hooks"

const variants = {
    containerVar: {},
    imgContainerVar: {
        initial: {
            scale: 1.05,
        },
        hover: {
            scale: 1,
        },
        small: {
            scale: 1
        }
    },
    textVar: {
        initial: {
            opacity: 0,
        },
        hover: {
            opacity: 1,
            transition: {
                delay: 0.1
            }
        },
        small: {
            opacity: 1
        },
        0: {}
    }
}

const { containerVar, imgContainerVar, textVar } = variants

export const Deals = () => {
    const isSmallDevice = useMediaQuery('only screen and (max-width: 780px)')
    return (
        <StyledDeals>
            <h1 className="deals-h1">Deals of the week</h1>
            <ul className="deals-container">
                {gameDeals.map((i, j) => {
                    return (
                        <motion.li key={i.name} className="deal-container"
                            variants={containerVar}
                            initial='initial'
                            whileHover='hover'
                        >
                            <motion.div className="deal-img-container"
                                variants={imgContainerVar}
                            >
                                <Image alt={i.name} src={i.pix} />
                            </motion.div>
                            <motion.div className="deal-txt"
                                variants={textVar}
                            >
                                <h3>{i.name}</h3>
                                <p className="deal-prices"><s>{`$${i.old}`}</s> <span>{`$${i.new}`}</span></p>
                            </motion.div>
                        </motion.li >
                    )
                })}
            </ul >
        </StyledDeals >
    )
}
import Image from "next/image"
import { StyledDeals } from "./Deals.styled"
import { gameDeals, exploreDeals, exploreCampaigns } from "@/config/dealsConfig"
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
            {/* DEALS OF THE WEEK */}
            <h1 className="deals-h1">Deals of the week</h1>
            <ul className="deals-container">
                {gameDeals.map((i, j) => {
                    return (
                        <motion.li key={j} className="deal-container"
                            variants={containerVar}
                            initial='initial'
                            whileHover='hover'
                        >
                            <motion.div className="deal-img-container"
                                variants={imgContainerVar}
                            >
                                <Image alt={i.name} src={i.pix} />
                            </motion.div>
                            {isSmallDevice ?
                                <div className="deal-txt"
                                >
                                    <h3>{i.name}</h3>
                                    <p className="deal-prices"><s>{`$${i.old}`}</s> <span>{`$${i.new}`}</span></p>
                                </div>
                                :
                                <motion.div className="deal-txt"
                                    variants={textVar}
                                >
                                    <h3>{i.name}</h3>
                                    <p className="deal-prices"><s>{`$${i.old}`}</s> <span>{`$${i.new}`}</span></p>
                                </motion.div>}
                        </motion.li >
                    )
                })}
            </ul >
            {/* EXPLORE DEALS */}
            <section className="explore-container">
                <div className="explore-txt">
                    <div>
                        <h1>EXPLORE</h1>
                        <h2>the best deals</h2>
                        <button type="button">Shop Now</button>
                    </div>
                </div>
                <div className="explore-games-container">
                    <ul className="explore-games">
                        {exploreDeals.map((i, j) => {
                            return (
                                <motion.li
                                    key={j}
                                    className="explore-game"
                                    variants={imgContainerVar}
                                    initial='initial'
                                    whileHover='hover'
                                >
                                    <Image src={i.pix} alt={i.name} />
                                </motion.li>
                            )
                        })}
                    </ul>
                </div>
            </section>
            {/* CAMPAIGNS */}
            <section className="campaign-section">
                <h1>Trending Multiplayer Campaigns</h1>
                <ul className="explore-campaigns">
                    {exploreCampaigns.map((i, j) => {
                        return (
                            <li key={j} className="explore-campaign">
                                <div className="campaign-img">
                                    <Image alt={i.campaignName} src={i.pix} />
                                </div>
                                <h1 className="campaign-h1">
                                    {`${i.campaignName} (${i.name})`}
                                </h1>
                                <p className="campaign-p">
                                    {i.txt}
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </section>
        </StyledDeals >
    )
}
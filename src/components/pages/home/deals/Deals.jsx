import Image from "next/image"
import { StyledDeals } from "./Deals.styled"
import { gameDeals, exploreDeals, exploreCampaigns } from "@/config/dealsConfig"
import { AiOutlineArrowRight as AOAR } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { useMediaQuery } from "@/hooks"
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
    },
    headingVar: {
        hover: {

        }
    },
    headingSpanVar: {
        hover: { x: 10 }
    }
}

const { containerVar, imgContainerVar, textVar, headingSpanVar, headingVar } = variants

export const Deals = () => {
    const isSmallDevice = useMediaQuery('only screen and (max-width: 780px)')
    return (
        <StyledDeals>
            {/* DEALS OF THE WEEK */}
            <Link href='/browse'>
                <motion.h1 className="deals-h1" variants={headingVar} whileHover='hover'>Deals of the week <motion.span variants={headingSpanVar}><AOAR size={15} /></motion.span></motion.h1>
            </Link>
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
                        <Link href='/browse'>
                            <motion.button type="button"
                                initial={{
                                    backgroundColor: '#fff',
                                    color: '#000'
                                }}
                                whileHover={{
                                    backgroundColor: '#5f5f5f',
                                    color: '#fff',
                                    transition: {
                                        duration: 0.2
                                    }
                                }}>Shop Now</motion.button>
                        </Link>

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
                                <h3>
                                    {`${i.campaignName} (${i.name})`}
                                </h3>
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
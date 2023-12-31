import { StyledMenuBar } from "./MenuBar.styled"
import { homeMenuBarOptions } from "@/config/homeMenuBarConfig"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { AiOutlineSearch, AiOutlineCaretRight, AiOutlineClose } from 'react-icons/ai'
import { useMediaQuery } from "@/hooks"
import Link from "next/link"

const menuVariants = {
    initial: {
        y: -20,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1
    },
}

const caretVariants = {
    initial: {
        rotate: 0
    },
    open: {
        rotate: 90,
    },
}

export const MenuBar = () => {
    const [isMenuBarOpen, setIsMenuBarOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    const [option, setOption] = useState('Discover')
    const isSmallDevice = useMediaQuery('only screen and (max-width: 780px)')

    useEffect(() => {
        if (!isSmallDevice) {
            setIsMenuBarOpen(true)
            setIsSearchOpen(true)
        } else {
            setIsMenuBarOpen(false)
            setIsSearchOpen(false)
        }
    }, [isSmallDevice])

    const handleSearchbarDisplay = () => {
        if (isSmallDevice) {
            setIsSearchOpen(i => !i)
            setIsMenuBarOpen(false)
        } else {
            setIsSearchOpen(true)
            setIsMenuBarOpen(true)
        }
    }
    const handleOptionChange = (value) => {
        setOption(value)
        if (isSmallDevice) {
            setIsMenuBarOpen(false)
        }
    }
    return (
        <StyledMenuBar>
            <div className="search-layout">
                <label htmlFor="search" className="search-icon"
                    onClick={handleSearchbarDisplay}
                >
                    {isSearchOpen && isSmallDevice ? <AiOutlineClose /> : <AiOutlineSearch />}
                </label>
                {isSearchOpen && <input type="text" className="search-bar" placeholder="Search Store" id="search" />}
            </div>
            <motion.button
                type="button"
                className="menu-drawer"
                onClick={() => setIsMenuBarOpen(i => !i)}
            >
                <span>{option}</span>
                <motion.span variants={caretVariants}
                    animate={isMenuBarOpen ? 'open' : 'initial'}
                ><AiOutlineCaretRight /></motion.span>
            </motion.button>
            <AnimatePresence>
                {isMenuBarOpen && <motion.div
                    className="menu-options"
                    variants={menuVariants}
                    initial='initial'
                    animate='animate'
                    exit='initial'
                >
                    {homeMenuBarOptions.map((i) => {
                        return (
                            <Link key={i.label}
                                href={i.label === 'Discover' ? '/' : `/${i.label.toLowerCase()}`}>
                                <div className="menu-option" onClick={() => handleOptionChange(i.label)}>{i.label}</div>
                            </Link>
                        )
                    })}
                </motion.div>}
            </AnimatePresence>
        </StyledMenuBar>
    )
}

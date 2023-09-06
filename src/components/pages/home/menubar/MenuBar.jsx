import { StyledMenuBar } from "./MenuBar.styled"
import { homeMenuBarOptions } from "@/config/homeMenuBarConfig"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { AiOutlineSearch, AiOutlineCaretRight, AiOutlineClose } from 'react-icons/ai'

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
    useEffect(() => {
        if (window.innerWidth > 780) {
            setIsMenuBarOpen(true)
            setIsSearchOpen(true)
        }
    }, [])

    const handleSearchbarDisplay = () => {
        if (window.innerWidth < 780) {
            setIsSearchOpen(i => !i)
            setIsMenuBarOpen(false)
        }
    }
    const handleOptionChange = (value) => {
        setOption(value)
        setIsMenuBarOpen(false)
    }
    return (
        <StyledMenuBar>
            <div className="search-layout">
                <label htmlFor="search" className="search-icon"
                    onClick={handleSearchbarDisplay}
                >
                    {isSearchOpen && window.innerWidth < 780 ? <AiOutlineClose /> : <AiOutlineSearch />}
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
                        return <div key={i.label} className="menu-option" onClick={() => handleOptionChange(i.label)}>{i.label}</div>
                    })}
                </motion.div>}
            </AnimatePresence>
        </StyledMenuBar>
    )
}

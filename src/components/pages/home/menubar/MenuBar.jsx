import { StyledMenuBar } from "./MenuBar.styled"
import { homeMenuBarOptions } from "@/config/homeMenuBarConfig"
import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { AiOutlineSearch, AiOutlineCaretRight, AiOutlineClose, AiOutlineCaretDown } from 'react-icons/ai'

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

const drawerVariants = {
    initial: {},
    open: {},
}

const caretVariants = {
    initial: {
        rotate: 0
    },
    open: {
        rotate: 90,
        // transition: {
        //     type: 'tween',
        //     duration: 2
        // }
    },
}

export const MenuBar = () => {
    const [isMenuBarOpen, setIsMenuBarOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)
    useEffect(() => {
        if (window.innerWidth > 780) {
            setIsMenuBarOpen(true)
        }
    }, [])

    const handleSearchbarDisplay = () => {
        setIsSearchOpen(i => !i)
        setIsMenuBarOpen(false)
    }
    return (
        <StyledMenuBar>
            <div className="search-layout">
                <label htmlFor="search" className="search-icon"
                    onClick={handleSearchbarDisplay}
                >
                    {isSearchOpen ? <AiOutlineClose /> : <AiOutlineSearch />}
                </label>
                {isSearchOpen && <input type="text" className="search-bar" placeholder="Search Store" id="search" />}
            </div>
            <motion.button
                type="button"
                className="menu-drawer"
                variants={drawerVariants}
                initial={isMenuBarOpen ? 'initial' : 'open'}
                whileTap={isMenuBarOpen ? 'open' : 'initial'}
                onClick={() => setIsMenuBarOpen(i => !i)}
            >
                <span>Discover</span>
                <motion.span variants={caretVariants}
                    initial={isMenuBarOpen ? 'initial' : 'open'}
                    whileTap={isMenuBarOpen ? 'open' : 'initial'}
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
                        return <div key={i.label} className="menu-option">{i.label}</div>
                    })}
                </motion.div>}
            </AnimatePresence>
        </StyledMenuBar>
    )
}

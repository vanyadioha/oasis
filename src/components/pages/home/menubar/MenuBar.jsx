import { StyledMenuBar } from "./MenuBar.styled"
import { homeMenuBarOptions } from "@/config/homeMenuBarConfig"
// import {AiOutlineSearch } from 'react-icons/ai'

export const MenuBar = () => {
    return (
        <StyledMenuBar>
            <div className="search-layout">
                <input type="text" className="search-bar" />
                <button type="button" className="search-icon">s</button>
            </div>
            {homeMenuBarOptions.map((i) => {
                return <div key={i.label}>{i.label}</div>
            })}
        </StyledMenuBar>
    )
}

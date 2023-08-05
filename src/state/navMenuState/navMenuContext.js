"use client";

import { createContext, useReducer } from "react";
import { navMenuReducer } from "./navMenuReducer";

const isNavMenuOpen = { isOpen: false };
export const navMenuState = createContext(isNavMenuOpen);

export const NavMenuProvider = ({ children }) => {
  const [state, dispatch] = useReducer(navMenuReducer, isNavMenuOpen);

  const handleToggle = () => {
    dispatch({
      type: "TOGGLE_STATE",
    });
  };
  return (
    <navMenuState.Provider value={{ isOpen: state.isOpen, handleToggle }}>
      {children}
    </navMenuState.Provider>
  );
};

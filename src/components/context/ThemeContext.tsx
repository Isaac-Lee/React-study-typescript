import React, { createContext } from "react";
import { theme } from "./theme";

interface ThemeContextProviderProps {
  children :React.ReactElement
}

export const ThemeContext = createContext(theme)

export const ThemeContextProvider = ({children} :ThemeContextProviderProps) => {
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
}
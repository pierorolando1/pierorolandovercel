import React,{ createContext, useState } from "react";

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {

    const [dark, setdark] = useState(false)

    return (
        <ThemeContext.Provider value={{
            dark,
            setdark
        }}>
            { children }
        </ThemeContext.Provider>
    )
}

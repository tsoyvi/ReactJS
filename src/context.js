import { createContext } from "react"


export const themes = {
    light: {
        background: '#ffffff',
        textColor: '#000000',
    },
    dark: {
        background: '#2F4F4F',
        textColor: '#ffffff',
    }

}

export const ThemeContext = createContext({ theme: themes.light, toggleTheme: () => { } })
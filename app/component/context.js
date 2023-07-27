import React, { createContext, useState } from 'react';
import Cookies from 'js-cookie';

export const LanguageContext = createContext(Cookies.get('Language'));
export const ThemeContext = createContext(Cookies.get("Theme"));
export const ColorContext = createContext(Cookies.get("Color"));
export const NotationContext = createContext(Cookies.get("Notation"));

export function AppContextProvider ({children}){
    const [Language, setLanguage] = useState(Cookies.get('Language'));
    const [Theme, setTheme] = useState(Cookies.get("Theme"));
    const [Color, setColor] = useState(Cookies.get("Color"));
    const [Notation, setNotation] = useState(Cookies.get("Notation"));

    return (
        <LanguageContext.Provider value={{ Language, setLanguage}}>
        <ThemeContext.Provider value={{Theme, setTheme}}>
        <ColorContext.Provider value={{Color, setColor}}>
        <NotationContext.Provider value={{Notation, setNotation}}>
            {children}
        </NotationContext.Provider>
        </ColorContext.Provider>
        </ThemeContext.Provider>
        </LanguageContext.Provider>
    );
}
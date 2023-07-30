import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const LanguageContext = createContext();
export const ThemeContext = createContext(Cookies.get("Theme"));
export const ColorContext = createContext();
export const NotationContext = createContext(Cookies.get("Notation"));

export function AppContextProvider ({children}){
    const [Language, setLanguage] = useState(Cookies.get('Language'));
    const [Theme, setTheme] = useState(Cookies.get("Theme"));
    const [Color, setColor] = useState(null);
    const [Notation, setNotation] = useState(Cookies.get("Notation"));

    useEffect(() => {
        const fetchColorFromCookie = async () => {
            try {
                const colorFromCookie = await Cookies.get("Color");
                setColor(colorFromCookie);
            } catch (error) {
                console.error("Error cannot fetch Color Cookies")
            }
        };

        fetchColorFromCookie();
    }, []);

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
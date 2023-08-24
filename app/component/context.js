import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const LanguageContext = createContext();
export const ThemeContext = createContext();
export const ColorContext = createContext();
export const NotationContext = createContext();

export function AppContextProvider ({children}){
    const [Language, setLanguage] = useState("English");
    const [Theme, setTheme] = useState(null);
    const [Color, setColor] = useState(null);
    const [Notation, setNotation] = useState(null);

    useEffect(() => {
        const fetchLanguageFromCookie = async () => {
            try{
                const languageFromCookie = await Cookies.get("Language");
                setLanguage(languageFromCookie);
            } catch(error){
                console.error("Error cannot fetch Language Cookie");
            }
        };
        const fetchThemeFromCookie = async () => {
            try{
                const themeFromCookie = await Cookies.get("Theme");
                setTheme(themeFromCookie);
            } catch (error){
                console.error("Error cannot fetch Theme Cookie");
            }
        };
        const fetchColorFromCookie = async () => {
            try {
                const colorFromCookie = await Cookies.get("Color");
                setColor(colorFromCookie);
            } catch (error) {
                console.error("Error cannot fetch Color Cookie");
            }
        };

        fetchLanguageFromCookie();
        fetchThemeFromCookie();
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
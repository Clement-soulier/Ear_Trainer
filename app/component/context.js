'use client'
import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const defaultNoteList = [[0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];

export const LanguageContext = createContext();
export const ThemeContext = createContext();
export const ColorContext = createContext();
export const NotationContext = createContext();
export const NoteContext = createContext();
export const LessonContext = createContext();

export function AppContextProvider ({children}){
    const [Language, setLanguage] = useState("English");
    const [Theme, setTheme] = useState(null);
    const [Color, setColor] = useState(null);
    const [Notation, setNotation] = useState("Alphabetic");
    const [Note, setNote] = useState(defaultNoteList);
    const [Lesson, setLesson] = useState({title: "", description: "", notes: [], chapter: [], lesson: [], sharp: false, exam: false})

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
        const fetchNotationFromCookie = async () => {
            try{
                const notationFromCookie = await Cookies.get("Notation");
                setNotation(notationFromCookie);
            } catch (error) {
                console.error("Error cannot fetch Notation Cookie");
            }
        };
        const fetchNoteFromCookie = async () => {
            try{
                const noteFromCookie = await Cookies.get("Note");
                setNote(JSON.parse(noteFromCookie));
            } catch(error){
                console.error("Error cannot fetch Note Cookie");
            }
        }

        fetchLanguageFromCookie();
        fetchThemeFromCookie();
        fetchColorFromCookie();
        fetchNotationFromCookie();
        fetchNoteFromCookie();
    }, []);

    return (
        <LanguageContext.Provider value={{ Language, setLanguage}}>
        <ThemeContext.Provider value={{Theme, setTheme}}>
        <ColorContext.Provider value={{Color, setColor}}>
        <NotationContext.Provider value={{Notation, setNotation}}>
        <NoteContext.Provider value={{Note, setNote}} >
        <LessonContext.Provider value={{Lesson, setLesson}} >
            {children}
        </LessonContext.Provider>
        </NoteContext.Provider>
        </NotationContext.Provider>
        </ColorContext.Provider>
        </ThemeContext.Provider>
        </LanguageContext.Provider>
    );
}
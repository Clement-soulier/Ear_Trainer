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
    const [Theme, setTheme] = useState("Light");
    const [Color, setColor] = useState("Red");
    const [Notation, setNotation] = useState("Alphabetic");
    const [Note, setNote] = useState(defaultNoteList);
    const [Lesson, setLesson] = useState({title: "", description: "", notes: [], chapter: [], lesson: [], sharp: false, exam: false})

    useEffect(() => {
        const fetchLanguageFromCookie = async () => {
            try{
                const languageFromCookie = await Cookies.get("Language");
                if(languageFromCookie == undefined){
                    Cookies.set('Language', 'English', {expires: 365});
                    setLanguage("English");
                } else{
                    setLanguage(languageFromCookie);
                }
            } catch(error){
                console.error("Cannot fetch language Cookie")
            }
        };
        const fetchThemeFromCookie = async () => {
            try{
                const themeFromCookie = await Cookies.get("Theme");
                if(themeFromCookie == undefined){
                    Cookies.set('Theme', 'Light', {expires: 365});
                    setTheme("Light");
                }
                setTheme(themeFromCookie);
            } catch (error){
                console.error("Cannot fetch Theme from Cookie");
            }
        };
        const fetchColorFromCookie = async () => {
            try {
                const colorFromCookie = await Cookies.get("Color");
                if(colorFromCookie == undefined){
                    Cookies.set('Color', 'Red', {expires: 365});
                    setColor('Red');
                }
                setColor(colorFromCookie);
            } catch (error) {
                console.error("Cannot fetch color Cookie");
            }
        };
        const fetchNotationFromCookie = async () => {
            try{
                const notationFromCookie = await Cookies.get("Notation");
                if(notationFromCookie == undefined){
                    Cookies.set('Notation', 'Alphabetic', {expires: 365});
                    setNotation('Alphabetic');
                }
                setNotation(notationFromCookie);
            } catch (error) {
                console.error("Cannot fetch notation Cookie");
            }
        };
        const fetchNoteFromCookie = async () => {
            try{
                const noteFromCookie = await Cookies.get("Note");
                if(noteFromCookie == undefined){
                    Cookies.set("Note", JSON.stringify(defaultNoteList), {expires: 365});
                    setNote(defaultNoteList);
                }
                setNote(JSON.parse(noteFromCookie));
            } catch(error){
                console.error("Cannot fetch note Cookie");
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
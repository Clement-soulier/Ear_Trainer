'use client'
import React, { useContext } from 'react';
import { optionsList } from './settings_Data';
import Image from 'next/image'
import "./component.css"
import { LanguageContext, ThemeContext, ColorContext, NotationContext } from './context';
import Cookies from 'js-cookie';


function ButtonSettings({index, defaultOption, handler}){
    const list = optionsList[index].list.map((option, i) =>(
        <option key={i} value={option}>{option}</option>
        ));
        
        return(<li key ={index} className = "settingsButtonBackground">
            <div className = "settingsButton">
                <h3 className = "settingsButtonTitle">{optionsList[index].name}</h3>
                <select className = "settingsButtonSelection" value={defaultOption} onChange={handler}>
                    {list}
                </select>
            </div>
    </li>);
}

export default function Settings({display, handleClick}){//mettre les handler regarder le proto

    const { Language, setLanguage } = useContext(LanguageContext);
    const { Theme, setTheme } = useContext(ThemeContext);
    const { Color, setColor } = useContext(ColorContext);
    const { Notation, setNotation } = useContext(NotationContext);

    const LanguageHandler = (event) => {
        const selectedValue = event.target.value;
        setLanguage(selectedValue);
        Cookies.set("Language", selectedValue);
    }

    const ThemeHandler = (event) => {
        const selectedValue = event.target.value;
        setTheme(selectedValue);
        Cookies.set("Theme", selectedValue);
    }

    const ColorHandler = (event) => {
        const selectedValue = event.target.value;
        setColor(selectedValue);
        Cookies.set("Color", selectedValue);
    }

    const NotationHandler = (event) => {
        const selectedValue = event.target.value;
        setNotation(selectedValue);
        Cookies.set("Notation", selectedValue);
    }

    if(display){
        return(
            <div className = "settingsBackground">
                <div className = "settingsWindow">
                    <h2 className = "settingsTitle">Settings</h2>
                    <ul className = "settingsButtonList">
                        <ButtonSettings index = {0} defaultOption={Language} handler={LanguageHandler}/>
                        <ButtonSettings index = {1} defaultOption={Theme} handler={ThemeHandler}/>
                        <ButtonSettings index = {2} defaultOption={Color} handler={ColorHandler}/>
                        <ButtonSettings index = {3} defaultOption={Notation} handler={NotationHandler}/>
                    </ul>
                    <Image className='cross' alt="back Cross" src={"/cross_black.png"} width={100} height={100} onClick={handleClick}/>
                </div>
            </div>
        );
    }
    else{
        return;
    }
}
import React from 'react';
import { optionsList } from './settings_Data';
import Image from 'next/image'
import "./component.css"

function ButtonSettings({index}){
    const list = optionsList[index].list.map((option, i) =>(
        <option key={i} value={option}>{option}</option>
    ));

    return(<li key ={index} className = "settingsButtonBackground">
            <div className = "settingsButton">
                <h3 className = "settingsButtonTitle">{optionsList[index].name}</h3>
                <select className = "settingsButtonSelection">
                    {list}
                </select>
            </div>
    </li>);
}

export default function Settings({display, handleClick}){//mettre les handler regarder le proto
    if(display){
        return(
            <div className = "settingsBackground">
                <div className = "settingsWindow">
                    <h2 className = "settingsTitle">Settings</h2>
                    <ul className = "settingsButtonList">
                        <ButtonSettings index ={0} />
                        <ButtonSettings index = {1}/>
                        <ButtonSettings index = {2} />
                        <ButtonSettings index = {3} />
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
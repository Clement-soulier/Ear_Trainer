'use client'

import React from 'react'
import './component.css'
import Image from 'next/image'
import Settings from './settings'
import { useState, useContext } from 'react'
import { ColorContext } from './context'

export default function TopBarHome(){
    const [display, setDisplay] = useState(false);
    const { Color } = useContext(ColorContext);

    
    return(
        <>
        <div className={`topBar ${Color}T`}>
            <h1 className = "TopBarTitle" >Ear Trainer</h1>
            <Image alt="settings" src = "/settings.png" width={65} height={65} className = "settings" onClick={() => setDisplay(!display)}/>
        </div>
        <Settings display= {display} handleClick={() => setDisplay(!display)}/>
        </>
    );
}
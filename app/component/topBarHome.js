'use client'

import React from 'react'
import './component.css'
import Image from 'next/image'

export default function TopBarHome(){

    function onClick(){
        console.log(3);
        return;
    }
    
    return(
        <div className="topBar">
            <h1 className = "TopBarTitle" >Ear Trainer</h1>
            <Image alt="settings" src = "/settings.png" width={65} height={65} className = "settings" onClick={onClick}/>
        </div>
    );
}
'use client'

import './component.css'

export default function TopBarHome(){

    function onClick(){
        console.log(3);
        return;
    }
    
    return(
        <div className="topBar">
            <h1 className = "TopBarTitle" >Ear Trainer</h1>
            <img src = "settings.png" className = "settings" onClick={onClick}/>
        </div>
    );
}
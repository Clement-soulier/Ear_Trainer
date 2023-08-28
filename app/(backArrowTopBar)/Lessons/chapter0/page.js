'use client'
import React, { useContext } from 'react';
import { LanguageContext, ThemeContext } from '../../../component/context.js';
import BackArrowLayout from "../../BackArrowTopBar.js";
import text from "/text.JSON"
import Image from 'next/image'
import "./tutorial.css"

export default function Page(){

    const { Language } = useContext(LanguageContext);
    const { Theme } = useContext(ThemeContext);

    return(
        <div className= {`BackgroundTutorial ${Theme}`}>
            <BackArrowLayout title={text[Language].chapter0_title} />
            <div className='screen'>
                    <p className='text'>{text[Language].chapter0_text1}</p>
                    <Image className='IllustrationImage' src={"/tutorial1.png"} alt='Illustration Image' width={250} height={250}/>
                    <p className='text'>{text[Language].chapter0_text2}</p>
                    <p className='text'>{text[Language].chapter0_text3}</p>
                    <Image className='IllustrationImage' src={"/tutorial2.png"} alt='Illustration Image' width={250} height={250}/>
                    <p className='text'>{text[Language].chapter0_text4}</p>
                    <Image className='IllustrationImage' src={"/tutorial3.png"} alt='Illustration Image' width={250} height={250}/>
            </div>
        </div>
    );
}
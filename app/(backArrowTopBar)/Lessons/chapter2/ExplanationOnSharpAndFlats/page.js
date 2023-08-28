'use client'
import React, { useContext } from 'react';
import { LanguageContext, ThemeContext } from '../../../../component/context.js';
import BackArrowTopBar from '../../../BackArrowTopBar.js';
import text from "/text.JSON"
import Image from 'next/image'
import "./../../chapter0/tutorial.css"

export default function Page(){

    const { Language } = useContext(LanguageContext);
    const { Theme } = useContext(ThemeContext);

    return(
        <div className= {`BackgroundChapter2Lesson0 ${Theme}`}>
            <BackArrowTopBar title={text[Language].chapter2_lesson0}/>
            <div className='screen'>
                <p className='text'>{text[Language].chapter2_lesson0_text1}</p>
                <p className='text'>{text[Language].chapter2_leeson0_text2}</p>
                <p className='text'>{text[Language].chapter2_lesson0_text3}</p>
                <Image className='IllustrationImage' src={"/sharpAndFlatsTuto.png"} alt='Illustration Image' width={100} height={100}/>
                <p className='text'>{text[Language].chapter2_lesson0_text4}</p>
            </div>
        </div>
    );
}
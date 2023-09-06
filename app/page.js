'use client'
import React, { useContext } from 'react';
import TopBarHome from "./component/topBarHome.js";
import './home.css';
import Link from 'next/link';
import Image from 'next/image'
import text from "/text.json"
import { LanguageContext, ThemeContext, ColorContext } from './component/context.js';

export default function Page() {

  const { Language } = useContext(LanguageContext);
  const { Color } = useContext(ColorContext);
  const { Theme } = useContext(ThemeContext);

  function LogoSrc(Theme){
    if(Theme == "Dark"){
      return "/logo-dark.png";
    }
    else{
      return "/logo-light.png";
    }
  }

    return (
      <>
        <div className={`Background ${Theme}`}>
          <TopBarHome />
          <div className="HomeScreen">
            <Image className="logo" src={`${LogoSrc(Theme)}`} alt="logo-light" width={250} height={250}/>
            <Link href={"/Lessons"} className={`button ${Color}`}>{text[Language].home_lesson}</Link>
            <Link href={'/About'} className={`button ${Color}`}>{text[Language].home_about}</Link>
            <Link href={"mailto:clement.soulier12@gmail.com"} className={`button ${Color}`}>{text[Language].home_contact}</Link>
          </div>
        </div>
      </>
    );
  }
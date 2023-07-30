'use client'
import React, { useContext } from 'react';
import TopBarHome from "./component/topBarHome.js";
import './home.css';
import Link from 'next/link';
import Image from 'next/image'
import { ColorContext } from './component/context.js';

export default function Page() {

  const { Color } = useContext(ColorContext);

    return (
      <>
        <TopBarHome />
        <div className="HomeScreen">
          <Image className="logo" src="/logo-light.png" alt="logo-light" width={250} height={250}/>
          <Link href={"/Lessons"} className={`button ${Color}`}>Lessons</Link>
          <Link href={'/About'} className={`button ${Color}`}>About</Link>
          <Link href={"mailto:clement.soulier12@gmail.com"} className={`button ${Color}`}>Contact</Link>
        </div>
      </>
    );
  }
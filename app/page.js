'use client'
import React from 'react';
import TopBarHome from "./component/topBarHome.js";
import './home.css';
import Link from 'next/link';
import Image from 'next/image'

export default function Page() {
    return (
      <>
        <TopBarHome />
        <div className="HomeScreen">
          <Image className="logo" src="/logo-light.png" alt="logo-light" width={250} height={250}/>
          <Link href={"/Lessons"} className="button">Lessons</Link>
          <Link href={'/About'} className="button">About</Link>
          <Link href={"mailto:clement.soulier12@gmail.com"} className="button">Contact</Link>
        </div>
      </>
    );
  }
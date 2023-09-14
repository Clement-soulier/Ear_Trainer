"use client"
import React, { useContext } from "react";
import { ThemeContext } from "../component/context";
import Image from "next/image";

export default function Page(){

    const { Theme } = useContext(ThemeContext);
    return(
        <body className={`${Theme}`}>
            <div className="HomeScreen">
                <Image src={"/shark.png"} alt="shark" width={250} height={250}/>
            </div>
        </body>
    );
}
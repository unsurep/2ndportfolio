'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";


const Footer=()=>{

    return(
        <div>
            <footer className="flex justify-between items-center px-[10rem] pb-[2rem] bg-neutral-400 py-[80px] ">
                <div className="flex flex-col gap-4">
                    <ul className="text-white">
                        <li className="">© 2024 Louis O. Umukoro</li>
                        <li className="flex gap-1 items-center"><span className="text-blue-800"><MdEmail /></span>wedevilleg@gmail.com</li>
                        <li className="flex gap-1 items-center"><span className="text-green-800"><IoLogoWhatsapp /></span>08081808904</li>
                    </ul>

                    <ul className="flex items-center gap-2 text-4xl">
                        <li className="element text-blue-950 cursor-pointer"><FaFacebookSquare /></li>
                        <li className="element text-black cursor-pointer"><FaSquareXTwitter /></li>
                        <li className="element text-blue-950 cursor-pointer"><FaLinkedin /></li>
                        <li className="element text-red-700 cursoe-pointer"><FaInstagramSquare /></li>
                        <li className="text-4xl element text-black cursor-pointer"><AiFillTikTok /></li>
                    </ul>
                </div>

                <ul className="flex items-center gap-6">
                    <li className="text-white cursor-pointer element">Home</li>
                    <li className="text-white cursor-pointer element">About</li>
                    <li className="text-white cursor-pointer element">Projects</li>
                    <li className="text-white cursor-pointer element">Experience</li>
                    <li className="text-white cursor-pointer element">Contact</li>
                </ul>

            
            </footer>
        </div>
    )



};

export default Footer;
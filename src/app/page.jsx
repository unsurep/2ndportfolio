'use client'


import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

import { FaArrowUp } from "react-icons/fa6";
import Navbar from "@/components/Navbar";
import HomeSectionOne from "@/components/HomeSection/HomeSectionOne";



const Home=()=>{

  const [isDark, setIsDark]=useState(false)

  const toggleDarkMode=()=>{
    setIsDark(!isDark)

  }

  return(
    <div>
      <section  className={isDark===true? 'black' :'light'}>
        {/* <Navbar toggleDarkMode={toggleDarkMode} isDark={isDark}/> */}
       <Navbar/>
       <HomeSectionOne/>

        {/* scroll to the top */}
        <Link href='#top'>
          <div className="w-[10px] rounded-full px-6 py-4 bg-[#3177A3] items-center justify-center ring-8 hover:ring-red-300   flex fixed right-10 bottom-5"><span className="font-bold "><FaArrowUp/></span></div>
        </Link>

      </section>
    </div>

  )



};

export default Home;
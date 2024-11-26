'use client'


import { useState, useEffect } from "react"
import Link from "next/link"
import { FaArrowUp } from "react-icons/fa6";
import Navbar from "@/components/Navbar";
import HomeSectionOne from "@/components/HomeSection/HomeSectionOne";



const Home=()=>{

  return(
    <div>
       <HomeSectionOne/>

        {/* scroll to the top */}
        <Link href='#top'>
          <div className="w-[10px] rounded-full px-6 py-4 bg-[#3177A3] items-center justify-center ring-8 hover:ring-red-300   flex fixed right-10 bottom-5"><span className="font-bold "><FaArrowUp/></span></div>
        </Link>
    </div>

  )



};

export default Home;
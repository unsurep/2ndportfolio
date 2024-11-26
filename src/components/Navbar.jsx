'use client'


import { useState, useEffect } from "react"




const Navbar=({toggleDarkMode, isDark})=>{

    const [showHome, setShowHome]=useState(true);
    const [showAbout, setShowAbout]=useState (false);
    const [showProjects, setShowProjects]=useState (false)
    const [showExperience, setShowExperience]=useState(false)
    const [showContact, setShowContact]= useState (false)

    const toggleShowHome=()=>{
        setShowHome(true)
        setShowAbout(false)
        setShowProjects(false)
        setShowExperience(false)
        setShowContact(false)
    }

    const toggleShowAbout=()=>{
        setShowHome(false)
        setShowAbout(true)
        setShowProjects(false)
        setShowExperience(false)
        setShowContact(false)
    }

    const toggleShowProjects=()=>{
        setShowHome(false)
        setShowAbout(false)
        setShowProjects(true)
        setShowExperience(false)
        setShowContact(false)
    }

    const toggleShowExperience=()=>{
        setShowHome(false)
        setShowAbout(false)
        setShowProjects(false)
        setShowExperience(true)
        setShowContact(false)
    }

    const toggleShowContact=()=>{
        setShowHome(false)
        setShowAbout(false)
        setShowProjects(false)
        setShowExperience(false)
        setShowContact(true)

    }


   

    return(
        <div className="">
            <nav className="flex items-center justify-between px-[10rem] py-6 shadow-lg shadow-blue-500 w-[100%] z-50 fixed bg-neutral-400 ">

                <div className="flex items-center gap-3">

                    <h1 className="font-bold text-xl text-white"><span className="text-blue-800">Louis</span> Umukoro</h1>

                  
                </div>

             


                <ul className="hidden md:hidden lg:flex items-center gap-10 ">
                    <li onClick={toggleShowHome} className={showHome===true ? "bg-blue-800 px-4 py-2 rounded-[12px] text-white cursor-pointer" : 'cursor-pointer px-4 py-2 text-white element'}>Home</li>
                    <li onClick={toggleShowAbout} className={showAbout===true ? "bg-blue-800 px-4 py-2 rounded-[12px] text-white cursor-pointer" : 'cursor-pointer px-4 py-2 text-white element'}>About</li>
                    <li onClick={toggleShowProjects} className={showProjects===true ? "bg-blue-800 px-4 py-2 rounded-[12px] text-white cursor-pointer" : 'cursor-pointer px-4 py-2 text-white element'}>Projects</li>
                    <li onClick={toggleShowExperience} className={showExperience===true ? "bg-blue-800 px-4 py-2 rounded-[12px] text-white cursor-pointer" : 'cursor-pointer px-4 py-2 text-white element'}>Experience</li>
                    <li onClick={toggleShowContact} className={showContact===true ? "bg-blue-800 px-4 py-2 rounded-[12px] text-white cursor-pointer" : 'cursor-pointer px-4 py-2 text-white element'}>Contact</li>
                </ul>

               
            </nav>
        </div>
    )




};

export default Navbar;
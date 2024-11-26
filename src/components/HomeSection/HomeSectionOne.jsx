'use client'


import Image from "next/image"
import pic from '../Image/pic.jpg'
import { LuDownload } from "react-icons/lu";


const HomeSectionOne=()=>{

    return(
        <div id="top">
            <section className="px-[10rem] flex py-32  ">
                {/* left div */}
                <div className="flex flex-col justify-center">
                    <p className="font-bold text-2xl">Hello, I am</p>
                    <p className="font-extrabold text-6xl py-1">Louis O. Umukoro</p>
                    <p className="font-bold text-2xl">and I am a Web Developer</p>
                    <p className="pt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Voluptatem unde, ullam sed accusantium doloremque est <br /> recusandae animi reiciendis hic.</p>

                    {/* button */}
                    <div className="mt-10">
                        <button type="submit" className="relative inline-block text-lg group mt-5 lg:mt-0 element">
                            <span className="relative z-10 block px-5 py-2.5 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-black">
                            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12  bg-[#3177A3] group-hover:-rotate-180 ease"></span>
                            <span className="relative flex gap-2 items-center">Download CV <span><LuDownload /></span></span>
                            </span>
                            <span
                            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear  bg-[#3177A3] rounded-lg group-hover:mb-0 group-hover:mr-0"
                            data-rounded="rounded-lg"
                            ></span>
                        </button>
                    </div>
                </div>





                {/* right div */}
                <div className="ml-auto h-full w-[50%] overflow-hidden pt-10  ">
                    <Image src={pic} width={0} height={0} alt="image" className="h-full w-full object-cover rounded-[40px]" />
                </div>
               
            </section>
        </div>
    )



}; 

export default HomeSectionOne;
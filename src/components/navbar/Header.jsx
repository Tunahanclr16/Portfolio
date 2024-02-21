import { useState } from "react";
import Logo from "./Logo";
import { FaBars, FaTimes } from "react-icons/fa";
import HamburgerMenu from "./HamburgerMenu";
import {motion}from "framer-motion"
import { NavLink } from "react-router-dom";
export default function Header() {
    const [nav, setNav] = useState(false);

    const openNav = () => {
        setNav(!nav);
    };


    return (
        <div className="bg-[#171023] sticky top-0 z-50 shadow-md shadow-black">
            <motion.div className="max-w-[1440px] p-2 items-center mt-8 mx-auto flex justify-between"
             initial={{ opacity: 0, y: -10 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 1 }}>
                <div><Logo/></div>
                <div className="flex items-center">
                    <ul className="sm:flex hidden items-center gap-[16px] transition-all duration-500 ease-in-out transform ">
                        <li className="text-[#CDD0D4] hover:text-[#F5F6F6] transition-all">
                        <NavLink to={'/'} >Home</NavLink>
                        </li>
                        <li className="text-[#CDD0D4] hover:text-[#F5F6F6] transition-all">
                            <NavLink to={'/about'} >About</NavLink>
                        </li>
                        <li className="text-[#CDD0D4] hover:text-[#F5F6F6] transition-all">
                            <NavLink to={'/projects'}  >Projects</NavLink>
                        </li>
                        <li className="text-[#CDD0D4] hover:text-[#F5F6F6] transition-all">
                            <NavLink to={'/contact'}  >Contact</NavLink>
                        </li>
                    </ul>
                    {nav ? (
                        <FaTimes onClick={openNav} size={20} className="text-white z-10 sm:hidden cursor-pointer"/>
                    ) : (
                        <FaBars onClick={openNav} size={20} className="text-white z-10 sm:hidden cursor-pointer"/>
                    )}                       
                </div>
            </motion.div>
            {
                nav&&(
                    <div className="bg-black/30 absolute h-screen w-full left-0 top-0 right-0 bottom-0"></div>
                )
            }
            <div className={`fixed right-0 bg-[#2C243B] w-[280px] rounded z-10 h-full transform transition-transform ease-in-out duration-300 ${nav ? "translate-x-0" : "translate-x-full"}`}>
               <div className="flex justify-end mt-4 p-2">
               <HamburgerMenu/>
               </div>
               <div className="flex mx-auto justify-center mt-2 border-b-white border-opacity-15 w-[250px] border-b-2 "> </div>  
                    <div className="mx-auto text-center mt-2">
               <Logo/>
                    </div>
            </div>
        </div>
    );
}

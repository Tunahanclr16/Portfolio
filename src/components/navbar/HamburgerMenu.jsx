import { NavLink } from "react-router-dom";

export default function HamburgerMenu() {
  return (
    <div>
         <div className="flex justify-end items-center flex-col">
                    <ul className="flex flex-col mt-4  text-xl  gap-[24px] transition-all duration-500 ease-in-out transform ">
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
                </div>

    </div>
  )
}

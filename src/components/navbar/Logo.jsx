import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={'/'}>
        <h1 className="text-white cursor-pointer z-10 text-[20px] font-light sm:text-[24px] italic">Tunahan<span className="font-bold">Çeler</span></h1>
    </Link>
  )
}

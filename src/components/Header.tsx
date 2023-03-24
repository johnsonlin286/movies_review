import Image from "next/image";

import HeaderDropdown from "./HeaderDropdown";
import HeaderSearch from "./HeaderSearch";

import Logo from "../../public/images/logo.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/5 z-[100]">
      <div className="container py-4 flex justify-between items-center">
        <Image src={Logo} alt="Moovie Time" height={31} className="mr-9"/>
        <HeaderSearch/>
        <nav>
          <ul className="flex text-primary uppercase font-semibold">
            <li className="px-3">
              <HeaderDropdown/>
            </li>
            <li>
              <button className="px-5">
                Movies
              </button>
            </li>
            <li>
              <button className="px-5">
                TV Shows
              </button>
            </li>
            <li>
              <button className="px-5">
                Login
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
};

export default Header;
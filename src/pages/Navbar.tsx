import { useState } from "react"; // import state

import logo from "../images/logo.svg";
import hamburger from "../images/hamburger.svg";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div
      id="navbar-wrap"
      className="pt-8 flex flex-wrap justify-between w-full h-18 font-press-medium text-black"
    >
      <div className="mt-2 xl:pl-20 lg:pl-16 md:pl-8 pl-12">
        <img src={logo} />
      </div>
      <div className="flex">
        <div
          id="menue1"
          className="xl:pr-20 lg:pr-16 md:pr-8 pr-12 mt-6 flex lg:gap-32 md:gap-16 gap-8 max-sm:hidden"
        >
          <div className="hover:text-button cursor-pointer">Diagnosis</div>
          <div className="hover:text-button cursor-pointer">Histories</div>
          <div className="hover:text-button cursor-pointer">Logout</div>
        </div>

        <div className="mt-2 md:pr-8 pr-12 flex justify-center sm:hidden">
          <img src={hamburger} />
        </div>
      </div>
    </div>
  );
}

import { useState } from "react"; // import state

import logo from "../images/logo.svg";
import hamburger from "../images/hamburger.svg";

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div
      id="navbar-wrap"
      className="flex flex-wrap justify-between w-full h-18 font-press-medium text-black"
    >
      <div className="md:pl-8 mt-2 pl-12">
        <img src={logo} />
      </div>
      <div className="flex">
        <div
          id="menue1"
          className="xl:pr-40 lg:pr-16 md:pr-8 pr-12 mt-6 flex gap-4 max-sm:hidden"
        >
          <div className="hover:text-button cursor-pointer">Diagnosis</div>
          <div className="hover:text-button cursor-pointer">Histories</div>
          <div className="hover:text-button cursor-pointer">Login</div>
        </div>

        <div className="mt-2 md:pr-8 pr-12 flex justify-center sm:hidden">
          <img src={hamburger} />
        </div>
      </div>
    </div>
  );
}

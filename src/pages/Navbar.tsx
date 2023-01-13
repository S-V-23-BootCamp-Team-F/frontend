import logo from "../images/logo.svg";
import hamburger from "../images/hamburger.svg";

const Navbar = () => {
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
        <div className="hidden space-x-8 lg:flex">
          <a href="#">Menu 1</a>
          <a href="#">Menu 2</a>
          <a href="#">Menu 3</a>
          <a href="#">Menu 4</a>
        </div>
        <div className="flex lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

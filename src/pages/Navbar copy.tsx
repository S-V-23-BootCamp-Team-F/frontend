import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <nav className="bg-background sm:px-4 py-2.5  flex-wrap w-full z-20 top-0 left-0 border-gray-200 dark:border-gray-600">
      <div className="container flex flex-wrap items-center justify-between">
        <div className="flex items-center">
          <img src={logo} className="h-6 ml-8 sm:h-9" />
        </div>
        <div className="flex">
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center text-sm text-gray-500 rounded-lg md:hidden"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
          </button>
        </div>
        <div
          className="items-center justify-between hidden md:flex md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 md:flex-row md:gap-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Diagnosis
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Hisories
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

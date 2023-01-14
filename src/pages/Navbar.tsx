import { useState } from "react"; // import state
import classNames from "classnames";

import logo from "../images/logo.svg";
import hamburger from "../images/hamburger.svg";
import login from "../images/login.svg";
import diagnosis from "../images/diagnosis.svg";
import history from "../images/history.svg";

export default function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);
  return (
    <div
      id="navbar-wrap"
      className="fixed z-20 flex flex-wrap justify-between w-full font-press-medium text-black max-sm:justify-end"
    >
      <div className=" pt-10 xl:px-20 lg:px-16 md:px-8 px-12 bg-logo md:w-screen w-full max-sm:pl-0 flex justify-center bg-background">
        <img src={logo} />
        <div
          id="menue1"
          className=" w-full mt-16 flex justify-end lg:gap-32 md:gap-16 gap-8 max-sm:hidden"
        >
          <div className="hover:text-button cursor-pointer">Diagnosis</div>
          <div className="hover:text-button cursor-pointer">Histories</div>
          <div className="hover:text-button cursor-pointer">Logout</div>
        </div>
      </div>
      <div className="flex max-sm:flex-col-reverse">
        <>
          {/** hamburger */}
          <div
            className={classNames(
              "sm:hidden h-screen bg-background shadow-2xl rounded-l-md border-l-2",
              {
                hidden: !menuToggle,
              }
            )}
          >
            <div className="mt-20 px-10 text-center">
              <div className="mt-8 flex justify-center">
                <img src={diagnosis} />
              </div>
              <div className="hover:text-button cursor-pointer hover:border-b-2 hover:border-button">
                Diagnosis
              </div>
              <div className="mt-8 flex justify-center">
                <img src={history} />
              </div>
              <div className="hover:text-button cursor-pointer hover:border-b-2 hover:border-button">
                Histories
              </div>
              <div className="mt-8 flex justify-center">
                <img src={login} />
              </div>
              <div className="hover:text-button cursor-pointer hover:border-b-2 hover:border-button">
                Logout
              </div>
            </div>
          </div>
          <div className="sm:hidden flex items-end h-fit bg-background justify-end">
            <button
              className=" w-fit"
              onClick={() => setMenuToggle(!menuToggle)}
            >
              {menuToggle ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </>
      </div>
    </div>
  );
}

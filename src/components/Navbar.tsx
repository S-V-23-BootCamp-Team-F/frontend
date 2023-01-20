import { useState } from "react"; // import state
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import logo from "src/images/logo.svg";
import hamburger from "src/images/hamburger.svg";
import login from "src/images/login.svg";
import diagnosis from "src/images/diagnosis.svg";
import history from "src/images/history.svg";

function Navbar() {
  const [menuToggle, setMenuToggle] = useState(false);
  const navigate = useNavigate();
  const moveToMain = () => {
    navigate("/");
  };
  const moveToHistories = () => {
    navigate("/history");
  };
  const moveToLogin = () => {
    navigate("/abnomalresult");
  };
  return (
    <div
      id="navbar-wrap"
      className="font-press-medium fixed z-20 flex w-full flex-wrap justify-between text-black max-sm:justify-end"
    >
      <div className="bg-logo flex w-full justify-center border cursor-pointer bg-background px-12 pt-4 pb-4 max-sm:pl-0 md:w-screen lg:px-16 xl:px-20">
        <img className="m-auto" src={logo} onClick={moveToMain} />
        <div
          id="menue1"
          className="m-auto flex w-full justify-end gap-8 font-eng-regular text-xl max-sm:hidden md:gap-16 lg:gap-32"
        >
          <div
            className="cursor-pointer hover:text-button"
            onClick={moveToMain}
          >
            Diagnosis
          </div>
          <div
            className="cursor-pointer hover:text-button"
            onClick={moveToHistories}
          >
            Histories
          </div>
          <div
            className="cursor-pointer hover:text-button"
            onClick={moveToLogin}
          >
            Logout
          </div>
        </div>
      </div>
      <div className="flex max-sm:flex-col-reverse">
        <>
          {/** hamburger */}
          <div
            className={classNames(
              "h-screen rounded-l-md border-l-2 bg-background shadow-2xl sm:hidden",
              {
                hidden: !menuToggle,
              }
            )}
          >
            <div className="mt-20 px-10 text-center">
              <div className="mt-8 flex justify-center">
                <img src={diagnosis} />
              </div>
              <div className="cursor-pointer hover:border-b-2 hover:border-button hover:text-button">
                Diagnosis
              </div>
              <div className="mt-8 flex justify-center">
                <img src={history} />
              </div>
              <div className="cursor-pointer hover:border-b-2 hover:border-button hover:text-button">
                Histories
              </div>
              <div className="mt-8 flex justify-center">
                <img src={login} />
              </div>
              <div className="cursor-pointer hover:border-b-2 hover:border-button hover:text-button">
                Logout
              </div>
            </div>
          </div>
          <div className="flex h-fit items-end justify-end bg-background sm:hidden">
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

export default Navbar;

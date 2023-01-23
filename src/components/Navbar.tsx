import { useState } from "react"; // import state
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

import logo from "src/images/logo.svg";
import hamburger from "src/images/hamburger.svg";
import login_hover from "src/images/login_hover.svg";
import diagnosis_hover from "src/images/diagnosis_hover.svg";
import history_hover from "src/images/history_hover.svg";

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
      className="fixed z-20 flex w-full flex-wrap justify-between font-eng-bold font-bold text-black max-sm:justify-end"
    >
      <div className="bg-logo flex w-full cursor-pointer justify-center border bg-background px-12 pt-4 pb-4 max-sm:pl-0 md:w-screen lg:px-16 xl:px-20">
        <img className="m-auto" src={logo} onClick={moveToMain} />
        <div
          id="menue1"
          className="m-auto flex w-full justify-end gap-8 font-eng-regular max-xl:text-3xl max-sm:hidden md:gap-16 lg:gap-32"
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
      <div className="fixed flex max-sm:flex-col-reverse">
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
              {/* group을 이용하여 하나로 묶은 뒤 group: 을 이용하여 동시에 작동시키려하는 작업 작성 */}
              <div className="group">
                <div className="mt-8 h-20 w-20 bg-diagnosis hover:cursor-pointer group-hover:bg-diagnosis_hover" />
                <div className="cursor-pointer group-hover:border-b-2 group-hover:border-button group-hover:text-button">
                  Diagnosis
                </div>
              </div>
              <div className="group">
                <div className="mt-8 h-20 w-20 bg-history hover:cursor-pointer group-hover:bg-history_hover" />
                <div className="cursor-pointer group-hover:border-b-2 group-hover:border-button group-hover:text-button">
                  Histories
                </div>
              </div>
              <div className="group">
                <div className="mt-8 h-20 w-20 bg-login hover:cursor-pointer group-hover:bg-login_hover" />
                <div className="cursor-pointer group-hover:border-b-2 group-hover:border-button group-hover:text-button">
                  Logout
                </div>
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
                  className="mt-5 mr-2 h-20 w-20"
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
                  className="mt-5 mr-2 h-20 w-20"
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

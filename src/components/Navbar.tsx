import { useEffect, useState } from "react"; // import state
import classNames from "classnames";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "src/images/logo.svg";
import axios from "axios";
import Hamburger from "hamburger-react";
import { getCookie, removeCookie } from "../Cookie";
import Longnav from "./Longnav";
import Hamnav from "./Hamnav";

function Navbar() {
  // 현재 로그인 여부를 판단 변수
  const [isLogin, setIsLogin] = useState<any>(
    getCookie("access")
  );

  const [menuToggle, setMenuToggle] = useState(false);
  const navigate = useNavigate();

  const moveToMain = () => {
    navigate("/");
    
  };
  const moveToLogin = () => {
    navigate("/getStart");
  };
  // 로그아웃
  const moveToLogout = () => {
    // axios
    // 쿠키 삭제하기
    // localStorage.removeItem("token");
    
    removeCookie("access", {
      path: "/",
      sameSite: "strict",
    });
    removeCookie("refresh", {
      path: "/",
      sameSite: "strict",
    });

    window.location.replace("/");
  };

  const location = useLocation();

  useEffect(() => {
    console.log(location);
    console.log(location.pathname);
  }, [ location ])

  return (
    <div
      id="navbar-wrap"
      className="fixed z-20 flex w-full flex-wrap justify-between font-eng-bold font-bold text-black max-sm:justify-end"
    >
      <div className="bg-logo flex w-full justify-center border bg-background px-12 pt-4 pb-4 max-sm:pl-0 md:w-screen lg:px-16 xl:px-20">
        <img
          className="m-auto cursor-pointer"
          src={logo}
          onClick={moveToMain}
        />
        <div
          id="menue1"
          className="m-auto flex w-full justify-end gap-8 font-eng-regular max-xl:text-3xl max-sm:hidden md:gap-16 lg:gap-32"
        >
          <Longnav location={location}/>
          {isLogin ? (
            <div
              className="cursor-pointer hover:text-button text-gray-600"
              onClick={moveToLogout}
            >
              Logout
            </div>
          ) : (
            <div
              className="cursor-pointer hover:text-button text-gray-600"
              onClick={moveToLogin}
            >
              Login
            </div>
          )}
        </div>
      </div>
      <div className="fixed flex max-sm:flex-col-reverse">
        <>
          {/** hamburger */}
          {menuToggle ? (
            <div className=" h-screen -translate-y-1 rounded-l-md border-l-2 bg-background shadow-2xl transition animate-in slide-in-from-right-40 duration-1000 ease-in-out sm:hidden">
              <div className="mt-20 flex flex-col px-10 text-center text-2xl">
                {/* group을 이용하여 하나로 묶은 뒤 group: 을 이용하여 동시에 작동시키려하는 작업 작성 */}
                <Hamnav location={location}/>
                <div className="group flex flex-col items-center justify-center pb-2 hover:pb-1">
                  {isLogin ? (
                    <div>
                      <div className="mt-16 h-20 w-20 bg-contain hover:cursor-pointer bg-login_hover" onClick={moveToLogout} />
                      <div
                        className=" mt-3 cursor-pointer group-hover:border-b-2 group-hover:border-button group-hover:text-button"
                        onClick={moveToLogout}
                      >
                        Logout
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div className="mt-16 h-20 w-20 bg-login bg-contain hover:cursor-pointer group-hover:bg-login_hover" onClick={moveToLogin} />

                      <div
                        className=" mt-3 cursor-pointer group-hover:border-b-2 group-hover:border-button group-hover:text-button"
                        onClick={moveToLogin}
                      >
                        Login
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
          <div className="flex h-fit items-end justify-end bg-background sm:hidden">
            <button
              className=" w-fit"
              onClick={() => setMenuToggle(!menuToggle)}
            >
              <Hamburger toggled={menuToggle} toggle={setMenuToggle} />
            </button>
          </div>
        </>
      </div>
    </div>
  );
}

export default Navbar;

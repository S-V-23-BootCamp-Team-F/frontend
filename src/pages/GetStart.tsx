import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import SigninPage from "../components/LogInPage";
import SignupPage from "../components/SignupPage";

const GetStart = () => {
  const [openTab, setOpenTap] = useState(1);

  return (
    <>
      <div className=" absolute h-full w-screen overflow-hidden bg-background bg-startImg bg-cover bg-center">
        {/* 본문 */}
        <div className="m-20 flex justify-center">
          <div className="h-750 w-600 rounded-xl bg-black bg-opacity-30 backdrop-blur-sm">
            {/* 로그인/회원가입 버튼 */}
            <div className="mt-7 flex justify-between">
              <a
                className="font-press-bold m-7 ml-24 cursor-pointer justify-self-start text-2xl text-white hover:border-b-2 max-xs:text-xl"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTap(1);
                }}
                href="#signin"
              >
                Sign in
              </a>
              <a
                className="font-press-bold m-7 mr-24 cursor-pointer justify-self-end text-2xl text-white hover:border-b-2 max-xs:text-xl"
                onClick={(e) => {
                  e.preventDefault();
                  setOpenTap(2);
                }}
                href="#signup"
              >
                Sign up
              </a>
            </div>
            <div
              className={openTab === 1 ? "block px-20" : "hidden px-20"}
              id="signin"
            >
              <SigninPage />
            </div>
            <div
              className={openTab === 2 ? "block px-20" : "hidden px-20"}
              id="signup"
            >
              <SignupPage setTap={setOpenTap} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetStart;

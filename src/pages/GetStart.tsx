import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "tailwindcss/tailwind.css";
import LoginPage from "./SigninPage";
import SignupPage from "./SignupPage";

const GetStart = () => {
    const [openTab, setOpenTap] = useState(1);

  return (
    <>
    <div className=" bg-background w-screen h-full absolute overflow-hidden ">
        {/* nav바 */}
        <div>네비게이션 자리</div> 

        {/* 본문 */}
        <div className = "flex justify-center m-10"> 
            <div className="w-600 h-750 rounded-xl bg-black bg-opacity-30">

                {/* 로그인/회원가입 버튼 */}
                <div className="flex justify-between mt-7"> 
                    <a className="m-7 justify-self-start text-white font-press-bold max-xs:text-xl text-2xl ml-24 cursor-pointer hover:border-b-2"
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenTap(1); 
                        }}
                        href="#signin"   
                    >
                        Sign in
                    </a>
                    <a className="m-7 justify-self-end text-white font-press-bold max-xs:text-xl text-2xl mr-24 cursor-pointer hover:border-b-2"
                    onClick={(e) => {
                        e.preventDefault();
                        setOpenTap(2);
                        
                    }}
                    href="#signup">
                        Sign up
                    </a>
                </div>
                <div className={openTab===1 ?"px-20 block" :"px-20 hidden"} id = "signin">
                    <LoginPage/>
                </div>
                <div className={openTab===2 ?"px-20 block" :"px-20 hidden"} id = "signup" >
                    <SignupPage/>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default GetStart;

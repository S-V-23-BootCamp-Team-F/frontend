import React from "react";
import "tailwindcss/tailwind.css";

const LoginPage = () => {
    return (
    <div className=" bg-background w-screen h-full absolute overflow-hidden ">
        {/* nav바 */}
        <div>네비게이션 자리</div>
        
        {/* 본문 */}
        <div className = "flex justify-center m-10">
            <div className="w-600 h-750 rounded-xl bg-black bg-opacity-30">
                {/* 로그인/회원가입 버튼 */}
                <div className="flex justify-between mt-7">
                    <div className="m-7 justify-self-start text-white font-press-bold text-2xl ml-24">
                        Sign up
                    </div>
                    <div className="m-7 justify-self-end text-white font-press-bold text-2xl mr-24">
                        Sign in
                    </div>
                </div>
                <div className="px-20">

                {/* 문구 */}
                <div className="text-left">
                    <div className="font-press-bold text-left text-5xl text-white p-2">
                        welcome to the
                    </div>
                    <div className="font-press-bold text-left text-5xl text-button p-2">
                        Crop Doctor!
                    </div>
                    <div className="font-press-bold text-left text-xl text-neutral-300 p-2">
                        Please enter your detail
                    </div>
                </div>

                {/* email/password */}
                <div className="mt-20">
                    <div className="flex flex-col space-y-2 m-5">
                        <input className="w-full px-3 py-2 border-b-2 bg-transparent placeholder-white" type="text"
                        placeholder="Email" name="email" id="email"/>
                    </div>
                    <div className="flex flex-col space-y-2 m-5">
                        <input className="w-full px-3 py-2 border-b-2 bg-transparent placeholder-white" type="password"
                        placeholder="Password" name="password" id="password"/>
                    </div>
                </div>      

                {/* 버튼/ 문구 */}
                <div className="mt-24">
                    <div>
                        <button className="w-full px-10 py-2 text-white rounded-md
                        bg-button hover:drop-shadow-md duration-300 ease-in py-3" type="submit">
                            Login
                        </button>
                    </div>
                    <div> 
                        <p className="text-center mt-6">
                            <span className="text-neutral-300 drop-shadow-lg shadow-black">Dont’t have an account? </span> 
                            <a className="text-white text-sm hover:underline drop-shadow-lg shadow-black" href="/">
                            Sign up for free
                            </a>
                        </p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
    );
  };
  
  export default LoginPage;
import React,{useState} from "react";
import {useForm} from "react-hook-form";

const SignupPage = () =>{

    const {register, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data:any) => {
        console.log(data);
    }


    return (
        <div className=" bg-background w-screen h-full absolute overflow-hidden ">
            {/* nav바 */}
            <div>네비게이션 자리</div>
            {/* 본문 */}
            <div className="flex justify-center m-10">
                <div className="w-600 h-750 rounded-2xl p-20 bg-black bg-opacity-30">
                    <div className="relative h-14 text-white">
                        <div className="absolute left-0 top-0">Sign up</div>
                        <div className="absolute top-0 right-0">Sign in</div>
                    </div>
                    <div>
                        {/* 소개글 */}
                        <div className="mb-24">
                            <div className="font-press-bold text-5xl text-white my-3">Create an account</div>
                            <div className="font-press-medium text-gray-300">Please enter your detail</div>
                        </div>
                        {/* 입력란 */}
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-24">
                                <div className="flex items-center border-b border-white-500 mb-8">
                                    <input className="appearance-none bg-transparent border-none w-full text-white mr-3 leading-tight focus:outline-none font-press-light placeholder-white" placeholder="Enter your Email">    
                                    </input>
                                </div>
                                <div className="flex items-center border-b border-white-500 mb-8">
                                    <input className="appearance-none bg-transparent border-none w-full text-white mr-3 leading-tight focus:outline-none font-press-light placeholder-white"placeholder="Enter your Password"></input>
                                </div>
                                <div className="flex items-center border-b border-white-500 mb-8">
                                    <input className="appearance-none bg-transparent border-none w-full text-white mr-3 leading-tight focus:outline-none font-press-light placeholder-white "placeholder="Check your Password"></input>
                                </div>
                            </div>
                            {/* 버튼란 */}
                            <div>
                                <div className="bg-button hover:bg-button text-white font-press-bold py-2 px-4 rounded text-center">
                                    <button className="" type="submit">sign Up</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignupPage;
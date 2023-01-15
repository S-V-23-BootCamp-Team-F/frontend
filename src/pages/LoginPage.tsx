import React, { useRef, useState } from "react";
import "tailwindcss/tailwind.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { emitWarning } from "process";

const LoginPage = () => {
    const [openTab, setOpenTap] = useState(1);

    const { register, handleSubmit, formState: { errors }} = useForm();
    
    // 데이터 전송시 작동할 함수 정의
    const onSubmit = (data:any) => { 
        console.log(data);
        if (data!==undefined){
            console.log('서버 로그인')
            axios.post('/api/v1/members/login', {
                params: {
                    'email': data.email,
                    'password': data.password,
                }
            }).then(res => {
                    if(res.status===200){
                        alert('로그인 성공');
                    }else{
                        alert('로그인 실패')
                    }
                }
            ) 
            .catch((error) => {
                console.log(error)
            })
        }
    }

    return (
    <div className=" bg-background w-screen h-full absolute overflow-hidden ">
        {/* nav바 */}
        <div>네비게이션 자리</div> 
        
        {/* 본문 */}
        <div className = "flex justify-center m-10"> 
            <div className="w-600 h-750 rounded-xl bg-black bg-opacity-30">
                {/* 로그인/회원가입 버튼 */}
                <div className="flex justify-between mt-7"> 
                    <a className="m-7 justify-self-start text-white font-press-bold max-xs:text-xl text-2xl ml-24 cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault();
                            setOpenTap(1);
                            
                        }}
                        href="#login"   
                    >
                        Sign up
                    </a>
                    <a className="m-7 justify-self-end text-white font-press-bold max-xs:text-xl text-2xl mr-24 cursor-pointer"
                    onClick={(e) => {
                        e.preventDefault();
                        setOpenTap(2);
                        
                    }}
                    href="#signin">
                        Sign in
                    </a>
                </div>
                
            <div className={openTab===1 ?"px-20 block" :"px-20 hidden"} id = "login"  >
                {/* 문구 */}
                <div className="text-left">
                    <div className="font-press-bold text-left max-xs:text-2xl sm:text-4xl text-5xl text-white p-2">
                        welcome to the
                    </div>
                    <div className="font-press-bold text-left  max-xs:text-2xl sm:text-4xl text-5xl text-button p-2">
                        Crop Doctor!
                    </div>
                    <div className="font-press-bold text-left sm:text-xl text-neutral-300 p-2">
                        Please enter your detail
                    </div>
                </div>

                {/* email/password */}
                <form className="mt-20" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col space-y-2 m-5">
                        <input className="w-full px-3 py-2 border-b-2 bg-transparent placeholder-white" 
                        placeholder="Email" 
                        {...register("email", {required: "required", pattern: {
                            value: /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
                            message: '이메일 형식으로 입력해주세요.',
                            }})} />
                        
                        <div className="mt-px text-red-600"> 
                        <>
                        {errors.email?.type === 'required' && '이메일을 입력해주세요.'}
                        {errors.email?.type === 'pattern' && errors.email.message}
                        </>
                        </div> 
                    </div>

                     <div className="flex flex-col space-y-2 m-5"> 
                        <input className="w-full px-3 py-2 border-b-2 bg-transparent placeholder-white" type="password"
                        placeholder="Password" 
                        {...register("password", {required: "required", pattern: {
                        value: /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,16}$/,
                        message: '비밀번호를 8~16자로 영문 대소문자, 숫자, 특수기호를 조합해서 사용하세요. ',
                        }})} />
                        <div className="mt-px text-red-600"> 
                        <>
                        {errors.password?.type === 'required' && '비밀번호를 입력해주세요'}
                        {errors.password?.type === 'pattern' && errors.password.message}
                        </>
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
                    </div>
                </form>
            </div>


            <div className={openTab===2 ?"px-20 block" :"px-20 hidden"} id = "signin" >
                {/* 문구 */}
                <div className="text-left">
                    <div className="font-press-bold text-left max-xs:text-2xl sm:text-4xl text-5xl text-white p-2">
                        welcome to the2
                    </div>
                    <div className="font-press-bold text-left  max-xs:text-2xl sm:text-4xl text-5xl text-button p-2">
                        Crop Doctor!
                    </div>
                    <div className="font-press-bold text-left sm:text-xl text-neutral-300 p-2">
                        Please enter your detail
                    </div>
                </div>

                {/* email/password */}
                <form className="mt-20" onSubmit={handleSubmit(onSubmit)}>
                    <div className="flex flex-col space-y-2 m-5">
                        <input className="w-full px-3 py-2 border-b-2 bg-transparent placeholder-white" 
                        placeholder="Email" 
                        {...register("email", {required: "required", pattern: {
                            value: /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
                            message: '이메일 형식으로 입력해주세요.',
                            }})} />
                        
                        <div className="mt-px text-red-600">
                        <>
                        {errors.email?.type === 'required' && '이메일을 입력해주세요.'}
                        {errors.email?.type === 'pattern' && errors.email.message}
                        </>
                        </div> 
                    </div>

                     <div className="flex flex-col space-y-2 m-5">
                        <input className="w-full px-3 py-2 border-b-2 bg-transparent placeholder-white" type="password"
                        placeholder="Password" 
                        {...register("password", {required: "required", pattern: {
                        value: /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,16}$/,
                        message: '비밀번호를 8~16자로 영문 대소문자, 숫자, 특수기호를 조합해서 사용하세요. ',
                        }})} />
                        <div className="mt-px text-red-600">
                        <>
                        {errors.password?.type === 'required' && '비밀번호를 입력해주세요'}
                        {errors.password?.type === 'pattern' && errors.password.message}
                        </>
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
                    </div>
                </form>
            </div>
            
            </div>
        </div>
    </div>
    );
  };
  
  export default LoginPage;
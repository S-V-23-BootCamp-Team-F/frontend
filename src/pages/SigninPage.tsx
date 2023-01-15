import React, { useRef, useState } from "react";
import "tailwindcss/tailwind.css";
import { useForm } from "react-hook-form";
import axios from "axios";


const LoginPage = () => {

    const { register, handleSubmit, formState: { errors }, watch} = useForm();
    
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
<>
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
                        <input className="w-full px-3 py-2 border-b-2 bg-transparent placeholder-white text-white" 
                        placeholder="Enter your Email" 
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
                        <input className="w-full px-3 py-2 border-b-2 bg-transparent placeholder-white text-white" type="password"
                        placeholder="Enter your Password" 
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
            </>
    );
  };
  
  export default LoginPage;
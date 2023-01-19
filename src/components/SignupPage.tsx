import React,{useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import axios from "axios";

const SignupPage = () =>{

    const {register, handleSubmit, formState: {errors}, watch} = useForm();

    const onSubmit = async (data:any) => { 
        console.log(data);
        if (data!==undefined){
            await axios.post('http://54.250.133.67/api/v1/members/signup/', {
                params: {
                    email: data.email,
                    password: data.password,
                }
            }).then(res => {
                    if(res.status===201){
                        console.log(res.data)
                        alert('회원가입 성공');
                    }else{
                        alert('이미 존재한 회원입니다')
                    }
                }
            ) 
            .catch((error) => {
                console.log(error)
            })
        }
    }

    return (
      <div>
        <div className="text-left">
                    <div className="font-press-bold text-left max-xs:text-2xl sm:text-4xl text-5xl text-white p-2">
                    Create an account
                    </div>
                    <div className="font-press-medium text-left  max-xs:text-2xl sm:text-4xl text-5xl text-button p-2">
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
                        <div className="flex flex-col space-y-2 m-5">
                        <input className="w-full px-3 py-2 border-b-2 bg-transparent placeholder-white text-white" type="password"
                        placeholder="Check your Password" 
                        {...register("pwConfirm", {required: true,
                            validate: (val: string) => {
                                if (watch('password') != val) {
                                  return "비밀번호가 일치하지 않습니다.";
                                }
                              },
                        })} />
                        <div className="mt-px text-red-600">
                        <>
                        {errors.pwConfirm?.type === "required" && '비밀번호 확인을 입력해주세요'}
                        {errors.pwConfirm?.message}
                        </>
                        </div>
                    </div>

                    {/* 버튼/ 문구 */}
                    <div className="mt-10">
                        <div>
                            <button className="w-full px-10 py-2 text-white rounded-md
                            bg-button hover:drop-shadow-md duration-300 ease-in" type="submit">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </form>
    </div>
    )
}

export default SignupPage;

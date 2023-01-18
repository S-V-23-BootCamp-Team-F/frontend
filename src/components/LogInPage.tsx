import React, { useRef, useState } from "react";
import "tailwindcss/tailwind.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const LogInPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  // 토큰을 쿠키에 저장하면됨
  const onSubmit = (data: any) => {
    const datas = {
      email: data.email,
      password: data.password,
    };
    axios
      .post("http://localhost:8000/api/v1/members/login/", { datas })
      .then((res) => {
        const { accessToken } = res.data;
        console.log(res.data);

        // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;

        // accessToken을 localStorage, cookie 등에 저장하지 않는다!
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // // 데이터 전송시 작동할 함수 정의
  // const onSubmit = (data: any) => {
  //   console.log(data);
  //   if (data !== undefined) {
  //     console.log("서버 로그인");
  //     axios
  //       .post("/api/v1/members/login", {
  //         params: {
  //           email: data.email,
  //           password: data.password,
  //         },
  //       })
  //       .then((res) => {
  //         if (res.status === 200) {
  //           alert("로그인 성공");
  //         } else {
  //           alert("로그인 실패");
  //         }
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // };

  return (
    <div>
      {/* 문구 */}
      <div className="text-left">
        <div className="font-press-bold p-2 text-left text-5xl text-white max-xs:text-2xl sm:text-4xl">
          welcome to the
        </div>
        <div className="font-press-bold p-2  text-left text-5xl text-button max-xs:text-2xl sm:text-4xl">
          Crop Doctor!
        </div>
        <div className="font-press-bold p-2 text-left text-neutral-300 sm:text-xl">
          Please enter your detail
        </div>
      </div>

      {/* email/password */}
      <form className="mt-20" onSubmit={handleSubmit(onSubmit)}>
        <div className="m-5 flex flex-col space-y-2">
          <input
            className="w-full border-b-2 bg-transparent px-3 py-2 text-white placeholder-white"
            placeholder="Enter your Email"
            {...register("email", {
              required: "required",
              pattern: {
                value:
                  /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
                message: "이메일 형식으로 입력해주세요.",
              },
            })}
          />

          <div className="mt-px text-red-600">
            <>
              {errors.email?.type === "required" && "이메일을 입력해주세요."}
              {errors.email?.type === "pattern" && errors.email.message}
            </>
          </div>
        </div>

        <div className="m-5 flex flex-col space-y-2">
          <input
            className="w-full border-b-2 bg-transparent px-3 py-2 text-white placeholder-white"
            type="password"
            placeholder="Enter your Password"
            {...register("password", {
              required: "required",
              pattern: {
                // value:
                //   /(?=.*\d{1,50})(?=.*[~`!@#$%^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,16}$/,
                // message:
                //   "비밀번호를 8~16자로 영문 대소문자, 숫자, 특수기호를 조합해서 사용하세요. ",
              },
            })}
          />
          <div className="mt-px text-red-600">
            <>
              {errors.password?.type === "required" &&
                "비밀번호를 입력해주세요"}
              {errors.password?.type === "pattern" && errors.password.message}
            </>
          </div>
        </div>

        {/* 버튼/ 문구 */}
        <div className="mt-14">
          <div>
            <button
              className="w-full rounded-md bg-button px-10
                            py-3 text-white duration-300 ease-in hover:drop-shadow-md"
              type="submit"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default LogInPage;

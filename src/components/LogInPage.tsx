import axios from "axios";
import React, { useRef, useState } from "react";
import "tailwindcss/tailwind.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LogInPage = () => {
  const [loginChk, setLoginChk] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const navigate = useNavigate();

  // 토큰을 쿠키에 저장하면됨 이거는
  const onSubmit = (data: any) => {
    const datas = {
      email: data.email,
      password: data.password,
    };
    axios
      .post("http://cropdoctor.shop/api/v1/members/login/", datas, {
        withCredentials: true, //끅끠를 주고받는 명령어
      })
      .then((res) => {
        const accessToken = res.data.token.access;
        // console.log(res.data.token.access);

        // API 요청하는 콜마다 헤더에 accessToken 담아 보내도록 설정
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;
        setLoginChk(true);
        navigate("/");
        return res.data.token.access;
      })
      .catch((err) => {
        // console.log(err);
        if (err.response?.status === 201) {
          console.log(err);
          return alert("존재하지 않는 회원입니다.");
        }
      });
  };

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

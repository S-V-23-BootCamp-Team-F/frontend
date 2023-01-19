import axios from "axios";

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log("401- 권한에러 쿠키업쪄염");
    // 여기다 리프레쉬 유무의 요청 api를 보내면됨 
    // true 면 엑세스 발급 
    // false면 return loginpage useNavigate안에 redirecting 사용 
    return Promise.reject(error);
  }
);

import axios, { AxiosError } from "axios";
// // 리프레시 임시라 삭제해야함

// axios.interceptors.response.use(
//   (res) => res,
//   async (err: AxiosError) => {
//     if (err.response?.status === 401) {
//       const response = await axios.get("members/login/refresh/", {
//         withCredentials: true,
//       });
//       if (response.status === 200) {
//         axios.defaults.headers.common[
//           "Authorization"
//         ] = `Bearer ${response.data.result.accessToken}`;
//         return err.config;
//       }
//     } else {
//       return Promise.reject(err);
//     }
//     return err;
//   }
// );
// import axios, { AxiosError } from "axios";
// // 리프레시 임시라 삭제해야함

axios.interceptors.response.use(
  (res) => res,
  async (error: AxiosError) => {
    console.log(error);
    if (error.response?.status === 401) {
      const response = await axios.get(
        "https://api.cropdoctor.shop/api/v1/members/login/refresh",
        {
          withCredentials: true,
        }
      );
      if (response.status === 200) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.result.token.access}`;
        return error.config;
      }
    }
    if (error.response?.status === 405) {
      return Promise.reject(error);
    }
    if (error.response?.status === 400) {
      return Promise.reject(error);
    }
    return error;
  }
);

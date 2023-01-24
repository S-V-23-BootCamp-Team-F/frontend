import axios, { AxiosError } from "axios";
// 리프레시 임시라 삭제해야함

axios.interceptors.response.use(
  (res) => res,
  async (err: AxiosError) => {
    if (err.response?.status === 401) {
      const response = await axios.get("members/login/refresh/", {
        withCredentials: true,
      });
      if (response.status === 200) {
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${response.data.accessToken}`;
        return err.config;
      }
    } else {
      return Promise.reject(err);
    }
    return err;
  }
);

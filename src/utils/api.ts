import axios, { AxiosError } from "axios";
// 리프레시 임시라 삭제해야함
let refresh = false;

axios.interceptors.response.use(
  (res) => res,
  async (err: AxiosError) => {
    if (err.response?.status === 401 && !refresh) {
      refresh = true;
      const response = await axios.get("auth/refresh", {
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
    refresh = false;
    return err;
  }
);

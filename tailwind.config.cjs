/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config}  **/
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], //여기는 내가 가진 확장자 다 써주기!
  theme: {
    extend: {
      fontFamily: {
        "eng-regular": ["Urbanist-Regular", "sans-serif"],
        "eng-bold": ["Urbanist-SemiBold", "sans-serif"],
        "kor-bold": ["SpoqaHanSansNeo-Bold", "sans-serif"],
        "kor-medium": ["SpoqaHanSansNeo-Medium", "sans-serif"],
        "kor-regular": ["SpoqaHanSansNeo-Regular", "sans-serif"],
      },
      colors: {
        background: "#F9F8F6",
        button: "#2B663C",
        disease: "#F6795B",
      },
      width: {
        600: "37.5rem",
        404: "25.25rem",
        700: "43.75rem",
      },
      height: {
        750: "46.875rem",
        130: "8.25rem",
        150: "10rem",
        356: "22.25rem",
      },
      screens: {
        xs: "650px",
      },
      backgroundImage: {
        grass: "url('src/images/grass.svg')",
        startImg: "url('images/backImg.png')",
        diagnosis: "url('images/diagnosis.svg')",
        diagnosis_hover: "url('images/diagnosis_hover.svg')",
        login: "url('images/login.svg')",
        login_hover: "url('images/login_hover.svg')",
        history: "url('images/history.svg')",
        history_hover: "url('images/history_hover.svg')",
        upload_image: "url('images/uploadImage.svg')",
      },
      fontSize: {
        10: "10px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

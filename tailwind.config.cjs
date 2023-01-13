/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config}  **/
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], //여기는 내가 가진 확장자 다 써주기!
  theme: {
    extend: {
      fontFamily: {
        "press-bold": ["GmarketSansTTFBold", "sans-serif"],
        "press-medium": ["GmarketSansTTFMedium", "sans-serif"],
        "press-light": ["GmarketSansTTFLight", "sans-serif"],
      },
    },
  },
  plugins: [],
};

/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config}  **/
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], //여기는 내가 가진 확장자 다 써주기!
  theme: {
    extend: {
      fontFamily: {
        title: ["Cafe24Ssurround", "sans-serif"],
        detail: ["Cafe24SsurroundAir"],
      },
      colors: {
        'project-green': '#3CB65A',
      }
    },
  },
  plugins: [],
};
import type { Config } from "tailwindcss";
const {nextui} = require("@nextui-org/react");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      "primary-color":{
        DEFAULT:'#FF4241',
        100: "#FFE6D9",
        200: "#FFC7B3",
        300: "#FFA18D",
        "400": "#FF7D70",
        500: "#FF4241",
        600: "#DB2F3D",
        700: "#B7203A",
        800: "#931434",
        90: "#7A0C31",
      },
      "secondary-color" :"#7828C8",
      "white":"#FFF"
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",

  plugins: [nextui()],
};
export default config;

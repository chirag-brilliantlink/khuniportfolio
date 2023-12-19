import type { Config } from "tailwindcss";
import Clamp from "./utils/clamp";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./component/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "xs-res": `${Clamp(0.75, 1)}`,
        "sm-res": `${Clamp(0.8, 1.25)}`,
        "md-res": `${Clamp(1.25, 2.25)}`,
        "lg-res": `${Clamp(2, 3.25)}`,
        "xl-res": `${Clamp(3.25, 6.25)}`,
        "2xl-res": `${Clamp(3.75, 8.75)}`,
      },
    },
  },
  plugins: [],
};
export default config;

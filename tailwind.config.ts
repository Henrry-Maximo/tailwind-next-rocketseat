import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        purple: "#8257e6",
        pg: "#581C87"
      },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
    },
  },
  plugins: [],
};
export default config;

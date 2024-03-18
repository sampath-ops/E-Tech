import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'gilroy': ['Gilroy-Regular', 'sans-serif'],
        'gilroy-semibold': ['Gilroy-SemiBold', 'sans-serif'],
        'gilroy-medium': ['Gilroy-Medium', 'sans-serif'],
        'gilroy-extrabold': ['Gilroy-ExtraBold', 'sans-serif'],
        'gilroy-bold':['Gilroy-Bold','sans-serif']
      }
    }
  },
  plugins: [],
};
export default config;

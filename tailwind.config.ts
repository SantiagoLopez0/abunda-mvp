import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        green1: '#052D23',
        green2: '#1A3B25',
        lime: '#E6FF55',
        wpGreen: '#EAFBDF',
        beige: '#FAF5ED',
        brown: '#D7CDC3',
      },
    },
  },
  plugins: [],
};
export default config;

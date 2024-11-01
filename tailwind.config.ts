import { colors, nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      height: {
        "screen-without-navbar": "calc(100vh - 64px)",
      },
      colors: {
        "almost-white": "#f9f9f9",
      },
      boxShadow: {
        "ambient-white":
          "2px 2px 20px rgba(0, 0, 0, 0.1), -10px -10px 10px white",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      layout: {
        radius: {
          small: "6px", // rounded-small
          medium: "8px", // rounded-medium
          large: "10px", // rounded-large
        },
      },
    }),
  ],
};

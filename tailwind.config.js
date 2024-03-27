import { nextui } from '@nextui-org/react'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {}
  },
  darkMode: 'class',
  plugins: [nextui({
    addCommonColors: true,
    themes: {
      "custom-theme": {
        extend: "dark",
        colors: {
          background: "#181918",
          foreground: "#ffffff",
          primary: {
            50: "#DDE2FE",
            100: "#DDE2FE",
            200: "#BCC5FD",
            300: "#99A6FB",
            400: "#7F8EF7",
            500: "#5667F2",
            600: "#3E4DD0",
            700: "#2B36AE",
            800: "#1B238C",
            900: "#101674",
            DEFAULT: "#5667F2",
            foreground: "#ffffff",
          },
          focus: "#3E4DD0",
          success: {
            50: "#CEFDD3",
            100: "#CEFDD3",
            200: "#9EFBB1",
            300: "#6DF596",
            400: "#48EC8A",
            500: "#11E079",
            600: "#0CC078",
            700: "#08A173",
            800: "#058169",
            900: "#036B61",
            DEFAULT: "#11E079",
            foreground: "#ffffff",
          },
          info: {
            50: "#D7FDFF",
            100: "#D7FDFF",
            200: "#AFF6FF",
            300: "#87EAFF",
            400: "#69DBFF",
            500: "#38C3FF",
            600: "#2899DB",
            700: "#1C73B7",
            800: "#115293",
            900: "#0A3A7A",
            DEFAULT: "#38C3FF",
            foreground: "#ffffff",
          },
          warning: {
            50: "#FFFBD2",
            100: "#FFFBD2",
            200: "#FFF7A6",
            300: "#FFF279",
            400: "#FFED58",
            500: "#FFE521",
            600: "#DBC218",
            700: "#B79F10",
            800: "#937E0A",
            900: "#7A6706",
            DEFAULT: "#FFE521",
            foreground: "#ffffff",
          },
          danger: {
            50: "#FFE6D9",
            100: "#FFE6D9",
            200: "#FFC7B3",
            300: "#FFA18D",
            400: "#FF7D71",
            500: "#FF4242",
            600: "#DB303F",
            700: "#B7213B",
            800: "#931536",
            900: "#7A0C32",
            DEFAULT: "#FF4242",
            foreground: "#ffffff",
          }
        },
      }
    }
  })]
}

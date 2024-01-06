/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "secondary-light-10": "#fff",
        "primary-dark-80": "#05000a",
        "secondary-dark-20": "#111",
        "secondary-dark-60": "#555",
        "secondary-light-30": "#f8f8f8",
        "secondary-light-70": "#ccc",
        "secondary-light-60": "#ddd",
        "gradient-primary-gradient": "#aace88",
        "secondary-light-40": "#f4f4f4",
        "secondary-dark-50": "#333",
        "secondary-dark-40": "#444",
        "secondary-light-80": "#bbb",
        "primary-40": "#d0f7ab",
        gray: {
          "100": "rgba(0, 0, 0, 0.35)",
          "200": "rgba(0, 0, 0, 0.5)",
        },
        "secondary-light-20": "#fcfcfc",
        gainsboro: "#d9d9d9",
        "primary-20": "#fbf8ff",
      },
      spacing: {},
      fontFamily: {
        "paragraphs-para-16px-semibold": "'Plus Jakarta Sans'",
        "h4-desktop-h4-bold": "Urbanist",
        inter: "Inter",

      },
      borderRadius: {
        "481xl": "500px",
        "26xl-7": "45.7px",
        mini: "15px",
        xl: "20px",
        "31xl": "50px",
        "11xl": "30px",
        "3xs": "10px",
        "6xl": "25px",
        "smi-7": "12.7px",
        "5xl-7": "24.7px",
        "smi-5": "12.5px",
        "4xs-5": "8.5px",
        "mini-2": "14.2px",
        "3xs-5": "9.5px",
        "9xs-2": "3.2px",
        "2xl-6": "21.6px",
        "10xl-7": "29.7px",
      },
    },
    fontSize: {
      lg: "18px",
      base: "16px",
      "7xl": "26px",
      "23xl": "42px",
      "41xl-2": "60.2px",
      "5xl": "24px",
      xl: "20px",
      "35xl": "54px",
      sm: "14px",
      "41xl": "60px",
      "29xl": "48px",
      "17xl": "36px",
      "3xl-6": "22.6px",
      "mid-5": "17.5px",
      "3xs-5": "9.5px",
      "base-3": "16.3px",
      "base-8": "16.8px",
      "11xl": "30px",
      "22xl-5": "41.5px",
      inherit: "inherit",
    },
  },
  plugins: [],
}
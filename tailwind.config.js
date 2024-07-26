/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      full: "500px",
    },
    extend: {
      fontFamily: {
        roboto: "Roboto",
      },
      colors: {
        body: "#F7E7DC",
        text: "#FFF8F3",
        frame: "#758694",
        card: "#405D72",
      },
    },
  },
  plugins: [],
};

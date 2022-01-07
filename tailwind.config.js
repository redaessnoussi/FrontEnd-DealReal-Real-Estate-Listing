module.exports = {
  purge: {
    enabled: true,
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          800: "#155C3F",
          700: "#27AD77",
          500: "#61DBAA",
          300: "#8AE5C0",
          100: "#DEF8ED",
        },
        secondary: {
          800: "#853F00",
          700: "#EB7000",
          500: "#FF8A20",
          300: "#FFBF85",
          100: "#FFDAB8",
        },
        title: {
          800: "#123763",
          500: "#a0afc1",
        },
        body: {
          800: "#6D6D6D",
        },
        infield: {
          800: "#CCCCCC",
        },
      },
    },
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
      serif: ["Rubik", "serif"],
    },
  },
  plugins: [],
};

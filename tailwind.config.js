module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      blue: "#40A2E3",
      red: "#FF1E00",
      green: "#5BB318",
      light: "#F4F4F4",
      gray: "#495464",
      dark: "#191919",
      modal: "#191b1a",
      modalGray: "#1f1e1f",
    },
  },
};

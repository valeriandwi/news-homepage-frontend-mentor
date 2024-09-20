module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "primary-color": "hsl(5, 85%, 63%)",
        "secondary-color": "hsl(240, 100%, 5%)",
        "gold-color": "hsl(35, 77%, 62%)",
        "off-white-color": "hsl(36, 100%, 99%)",
        "grayish-blue-color": "hsl(233, 8%, 79%)",
        "dark-grayish-color": "hsl(236, 13%, 42%)",
      },
      fontSize: {
        paragraph: "15px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

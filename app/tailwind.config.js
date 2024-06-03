module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg_black: "#0D0D0D",
        bg_dark_grey: "#171717",
        font_white: "#FFFFFF",
        font_grey: "#868686",
        font_green: "#80BAAC",
      },
      spacing: {
        31: "1.9375rem", // 31px
        38: "2.375rem", // 38px
        18: "1.125rem", // 18px
        20: "1.25rem", // 20px
        27: "1.6875rem", // 27px
        42: "2.625rem", // 42px
        10: "0.625rem", // 10px
        26: "1.625rem", // 26px
        58: "3.625rem", // 25px
        92: "5.75rem", // 92px
      },
      backgroundImage: {
        "gradient-main":
          "linear-gradient(93.73deg, #B3CA85 5.04%, #4DAAD3 95.09%)",
        "gradient-btn_main":
          "linear-gradient(93.73deg, rgba(179, 202, 133, 0.1) 5.04%, rgba(77, 170, 211, 0.1) 95.09%)",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      fontSize: {
        "14px": ["14px", "17.07px"],
        "20px": ["20px", "24.38px"],
        "30px": ["30px", "36px"],
      },
      fontWeight: {
        500: "500",
        600: "600",
        700: "700",
      },
    },
    borderRadius: {
      full: "1.5625rem",
    },
  },
  plugins: [require("daisyui")],
}

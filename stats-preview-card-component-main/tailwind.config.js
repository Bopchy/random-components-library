module.exports = {
  content: ["./*.html"],
  theme: {
    fontFamily: {
      inter: "Inter, sans-serif",
      "lexed-deca": "Lexend Deca, sans-serif",
    },
    colors: {
      "very-dark-blue": "hsl(233, 47%, 7%)",
      "dark-desaturated-blue": "hsl(244, 38%, 16%)",
      "soft-violet": "hsl(277, 64%, 61%)",
      white: "hsl(0, 0%, 100%)",
      "main-paragraph-white": "hsla(0, 0%, 100%, 0.75)",
      "stats-white": "hsla(0, 0%, 100%, 0.6)",
    },
    fontSize: {
      xs: ".75rem",
      md: ".9375rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
    },
    extend: {
      gridTemplateRows: {
        "2-auto": "1fr auto",
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};

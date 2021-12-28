module.exports = {
  content: ["./*.html"],
  theme: {
    borderRadius: {
      5: "5px",
      10: "10px",
    },
    screens: {
      xs: "500px",
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1220px",
      'mxs': {'max': '499px'},
    },
    container: {
      center: true,
      padding: {
        // sm: "2.5rem",
        // md: "3rem",
        DEFAULT: "2.5rem",
      },
    },
    extend: {
      colors: {
        prime: {
          100: "#F0EEEB",
          200: "#E2E2E2",
          300: "#C8C8C8",
          400: "#B1B1B1",
          500: "#ADADAD",
          600: "#9E9E9E",
          700: "#5A5444",
          800: "#292929",
        },
        "black-alpha": "rgba(0,0,0,0.15)",
      },
    },
    backgroundImage: {
      checkmark: "url('/Assets/images/checkmark.svg')",
    },
    fontFamily: {
      cabin: ["Cabin", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      source: ["Source Sans Pro", "sans-serif"],
    },
    fontSize: {
      sm: ["16px", "20px"],
      base: ["18px", "27px"],
      lg: ["20px", "24px"],
      xl: ["36px", "44px"],
      "2xl": ["56px", "68px"],
    },
    listStyleType: {
      checkmark: "url(Assets/images/checkmark.svg)",
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};

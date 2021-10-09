module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#dee3ea",
          200: "#b2bdcd",
          300: "#5d7290",
          600: "#323d4d",
          700: "#242c37",
          800: "#151a21",
          900: "#0b0e11",
        },
        secondary: {
          DEFAULT: "#5575e7",
          "washed-out": "#879eed",
        },
        accent: {
          DEFAULT: "#fd4d4d",
          hover: "#fd6868",
          disabled: "#f5bfbf",
        },
      },
    },
  },
  variants: {
    extend: {
      textOpacity: ['dark'],
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
  ]
}

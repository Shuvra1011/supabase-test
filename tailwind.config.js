/** @type {import('tailwindcss').Config} */
module.exports = {
  node: process.env.TAILWIND_NODE? "jit" : "",
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ["./src/**/*.{ts,html}"],
  },
  darkMode: false,
  important: ':root',
  separator: ':',
  theme: {
    screens: {
      sm: '600px',
      md: '960px',
      lg: '1280px'
    },
    extend: {},
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryDarkMagenta: 'hsl(300, 43%, 22%)',
        primarySoftPink: 'hsl(333, 80%, 67%)',
        secondaryDarkGrayishMagenta: 'hsl(303, 10%, 53%)',
        secondaryLightGrayishMagenta: 'hsl(300, 24%, 96%)',
      },
      fontFamily: {
        leagueSpartan: ['var(--font-league-spartan)']
      },
      fontSize: {
        sm2: '15px'
      }
    },
  },
  plugins: [],
}

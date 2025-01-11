/** @type {import('tailwindcss').Config} */
import * as tailwindAspect from "@tailwindcss/aspect-ratio"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [tailwindAspect],
}
import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

export default <Partial<Config>>{
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}", "./nuxt.config.{js,ts}", "content/**/**.md"],
  theme: {
    extend: {
      colors: {
        primary: {
          700: "#2c2525",
          900: "#211c1c",
        },
      },
      screens: {
        md: "856px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

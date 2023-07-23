import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

export default <Partial<Config>>{
  content: ["./src/**/*.{vue,js,ts,jsx,tsx}", "./nuxt.config.{js,ts}", "content/**/**.md"],
  theme: {
    extend: {
      colors: {
        primary: {
          500: "#403838",
          700: "#2c2525",
          900: "#211c1c",
          950: "#191515",
          border: "#72696A",
          icon: "#FFF0F3",
          active: "#5B5353",
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

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
          800: "#211c1c",
          850: "#201B1B",
          900: "#191515",
          border: "#72696A",
          icon: "#FFF0F3",
          active: "#5B5353",
        },
      },
      screens: {
        xxs: "320px",
        xs: "475px",
        md: "856px",
      },
      fontFamily: {
        mono: ["Operator Mono", "Fira Code", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

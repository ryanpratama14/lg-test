import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        red: "#DC0000",
        redHover: "#f20202",
        redDisabled: "#FCE0DF",
        dark: "#010101",
        gray: "#909090",
        gray2: "#606060",
        gray3: "#787878",
        input: "#EFEFEF",
        green: "#00AE31",
        grayborder: "#C9C9C9",
      },
      fontFamily: {
        nitti: ["Nitti", ...fontFamily.sans],
      },
      screens: {
        fhd: "1920px",
        "2k": "2560px",
        "4k": "3840px",
      },
    },
  },
  plugins: [],
} satisfies Config;

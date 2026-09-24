import type { Config } from "tailwindcss";

export default {
  content: { relative: true, files: ["./index.html", "./src/**/*.{ts,tsx}"] },
  theme: {
    extend: {
      colors: {
        ink: "#21211f",
        page: "#f5f5f5",
        brand: {
          DEFAULT: "#f5852d",
          deep: "#de4911",
          warm: "#f47527",
          stat: "#f57e20",
        },
        navy: "#21212f",
      },
      fontFamily: {
        sans: ['"BDO Grotesk"', "system-ui", "sans-serif"],
        serif: ['"PP Editorial New"', "Georgia", "serif"],
      },
      backgroundImage: {
        "brand-button":
          "linear-gradient(180.05deg, rgb(245,133,45) 0.22%, rgb(143,78,27) 279.98%)",
        "brand-cta":
          "linear-gradient(112.76deg, rgb(210,58,18) 5.79%, rgb(245,133,45) 66.43%)",
        "brand-line": "linear-gradient(to right, #de4911, #f47527 78.846%)",
      },
    },
  },
  plugins: [],
} satisfies Config;

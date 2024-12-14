import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        cyber: {
          black: "#1A1F2C",
          red: "#FF3333",
          green: "#33FF99",
          blue: "#66FFFF",
        },
      },
      keyframes: {
        "glitch-1": {
          "0%, 100%": { transform: "none" },
          "41.99%": { transform: "none" },
          "42%": { transform: "skew(-2deg)" },
          "43%": { transform: "skew(3deg)" },
          "43.5%": { transform: "none" }
        },
        "section-reveal": {
          "0%": { 
            opacity: "0",
            transform: "translateY(20px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        }
      },
      animation: {
        "glitch": "glitch-1 2.5s infinite",
        "reveal": "section-reveal 0.5s ease-out forwards"
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Sora", "sans-serif"],
        body: ["Space Grotesk", "sans-serif"],
      },
      colors: {
        primary: "#22d3ee",
        accent: "#f97316",
        panel: "#10172a",
      },
      boxShadow: {
        glow: "0 0 24px rgba(34, 211, 238, 0.2)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
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
        bg: "#ffffff",
        main: "#ffffff",
        // Neobrutalism color palette
        'neo': {
          primary: '#FF6B6B',    // Vibrant coral
          secondary: '#4ECDC4',  // Bright turquoise
          accent: '#FFE66D',     // Sunny yellow
          black: '#1A1A1A',      // Off-black
          white: '#FFFFFF',
          'gray': '#F3F3F3'
        }
      },
      borderRadius: {
        base: "5px",
        'neo': '0px',           // Sharp corners for neo-brutalism
      },
      boxShadow: {
        base: "4px 4px 0px 0px rgba(0,0,0,1)",
        'neo': '5px 5px 0px 0px rgba(0,0,0,1)',
        'neo-lg': '8px 8px 0px 0px rgba(0,0,0,1)',
        'neo-xl': '12px 12px 0px 0px rgba(0,0,0,1)',
      },
      translate: {
        boxShadowX: "4px",
        boxShadowY: "4px",
      },
      fontWeight: {
        base: "500",
        heading: "700",
      },
      fontFamily: {
        'neo': ['Space Grotesk', 'sans-serif'],
        'neo-heading': ['Inter', 'sans-serif'],
      },
      borderWidth: {
        'neo': '3px',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        'neo-bounce': {
          '0%, 100%': {
            transform: 'translateY(-2%)',
            animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
          },
          '50%': {
            transform: 'none',
            animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        'neo-bounce': 'neo-bounce 1s infinite',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    // Add any additional plugins here
  ],
};
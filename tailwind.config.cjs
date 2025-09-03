/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");


const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");


const CustomStyle = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y-180": {
      transform: "rotateY(180deg)",
    },
    ".preserve-3d": {
      transformStyle: "preserve-3d",
    },
    ".perspective-1000": {
      perspective: "1000px",
    },
    ".backface-hidden": {
      backfaceVisibility: "hidden",
    },
  });
});

export default {
  content: ["./index.html", "./src/**/*.{jsx,js}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./sports_background.png')",
        "gradient-radial": "radial-gradient(circle, var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 60% 60%, var(--tw-gradient-stops))",
      },
      keyframes: {

        fade: {
          '0%, 20%': { opacity: 1 },
          '25%, 100%': { opacity: 0 },
        },

        
        

        pulseBorder: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255, 255, 255, 0.7)' },
          '50%': { boxShadow: '0 0 0 6px rgba(255, 255, 255, 0)' },
        },

        spotlight: {
          '0%': { 
            
          },
  
        },

        growLine: {
          "0%": { height: "0%" },
          "100%": { height: "100%" },
        },
        infiniteSlider: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform:"translateX(-100%)"    },
        },
        bounce: {
          "0%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
          "100%": {
            transform: "translateY(-25%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
        },
        rotate: {
          "0%": { transform: "rotate(0deg) scale(10)" },
          "100%": { transform: "rotate(-360deg) scale(10)" },
        },
        slidein: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        gradientMove: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        borderGradientFlow: {
          "0%": {
            borderImageSource: "linear-gradient(45deg, #38bdf8, #8b5cf6)",
            borderImageSlice: 1,
          },
          "100%": {
            borderImageSource: "linear-gradient(45deg, #8b5cf6, #38bdf8)",
            borderImageSlice: 1,
          },
        },
      },
      
      animation: {
        fade: "fade 15s infinite 2s",

        // fade1: 'fade 12s infinite 0s',
        // fade2: 'fade 12s infinite 3s',
        // fade3: 'fade 12s infinite 6s',
        // fade4: 'fade 12s infinite 9s',
        // fade5: 'fade 12s infinite 12s',
        // fade6: 'fade 15s infinite 15s',
        // fade7: 'fade 18s infinite 18s',
       
        'spin-slow': 'spin 2s linear infinite',

        pulseBorder: 'pulseBorder 2s infinite',

        spotlight: 'spotlight 5s ease-out ',
        growLine: "growLine 3s ease-in-out forwards",
        ["infinite-slider"]: "infiniteSlider 40s linear infinite",
        bounce: "bounce 1s infinite",
        rotate: "rotate 15s linear infinite",
        slidein: "slidein 1s ease forwards",
        slidein1: "slidein 1s ease forwards",
        slidein2: "slidein 2s ease forwards",
        slidein3: "slidein 3s ease forwards",
        slidein4: "slidein 4s ease forwards",

        gradientMove: "gradientMove 2s ease infinite",
        borderGradientFlow: "borderGradientFlow 3s linear infinite",


      },
      backgroundSize: {
        "200%": "200% 200%",
      },
      colors: {
        sky: {
          400: "#38bdf8",
        },
        violet: {
          500: "#8b5cf6",
        },
      },
      fontFamily: {
        inter: ["inter", "serif"],
        vt323: ["VT323", "monospace"],
        myFont: ["Bebas Neue", "sans-serif"],
        pixelFont: ['"Press Start 2P"', "cursive"],
        roboto: ["Roboto", "sans-serif"],
        pixelify: ['"Pixelify Sans"', "sans-serif"],
      },
    },
  },
  plugins: [addVariablesForColors] [CustomStyle],
  variants: {
    extend: {
      screens: {
        "lg-custom": "900px"
      },
      display: ["group-hover"],
    },
  },
};




function addVariablesForColors({
  addBase,
  theme
}) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(Object.entries(allColors).map(([key, val]) => [`--${key}`, val]));

  addBase({
    ":root": newVars,
  });
}

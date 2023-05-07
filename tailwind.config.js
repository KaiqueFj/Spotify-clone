/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      spotifyHeadColor: "#4b454d",
      spotifyBtColor: '#1fdf64',
      spotifyBlackbgCard: "#1c1c1c",
      spotifyMidColor: "#121212",
      spotifyBlack: "#262626",
      spotifyContainerBG: "#333233",
      blackBg: "#000",
      whiteText: "#f6f6f6",
      subTextGrey: "#b4b2b5",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

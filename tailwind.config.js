module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'nunito': 'Nunito',
        'rancho': 'Rancho'
      }
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#32A99A",
          secondary: "#3B3744",
          accent: "#FC5C68",
          neutral: "#F0FFED",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}

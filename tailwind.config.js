/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./web/**/*.{html,js}"],

  theme: {
    fontSize: {
      zero: "0px",
    },
    fontWeight: {
      thin: "100",
      light: "300",
      normal: "400",
      medium: "500",
      bold: "700",
      black: "900",
    },
    container: {
      center: true,
    },
    screens: {
      pc: "1200px",
    },
    colors: {
      mainBlue: "#2B7EBD",
      graFrom: "#1364A2",
      graTo: "#502278",

      graFrom2: "#555555",
      graTo2: "#444444",

      white: "#fff",
      transparent: "transparent"
    },
    extend: {
      boxShadow: {
        'mainSolution' : '0px 15px 21px 1px rgba(0, 0, 0, 0.2)',
        'haccp' : '0px 4px 14px rgba(0, 0, 0, 0.25)',
        'input' : '0px 4px 4px rgba(0, 0, 0, 0.25)',

      },
      backgroundImage: {
        logo: "url('../image/logo.svg')",
        logoW: "url('../image/logoW.svg')",
        close: "url('../image/icon-close.svg')",
        menuW: "url('../image/icon-menuW.svg')",
        menu: "url('../image/icon-menu.svg')",
        langW: "url('../image/icon-langW.svg')",
        lang: "url('../image/icon-lang.svg')",
        down: "url('../image/icon-down.svg')",
        downW: "url('../image/icon-downW.svg')",
        enter: "url('../image/icon-enter.svg')",
        enter2: "url('../image/icon-enter2.svg')",
        right1: "url('../image/icon-right.svg')",
        download: "url('../image/icon-download.svg')",
        link: "url('../image/icon-link.svg')",
        location: "url('../image/icon-location.svg')",

        home: "url('../image/icon-home.svg')",
        del: "url('../image/icon-delete.svg')",

        stop: "url('../image/icon-stop.svg')",
        play: "url('../image/icon-play.svg')",

        job1: "url('../image/icon-job1.png')",
        job2: "url('../image/icon-job2.png')",
        job3: "url('../image/icon-job3.png')",

        haccpbg: "url('../image/img-haccp.jpg')",

        graphql: "url('../image/icon-graphql.svg')",
        nextjs: "url('../image/icon-nextjs.svg')",
        sveltekit: "url('../image/icon-sveltekit.svg')",
        java: "url('../image/icon-java.svg')",
        spring: "url('../image/icon-spring.svg')",
        flutter: "url('../image/icon-flutter.svg')",

        intro1: "url('../image/img-intro-bg1.png')",
        intro2: "url('../image/img-intro-bg2.jpg')",
        introimg: "url('../image/img-intro.png')",

      },
    },
  },
  plugins: [],
};



module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "main": "#ff7e00",
        "primary": "#ff9833",
        "secondary": "#F6F8FC",
        "newcolor": "f080a25"
      },

      backgroundImage: {
        'pattern': "url('/public/images/chicagoharley-torn-edge-index.png')",

        'mobile': "url('/public/images/chicagoharley-bg-cta-bottom-mobile3.png')",

        'cta1': "url('/public/images/chicagoharley-sbp-cta1.jpg')",

        'cta2': "url('/public/images/chicagoharley-sbp-cta2.jpg')",

        'cta3': "url('/public/images/chicagoharley-sbp-cta3.jpg')",

        'cta4': "url('/public/images/bikes-of-the-week-bg.png')",


        
        
      }
    },

    fontFamily: {
      'body': ["Roboto Condensed", 'Helvetica', 'Arial', 'sans-serif'],
    }
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]

}
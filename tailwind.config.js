/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "*.html" , "./dist/*.html"
  ],
  theme: {
    extend: {
      fontFamily:{
        myfont:[
          "Playwrite IT Moderna", "serif"
        ]
      },
      textColor:{
        mainColor:[
          "rgb(199, 81, 152)"
        ]
      },
      fontSize:{
        large:[
          "150px"
        ]
      },
      height:{
        navH:[
          "75px"
        ]
      },
      width:{
        sec:[
          "15%"
        ],
        wid:[
          "70%"
        ],
        wd:[
          "30%"
        ]
      }
    },
  },
  plugins: [],
}


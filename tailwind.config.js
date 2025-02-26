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
        ],
        pop:[
          "Poppins","serif"
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
        ],
        cardH:[
          "635px"
        ],
        sec1:[
          "15%"
        ],
        sec2:[
          "40%"
        ],
        sec3:[
          "45%"
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
      },
      backgroundColor:{
        dark:[
          "rgb(40,45,53)"
        ],
        mGray:[
          "rgb(84,93,102)"
        ]
      }
    },
  },
  plugins: [],
}


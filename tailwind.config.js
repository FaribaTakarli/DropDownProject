// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
const colors = require("tailwindcss/colors");

module.exports = {
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        //:کلاس جدید را جایگزین همه قبلی ها میکندد
        // width:{
        //   '22':'5.5rem'
        // }
        // width: {
        //     22: "5.5rem",
        // },
        container: {
            center: true,
            padding: {
                DEFAULT: "11rem",
                sm: "2rem",
                lg: "14rem",
                xl: "15rem",
                "2xl": "6rem",
            },
        },
        extend: {
            //:کلاس جدید را به قبلی ها اضاغه میکند
            width: {
                22: "7rem",
            },
            boxShadow: {
                glass: "inset 0 2px 22px 0 rgba(255,255,255,0.6);",
            },
            colors: {
                newGray: colors.red,
            },
            // animation: ["hover"],
        },
    },
    variants: {
        extend: { animation: ["hover"] },
    },
    plugins: [
        // require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/line-clamp"),
    ],
};
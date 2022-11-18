/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         colors: {
            backgroundColor: "#fff9ea",
            yellow: "#ffcb45",
            orange: "#ffac4b",
            blackColor: "#1d1d1d",
         },
         fontFamily: {
            readex: ["Readex Pro", "serif"]
         },
         width: {
            maxWidth: "1200px",
         }
      },
   },
   plugins: [],
};

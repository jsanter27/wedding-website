/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        tall: 'linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.9)), url("~/public/bg-vertical.jpg");',
        wide: 'linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.9)), url("~/public/bg-horizontal.jpg");',
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};

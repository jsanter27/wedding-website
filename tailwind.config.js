/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');
const Color = require('color');
const lighten = (clr, val) => Color(clr).lighten(val).rgb().string();
const darken = (clr, val) => Color(clr).darken(val).rgb().string();

const THEME_COLORS = {
  'palette-1': '#FFFFFF',
  'palette-2': '#CCD5D2',
  'palette-3': '#ACBEBE',
  'palette-4': '#8EA6AE',
  'palette-5': '#778E9F',
  'palette-6': '#6A748E',
  'palette-7': '#635A77',
};

const PROCESSED_THEME_COLORS = {};
for (const [name, color] of Object.entries(THEME_COLORS)) {
  PROCESSED_THEME_COLORS[name] = color;
  PROCESSED_THEME_COLORS[`${name}-lighter`] = lighten(color, 0.2);
  PROCESSED_THEME_COLORS[`${name}-darker`] = darken(color, 0.2);
}

module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        tall: 'linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.4)), url("~/public/bg-vertical.jpg");',
        wide: 'linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.4)), url("~/public/bg-horizontal.jpg");',
      },
      container: {
        center: true,
      },
      colors: PROCESSED_THEME_COLORS,
    },
  },
  plugins: [],
});

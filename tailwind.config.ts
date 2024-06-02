/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-shape': "url('/banner_shape.svg')",
      },
      height: {
        'banner-height': 'calc(100% - 164px)',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  plugins: [
    require('@pyncz/tailwind-mask-image')
  ],
  corePlugins: {
    maskImage: true,
  },
};

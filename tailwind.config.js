module.exports = {
  purge: {
    enabled: true,
    content: ['./apps/webapp/**/*.{html,ts}', './libs/**/*.{html,ts}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

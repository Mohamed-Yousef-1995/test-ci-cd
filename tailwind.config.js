export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './.storybook/**/*.{js,ts,jsx,tsx}',
    './src/**/*.css', // ✅ Also scan CSS files if you're using @apply!
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

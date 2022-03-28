const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './src/**/*.vue',
    './src/**/*.js',
    './src/**/*.jsx',
    './src/**/*.html',
    './src/**/*.pug',
    './src/**/*.md'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['PT Sans', 'ui-sans-serif', 'sans-serif'],
    },
    extend: {
      typography(theme) {
        return {
          DEFAULT: {
            css: {
              blockquote: {
                color: theme("colors.slate.700"),
                borderLeftColor: theme("colors.slate.300"),
                backgroundColor: theme("colors.indigo.100"),
                padding: "0.1em 1em",
              },
            },
          },
          dark: {
            css: {
              color: theme("colors.slate.100"),
              '[class~="lead"]': { color: theme("colors.slate.100") },
              a: { color: theme("colors.slate.100") },
              strong: { color: theme("colors.teal.100") },
              "ul > li::before": { backgroundColor: theme("colors.slate.600") },
              hr: { borderColor: theme("colors.slate.500") },
              blockquote: {
                color: theme("colors.indigo.50"),
                borderLeftColor: theme("colors.slate.400"),
                backgroundColor: theme("colors.slate.600"),
                padding: "0.1em 1em",
              },
              h1: { color: theme("colors.slate.100") },
              h2: { color: theme("colors.slate.100") },
              h3: { color: theme("colors.slate.100") },
              h4: { color: theme("colors.slate.100") },
              code: { color: theme("colors.slate.100") },
              "a code": { color: theme("colors.slate.100") },
              pre: {
                color: theme("colors.slate.200"),
                backgroundColor: theme("colors.slate.500"),
              },
              thead: {
                color: theme("colors.slate.100"),
                borderBottomColor: theme("colors.slate.600"),
              },
              "tbody tr": { borderBottomColor: theme("colors.slate.800") },
            },
          },
        }
      },
    },
  },
  variants: {
    extend: { typography: ["dark"] }
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}

const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.html',
      './src/**/*.pug',
      './src/**/*.md'
    ]
  },
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
                color: theme("colors.gray.700"),
                borderLeftColor: theme("colors.gray.300"),
                backgroundColor: theme("colors.blue.50"),
                padding: "0.1em 1em",
              },
            },
          },
          dark: {
            css: {
              color: theme("colors.gray.100"),
              '[class~="lead"]': { color: theme("colors.gray.100") },
              a: { color: theme("colors.gray.100") },
              strong: { color: theme("colors.yellow.50") },
              "ul > li::before": { backgroundColor: theme("colors.gray.700") },
              hr: { borderColor: theme("colors.gray.500") },
              blockquote: {
                color: theme("colors.yellow.50"),
                borderLeftColor: theme("colors.gray.500"),
                backgroundColor: theme("colors.gray.700"),
                padding: "0.1em 1em",
              },
              h1: { color: theme("colors.gray.100") },
              h2: { color: theme("colors.gray.100") },
              h3: { color: theme("colors.gray.100") },
              h4: { color: theme("colors.gray.100") },
              code: { color: theme("colors.gray.100") },
              "a code": { color: theme("colors.gray.100") },
              pre: {
                color: theme("colors.gray.200"),
                backgroundColor: theme("colors.gray.500"),
              },
              thead: {
                color: theme("colors.gray.100"),
                borderBottomColor: theme("colors.gray.700"),
              },
              "tbody tr": { borderBottomColor: theme("colors.gray.800") },
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

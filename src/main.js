// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import './css/main.css'

const fontsCss = `
/* pt-sans-regular - latin */
@font-face {
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/pt-sans-v12-latin-regular.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/pt-sans-v12-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/pt-sans-v12-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/pt-sans-v12-latin-regular.woff') format('woff'), /* Modern Browsers */
       url('/fonts/pt-sans-v12-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/pt-sans-v12-latin-regular.svg#PTSans') format('svg'); /* Legacy iOS */
}
/* pt-sans-italic - latin */
@font-face {
  font-family: 'PT Sans';
  font-style: italic;
  font-weight: 400;
  src: url('/fonts/pt-sans-v12-latin-italic.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/pt-sans-v12-latin-italic.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/pt-sans-v12-latin-italic.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/pt-sans-v12-latin-italic.woff') format('woff'), /* Modern Browsers */
       url('/fonts/pt-sans-v12-latin-italic.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/pt-sans-v12-latin-italic.svg#PTSans') format('svg'); /* Legacy iOS */
}
/* pt-sans-700 - latin */
@font-face {
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 700;
  src: url('/fonts/pt-sans-v12-latin-700.eot'); /* IE9 Compat Modes */
  src: local(''),
       url('/fonts/pt-sans-v12-latin-700.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('/fonts/pt-sans-v12-latin-700.woff2') format('woff2'), /* Super Modern Browsers */
       url('/fonts/pt-sans-v12-latin-700.woff') format('woff'), /* Modern Browsers */
       url('/fonts/pt-sans-v12-latin-700.ttf') format('truetype'), /* Safari, Android, iOS */
       url('/fonts/pt-sans-v12-latin-700.svg#PTSans') format('svg'); /* Legacy iOS */
}`

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Add attributes to BODY tag
  head.bodyAttrs = { class: 'text-gray-800 bg-gray-50 dark:bg-gray-700 dark:text-gray-50' }

  // Add meta tags
  head.meta.push({
    name: 'description',
    content: 'Alejo Figueroa - Software Developer - Personal Site'
  })

  head.style.push({
    type: 'text/css',
    cssText: fontsCss,
  })
}

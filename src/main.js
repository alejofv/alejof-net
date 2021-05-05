// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import './css/main.css'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  // Add attributes to BODY tag
  head.bodyAttrs = { class: 'dark:bg-gray-800 dark:text-white' }

  // Add meta tags
  head.meta.push({
    name: 'description',
    content: 'Alejo Figueroa - Software Developer - Personal Site'
  })
}

// import devtools from '@vue/devtools'

// // @ts-ignore
// if (process.env.NODE_ENV === 'development') {
//   // devtools.connect(/* host, port */)
//   // (window as any) = devtools
//   // @ts-ignore
//   window.devtools = devtools
// }

import type { App } from 'vue'
// import 'uno.css' // Not required for astro unocss integration
import '@/assets/css/main.css'
import 'prismjs/themes/prism-tomorrow.css'

// import pinia from '@/plugins/pinia'
// import head from '@/plugins/head'
// import vuetify from './plugins/vuetify'
import '@/plugins/youtube.client'

export default (app: App) => {
  // // NOTE: Moved these into HomePage.vue & MetaTags.vue islands
  // app.use(pinia)
  // app.use(head)
  // app.use(vuetify)
}

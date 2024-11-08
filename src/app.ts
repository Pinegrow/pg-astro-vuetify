// import devtools from '@vue/devtools'

// // @ts-ignore
// if (process.env.NODE_ENV === 'development') {
//   // devtools.connect(/* host, port */)
//   // (window as any) = devtools
//   // @ts-ignore
//   window.devtoolsKey = devtools
// }

import 'uno.css'

import type { App } from 'vue'
import pinia from '@/plugins/pinia'

import vuetify from '@/plugins/vuetify'
export default (app: App) => {
  app.use(pinia)
  app.use(vuetify)
}

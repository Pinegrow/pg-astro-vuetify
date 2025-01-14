import 'uno.css'

import type { App } from 'vue'
import pinia from '@/plugins/pinia'
import head from '@/plugins/head'
import vuetify from '@/plugins/vuetify'

export default (app: App) => {
  app.use(pinia)
  app.use(head)
  app.use(vuetify)
}

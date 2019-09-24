import DefaultLayout from '~/layouts/Default.vue'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

export default function (Vue, { appOptions, router, head, isClient }) {
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto+Noto+Sans:300,400,500,700,400italic|Material+Icons'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://use.fontawesome.com/releases/v5.7.0/css/all.css'
  })
  
  const opts = { }
  Vue.use(Vuetify)
  
  appOptions.vuetify = new Vuetify(opts);

  Vue.component('Layout', DefaultLayout)
}

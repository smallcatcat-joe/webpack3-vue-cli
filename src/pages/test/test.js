/* global Vue */

// style import
import 'assets/css/reset.css'
import './test.scss'
// plugin import
import 'plugin/register-hooks'
import 'plugin/rxjs'
import 'plugin/axios'
// components import
import App from './test.vue'

Vue.config.productionTip = false

/* eslint no-new: "off" */
new Vue({
  el: '#app',
  render: h => h(App)
})

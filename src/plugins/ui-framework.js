'use strict'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faInfoCircle, faBars, faAngleLeft, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

export default (Vue) => {
  library.add(faHome, faInfoCircle, faBars, faAngleLeft, faSignOutAlt)
  Vue.component('fa-icon', FontAwesomeIcon)
  Vue.use(VueMaterial)
}

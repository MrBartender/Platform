'use strict'

import firebase from 'firebase'

export default (Vue) => {
  Vue.mixin({
    methods: {
      signOut () {
        firebase.auth().signOut()
          .then(() => {
            location.reload()
          })
      }
    }
  })
}

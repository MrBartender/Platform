'use strict'

import firebase from 'firebase'

export default (Vue) => {
  Vue.mixin({
    data: () => ({
      googleAuth: null
    }),
    mounted () {
      this.googleAuth = new firebase.auth.GoogleAuthProvider()
    },
    methods: {
      signIn () {
        firebase.auth().signInWithRedirect(this.googleAuth)
      }
    }
  })
}

'use strict'

const RouteManager = {
  _routes: {},
  routes (r) {
    this._routes = r
  },

  _maskCollection (links, fields) {
    const maskedLinks = []

    links.forEach((link) => {
      maskedLinks.push(this._applyMask(link, fields))
    })

    return maskedLinks
  },

  _applyMask (link, fields) {
    const maskedLink = {}

    Object.keys(link)
      .filter((key) => fields.includes(key))
      .forEach((key) => {
        maskedLink[key] = link[key]
      })

    return maskedLink
  },

  mask (fields) {
    const maskedRoutes = {}

    Object.keys(this._routes).forEach((collection) => {
      maskedRoutes[collection] = this._maskCollection(this._routes[collection], fields)
    })

    return (Vue) => {
      Vue.filter('capitalize', (value) => {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      })

      Vue.mixin({
        data: () => ({
          links: maskedRoutes
        })
      })
    }
  },

  all () {
    const linkCollections = Object.keys(this._routes)
      .map((collection) => this._routes[collection])

    return [].concat.apply([], linkCollections)
  }
}

export default RouteManager

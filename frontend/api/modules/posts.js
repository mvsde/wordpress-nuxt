import connector from '../connector'

export default {
  list () {
    return connector.get(`posts`)
  },

  single (slug) {
    return connector.get(`posts?slug=${slug}`)
  }
}

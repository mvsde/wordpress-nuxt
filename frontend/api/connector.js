import ky from 'ky'

export default ky.extend({
  prefixUrl: 'http://localhost:8000/wp-json/wp/v2'
})

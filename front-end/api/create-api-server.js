import axios from 'axios'
import cookieBus from './cookieBus.js'

const api = axios.create()

export default function (data) {
  if (!data.headers) data.headers = {}
  if (cookieBus.$cookie) {
    data.headers.cookie = cookieBus.$cookie
    data.headers['x-zyt76-uid'] = cookieBus.$cookieObj['zyt76-uid']
  }
  return api(data)
}

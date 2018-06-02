import axios from 'axios'
import cookieBus from './cookieBus.js'

const api = axios.create()

export default function (data) {
  if (!data.headers) data.headers = {}
  data.headers.cookie = cookieBus.$cookie
  return api(data)
}

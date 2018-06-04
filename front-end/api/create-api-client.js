import axios from 'axios'

const api = axios.create()

export default async function (data) {
  if (!data.headers) data.headers = {}
  // data.headers['X-zyt76-UID'] = window.$cookies.get('connect.sid')
  data.xsrfCookieName = 'zyt76-uid'
  data.xsrfHeaderName = 'X-zyt76-UID'
  // let cookie = window.$cookies.keys()
  // console.log(data)
  // console.log(cookie)
  let result = await api(data)
  return result
}

// export default axios.create({
//   xsrfCookieName: 'connect.sid',
//   xsrfHeaderName: 'X-zyt76-UID'
// })

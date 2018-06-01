import axios from 'axios'
import url from '../api/url.js'

export default {
  FETCH_HOME: async ({ commit, state }) => {
    let {data} = await axios({
      method: 'get',
      url: url.home
    })
    console.log(data)
  }
}

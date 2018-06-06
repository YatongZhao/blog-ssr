import axios from '../api/index.js'
import url from '../api/url.js'

export default {
  FETCH_HOME: async ({ commit, state }) => {
    let {data} = await axios({
      method: 'get',
      url: url.home
    })
    if (data.code === 0) {
      commit('RESET_SKILL_LIST', data.data)
    }
  }
}

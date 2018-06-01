<template>
  <div>
    hello world
    hello world
    <router-link to="/list">list</router-link>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData () {
    let {data} = axios({
      method: 'get',
      url: 'http://zyt76.com/api/skill.json'
    })
    console.log(data)
  }
}
</script>

<style>

</style>

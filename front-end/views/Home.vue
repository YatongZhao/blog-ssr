<template>
  <div>
    <div>hello world</div>
    <router-link to="/list">list</router-link>
    <ul>
      <li v-for="item in skillList" :key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData ({store, route}) {
    return await store.dispatch('FETCH_HOME')
  },
  computed: {
    skillList () { return this.$store.state.skillList }
  }
}
</script>

<style>

</style>

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
  async asyncData ({store, route}) {
    return store.dispatch('FETCH_HOME')
  }
}
</script>

<style>

</style>

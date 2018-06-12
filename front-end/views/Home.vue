<template>
  <div>
    <z-header></z-header>
    <div>hello world</div>
    <router-link to="/list">list</router-link>
    <ul>
      <li v-for="item in skillList" :key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
import ZHeader from '../components/ZHeader.vue'

export default {
  async asyncData ({store, route}) {
    return await store.dispatch('FETCH_HOME')
  },
  components: {
    ZHeader
  },
  computed: {
    skillList () { return this.$store.state.skillList }
  }
}
</script>

<style>

</style>

<template>
  <div class="home">
    <ul class="home-skill_list">
      <li
        v-for="item in skillList"
        :key="item.id"
        class="home-skill_list-item"
        :class="`level-${item.level}`">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData ({store, route}) {
    return await store.dispatch('FETCH_HOME')
  },
  computed: {
    skillList () { return this.$store.state.skillList }
  }
}
</script>

<style lang="stylus">
  .home
    background-color #fff
    .home-skill_list-item
      box-shadow 0 -2px 2px rgba(0, 0, 0, .1)
      color #fff
    .level-0
      background-color rgba(255, 0, 0, .4)
    .level-1
      background-color rgba(255, 0, 0, .6)
    .level-2
      background-color rgba(255, 0, 0, .8)
    .level-3
      background-color rgba(255, 0, 0, 1)
</style>

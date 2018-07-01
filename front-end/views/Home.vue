<template>
  <div class="home">
    <div class="markdown-body" v-html="hw"></div>
    <router-link to="/list">list</router-link>
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
import commonmark from 'commonmark'

export default {
  async asyncData ({store, route}) {
    return await store.dispatch('FETCH_HOME')
  },
  data () {
    return {
      hw: '',
      hwo: ''
    }
  },
  computed: {
    skillList () { return this.$store.state.skillList }
  },
  mounted () {
    let reader = new commonmark.Parser()
    let writer = new commonmark.HtmlRenderer({safe: true})
    let parsed = reader.parse('### Hello ### \n\n > ***world<div>222</div>11*** \n\n > ```function () {<div>222</div>} ddd```')
    let result = writer.render(parsed)
    this.hw = result
  }
}
</script>

<style lang="stylus">
  .home
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

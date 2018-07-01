<template>
  <div class="home">
    <ul class="home-skill_list">
      <li
        v-for="item in skillList"
        :key="item.id"
        class="home-skill_list-item"
        :class="`level-${item.level}`">{{item.name}}</li>
    </ul>
    <div class="markdown-body" v-html="hw"></div>
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
      hw: ''
    }
  },
  computed: {
    skillList () { return this.$store.state.skillList }
  },
  mounted () {
    let reader = new commonmark.Parser()
    let writer = new commonmark.HtmlRenderer({safe: true})
    let parsed = reader.parse('***Thanks for watching!***')
    let result = writer.render(parsed)
    this.hw = result
  }
}
</script>

<style lang="stylus">
  .home
    .home-skill_list
      background-color #0ff
    .home-skill_list-item
      box-shadow 0 -1px 0px #fff
      padding-bottom 1px
      // border-bottom 1px solid #fff
      color #fff
    .level-0
      background-color rgba(0, 0, 0, .4)
    .level-1
      background-color rgba(0, 0, 0, .6)
    .level-2
      background-color rgba(0, 0, 0, .8)
    .level-3
      background-color rgba(0, 0, 0, 1)
</style>

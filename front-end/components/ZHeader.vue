<template>
  <div class="contanier">
    <header class="header">
      <span class="header_logo">zyt76</span>
      <span class="icon-menu header_menu"></span>
    </header>
    <div class="markdown-body" v-html="hw"></div>
    <router-link to="/list">list</router-link>
  </div>
</template>

<script>
import commonmark from 'commonmark'
export default {
  data () {
    return {
      hw: ''
    }
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

<style lang="stylus" scoped>
.contanier
  position fixed
  left 0
  top 0
  width 100%
  z-index -1
.header
  background-color: #f60
  color: #fff
  height: .8rem
  display flex
  justify-content space-between
.header_logo
  font-size .4rem
  line-height .8rem
  padding-left .2rem
.header_menu
  display block
  font-size .4rem
  padding .2rem
</style>

<template>
  <div>
    <div class="brace"></div>
    <div class="contanier">
      <!-- <header class="header">
        <span class="header_logo">zyt76</span>
        <span class="icon-menu header_menu"></span>
      </header> -->
      <div class="desc">
        <div class="markdown-body" v-html="hw"></div>
      </div>
    </div>
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
    let parsed = reader.parse('***Hello, welcome to my blog!*** \n\n > ***email: zyt768295828@163.com*** \n\n > ***github: https://github.com/zyt76***')
    let result = writer.render(parsed)
    this.hw = result
  }
}
</script>

<style lang="stylus" scoped>
.brace
  margin-top .4rem
.contanier
  position fixed
  left 0
  top 0
  width 100%
  z-index 1
  height .4rem
  overflow hidden
.header
  background-color: #f60
  color: #fff
  height: .6rem
  display flex
  justify-content space-between
.header_logo
  font-size .5rem
  line-height .6rem
  padding-left .05rem
.header_menu
  display block
  font-size .5rem
  padding .05rem
.desc
  // border-top-left-radius 8px
  // border-top-right-radius 8px
  // border-left 1px solid #f60
  // border-right 1px solid #f60
  background-color #fff
  height 4rem
</style>

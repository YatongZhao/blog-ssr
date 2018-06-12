<template>
  <div class="contanier">
    <header class="header">
      <span class="header_logo">zyt76</span>
      <span class="icon-menu header_menu"
        :class="{active: showMenu}"
        @click="handleMenu"></span>
    </header>
    <div class="header-menu"
      :class="{active: showMenu}">

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showMenu: false
    }
  },
  methods: {
    handleMenu () {
      this.showMenu = !this.showMenu
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  position relative
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
  &.active
    color #fff
.header-menu
  border none
  height 0rem
  transition all .3s
  position absolute
  width 100%
  background-color #fff
  &.active
    border-bottom 1px solid #ccc
    height 5rem
</style>

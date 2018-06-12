<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
import resize from './util/resize.js'

export default {
  mounted () {
    resize(document, window)
  }
}
</script>

<style>

</style>

<template>
  <div id="app">
    <z-header></z-header>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
import ZHeader from './components/ZHeader.vue'

export default {
  components: {
    ZHeader
  }
}
</script>

<style>

</style>

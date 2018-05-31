<template>
  <div>
    hello world
    <router-link to="/list">list</router-link>
  </div>
</template>

<script>
export default {
  asyncData () {
    console.log('ok')
  }
}
</script>

<style>

</style>

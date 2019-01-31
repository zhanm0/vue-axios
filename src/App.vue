<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

<style lang="stylus" scoped>

</style>
<script>
  export default {
      name: 'App',
  }
</script>

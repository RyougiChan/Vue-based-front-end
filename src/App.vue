<template>
  <div id="app">
    <transition name="translate">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  watch:{
    $route(to, from){
      window.previousRoute = from;
    }
  },
}
</script>

<style lang="scss" >
@import "~@/styles/reset.scss";
@import "~@/styles/global.scss";
</style>

<style scoped>
@import "~@/styles/material-icons.css";
</style>

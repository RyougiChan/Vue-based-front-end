<template>
  <div id="app">
    <transition name="translate">
      <router-view></router-view>
    </transition>
    <div class="return-button" @click="historyBack" v-show="showBackButtonElement">
      <i class="material-icons">arrow_back</i>
    </div>
  </div>
</template>

<script>
import eventBus from './scripts/eventbus.js';

export default {
  name: 'app',
  watch:{
    $route(to, from){
      window.previousRoute = from;
      this.showBackButtonElement = (this.$router.history.current.path != '/');
    }
  },
  data() {
    return {
      showBackButtonElement: false
    }
  },
  methods: {
    historyBack() {
      if(!window.previousRoute) {
        window.previousRoute = /(\/\w+).*/.exec(this.$router.history.current.path)[1];
        window.console.log(window.previousRoute);
      }
      window.console.log('App',this.$router.history.current.query);
      eventBus.$emit('query',this.$router.history.current.query);
      this.$router.replace(window.previousRoute)
    }
  },
  created() {
    this.showBackButtonElement = (this.$router.history.current.path != '/');
  }
}
</script>

<style lang="scss" >
@import "~@/styles/reset.scss";
@import "~@/styles/global.scss";
</style>

<style scoped>
@import "~@/styles/material-icons.css";
</style>

<template>
  <div id="app">
    <transition name="translate">
      <keep-alive exclude="ArticleContent">
        <router-view></router-view>
      </keep-alive>
    </transition>
    <div class="return-button" @click="historyBack" v-show="showBackButtonElement">
      <i class="material-icons">arrow_back</i>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  watch:{
    $route(){
      this.showBackButtonElement = (this.$router.history.current.path != '/');
    }
  },
  data() {
    return {
      showBackButtonElement: false,
      a: 0
    }
  },
  methods: {
    historyBack() {
      this.$router.history.go(-1)
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

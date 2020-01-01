<template>
  <div id="y-project">
    <transition-group name="translate">
      <Header key="header" />
      <router-view key="content"></router-view>
      <Footer key="footer" />
    </transition-group>
    <div class="return-button" @click="historyBack" v-show="showBackButtonElement">
      <i class="material-icons">arrow_back</i>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "y-project",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      showBackButtonElement: true
    }
  },
  methods: {
    historyBack() {
      if(!window.previousRoute) {
        window.previousRoute = /(\/\w+).*/.exec(this.$router.history.current.path)[1];
        window.console.log(window.previousRoute);
      }
      this.$router.replace(window.previousRoute)
    },
    appendBackButton(isAppend) {
      window.console.log(isAppend, this.backButtonElement);
      this.backButtonElement.style.display = isAppend ? 'block' : 'none'
    }
  },
  mounted () {
    let projectElement = document.getElementsByClassName('y-project')[0];
    if(projectElement) {
      projectElement.style.height = (document.documentElement.clientHeight - 212) + 'px';
    }
    window.console.log(this.$router.history.current.path);
    this.showBackButtonElement = this.$router.history.current.path !== '/project/'
  },
  watch: {
    $route(){
      this.showBackButtonElement = this.$router.history.current.path !== '/project/'
    }
  }
};
</script>

<style>
</style>

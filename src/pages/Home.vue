<template>
  <div id="home">
    <Header />
    <div id="main-container">
      <div id="home-abstract">
        <h4>Welcome to my space</h4>
        <img id="desktop-logo" src="../images/logo.png" alt="RyougiChan.logo">
        <p id="home-desciption">
          Welcome to <a href="https://github.com/RyougiChan">RyougiChan</a>'s space, 
          a personal space that records every bit of my work and life. 
          Here I share some of my works, notes and experiences. Please feel free to look through those.
          Finally, I wish you a nice day!
        </p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  data() {
    return {
      loadingInstance: undefined
    }
  },
  name: 'app',
  components: {
    Header,
    Footer
  },
  created () {
    this.loadingInstance = this.$loading({
      lock: true,
      text: "Wait a minutes, we are fetching data from remote server.",
      spinner: "el-icon-loading",
      background: "rgba(255, 255, 255, 1.0)"
    });
  },
  mounted () {
    this.loadingInstance.close();
  },
}
</script>

<style lang="scss" scope>
@import "~@/styles/home.scss";
</style>

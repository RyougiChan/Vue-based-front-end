<template>
  <div id="y-project">
    <transition-group name="translate">
      <Header key="header" />
      <router-view key="content"></router-view>
      <Footer key="footer" />
    </transition-group>
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
  }
};
</script>

<style>
</style>

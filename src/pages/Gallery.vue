<template>
  <div id="gallery">
    <transition-group name="translate">
      <Header key="header" />
      <router-view key="content"></router-view>
      <Footer key="footer" />
    </transition-group>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  methods: {
    enter(el) {
      window.console.log('trigger enter', el);
    }
  }
}
</script>

<style>

</style>

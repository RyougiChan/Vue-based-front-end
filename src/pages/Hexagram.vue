<template>
  <div id="hexagram">
    <iframe
      class="fullscreen"
      id="frame-hexagram"
      src="https://example.cirnon.com/hexagram/"
      frameborder="0"
      width="100%"
      height="100%"
    ></iframe>
    <div class="return-button" @click="historyBack">
      <i class="material-icons">arrow_back</i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      beforeRoute: ""
    };
  },
  methods: {
    historyBack() {
      if(window.previousRoute) {
      this.$router.replace(window.previousRoute)
      }
    }
  },
  mounted () {
    document.getElementById('hexagram').style.height = (document.documentElement.clientHeight - 212) + 'px';
  },
};
</script>

<style>

</style>

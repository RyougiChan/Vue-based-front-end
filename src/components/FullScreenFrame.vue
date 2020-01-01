<template>
  <iframe
      class="fullscreen"
      :src="src"
      frameborder="0"
      width="100%"
      height="100%"
    ></iframe>
</template>

<script>
export default {
  name: "FullscreenFrame",
  props: {
    src: String
  }
}
</script>
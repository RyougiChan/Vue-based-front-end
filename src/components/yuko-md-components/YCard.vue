<template>
  <div id="card">
    <div class="yuko-card_container">
      <div class="yuko-card_avatar">
        <div class="yuko-card_avatar-icon">
          <i class="material-icons"></i>
        </div>
        <div class="yuko-card_avatar-title">{{ title }}</div>
      </div>
      <div class="yuko-card_content">
        {{ content }}
      </div>
      <div class="yuko-card_trigger">
        <div>
          <span><a :href=link>Read</a></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'YCard',
  props: {
    title: String,
    content: String,
    link: String
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/yuko-md/ycard.scss";
</style>

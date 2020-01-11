<template>
  <div class="y-imgcard">
    <div class="yuko-imgcard">
      <div class="yuko-imgcard_title">
        <h4>{{ title }}</h4>
      </div>
      <div class="yuko-imgcard_info">
        <p v-html="abstract"></p>
      </div>
      <div class="yuko-imgcard_content">
        <a :href="link">
          <div class="yuko-imgcard_content-img">
            <img :src="imgLink" />
          </div>
          <div class="yuko-imgcard_content-text">
            <p v-html="description"></p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "YCard",
  props: {
    title: String,
    abstract: String,
    description: String,
    link: String,
    imgLink: String
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/yuko-md/yimagecard.scss";
</style>

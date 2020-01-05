<template>
  <div id="article-content">
    <Header />
    <div id="main-container">
      <div class="content-section" v-html="article.content">
        <h3>{{ article.title }}</h3>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
import axios from "axios";

export default {
  data() {
    return {
      article: {
        title: "",
        content: ""
      }
    };
  },
  components: {
    Header,
    Footer
  },
  props: ["id"],
  mounted() {
    axios
      .get(process.env.VUE_APP_APIURL + "/article/?id=" + this.id)
      .then(response => {
        if (response.data.errorCode === 0) {
          let article = response.data.result;
          this.article.title = article.title;
          this.article.subtitle = article.subtitle;
          this.article.content = article.content;
          this.article.authorName = article.authorName;
          this.article.coverUrl = process.env.VUE_APP_IMGURL + article.coverUrl;
          this.$nextTick(function() {
            window.scroll(0, 0);
            let codes = document.getElementsByTagName("code");
            for (let i = 0; i < codes.length; i++) {
              let ce = codes[i];
              ce.innerHTML = hljs.highlightAuto(ce.textContent).value;
            }
          });
        }
      })
      .catch(message => {
        window.console.log(message);
      });
  }
};
</script>

<style>
</style>

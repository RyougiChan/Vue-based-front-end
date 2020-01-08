<template>
  <div id="article-content">
    <Header />
    <div id="main-container">
      <div class="content-section">
        <h3>{{ article.title }}</h3>
        <div v-html="article.content"></div>
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
      },
      loadingInstance: undefined
    };
  },
  components: {
    Header,
    Footer
  },
  props: ["id"],
  created () {
    this.loadingInstance = this.$loading({
      lock: true,
      text: "Loading",
      spinner: "el-icon-loading",
      background: "rgba(255, 255, 255, 0.7)"
    });
  },
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
            let codes = document.getElementsByTagName("code");
            for (let i = 0; i < codes.length; i++) {
              let ce = codes[i];
              ce.innerHTML = hljs.highlightAuto(ce.textContent.replace(/\n\s{1,8}/gm, '\n')).value;
            }
          });
        }
        this.loadingInstance.close();
        window.scroll(0,0)
      })
      .catch(message => {
        this.loadingInstance.close();
        window.console.log(message);
        const h = this.$createElement;
        this.$notify({
          title: 'ERROR',
          message: h('i', { style: 'color: #009688'}, 'We are sorry but data missing due to unknown factors ",,ԾㅂԾ,,"'),
          position: 'bottom-right',
          duration: 5000
        });
      });
  }
};
</script>

<style>
</style>

<template>
  <div id="y-article">
    <Header />
    <div id="main-container">
      <div class="content-section">
        <YCard 
          v-for="(article, index) in articleList" :key="index"
          :title="article.title" 
          :abstract="article.abstract"
          :link="article.link"
        />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import YCard from '../components/yuko-md-components/YCard'
import axios from 'axios'

export default {
  data() {
    return {
      articleList: []
    }
  },
  components: {
    Header,
    Footer,
    YCard
  },
  mounted() {
    axios.post(process.env.VUE_APP_APIURL + '/article/list', {
      page: 1,
      limit: 8,
      orderBy: {
        property: 'modifiedTime'
      },
      status: 1
    })
    .then((response) => {
      window.console.log(response);
      let resData = response.data;
      this.articleList = [];
      window.console.log(this);
      window.console.log(this.articleList);
      Array.from(resData.result.content).forEach(d => {
        this.articleList.push({
          id: d.id,
          title: d.title,
          abstract: d.abs,
          description: d.content,
          link: '#/article/' + d.id,
          imgLink: process.env.VUE_APP_IMGURL + d.coverUrl
        })
      });
      window.console.log(this.articleList.length);
    })
    .catch((error) => {
      window.console.log(error);
    });
  }
}
</script>

<style>

</style>

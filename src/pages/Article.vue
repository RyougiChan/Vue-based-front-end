<template>
  <div id="y-article">
    <Header />
    <div id="main-container">
      <div class="content-section">
        <YCard
          v-for="(article, index) in articleList"
          :key="index"
          :title="article.title"
          :abstract="article.abstract"
          :link="article.link"
        />

        <el-pagination
          :hide-on-single-page="pager.pageCount <= 1"
          :page-size="pager.pageSize"
          layout="prev, pager, next"
          :total="pager.total"
          :current-page="pager.currentPage"
          @prev-click="handlePagerClick(pager.currentPage - 1)"
          @next-click="handlePagerClick(pager.currentPage + 1)"
          @current-change="handlePagerClick"
        ></el-pagination>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
import YCard from "../components/yuko-md-components/YCard";
import axios from "axios";

export default {
  data() {
    return {
      pager: {
        total: 0,
        pageSize: 8,
        pageCount: 0,
        currentPage: 1,
      },
      articleList: [],
    };
  },
  components: {
    Header,
    Footer,
    YCard
  },
  methods: {
    handlePagerClick(current) {
      if(current < 1 || current > this.pager.pageCount) return;
      this.pager.currentPage = current;
      Object.assign(this.$router.history.current.params, { currentPage: this.pager.currentPage })
      window.console.log('this.$router.history.current:', this.$router.history.current)
      this.loadData(true);
    },
    loadData(resetScroll) {
      axios
      .post(process.env.VUE_APP_APIURL + "/article/list", {
        page: this.pager.currentPage,
        limit: this.pager.pageSize,
        orderBy: {
          property: "modifiedTime"
        },
        status: 1
      })
      .then(response => {
        let resData = response.data;
        this.articleList = [];
        this.pager.total = resData.result.totalElements;
        this.pager.pageCount = resData.result.totalPage;
        Array.from(resData.result.content).forEach(d => {
          this.articleList.push({
            id: d.id,
            title: d.title,
            abstract: d.abs,
            description: d.content,
            link: "#/article/" + d.id,
            imgLink: process.env.VUE_APP_IMGURL + d.coverUrl
          });
        });
        if(resetScroll)window.scroll(0,0)
      })
      .catch(error => {
        window.console.log(error);
      });
    }
  },
  created(){
    window.console.log('this.$router.history.current:', this.$router.history.current)
    let qp = this.$router.history.current.params;
    if(qp.currentPage) this.pager.currentPage = qp.currentPage;
    this.loadData();
    if(qp.scroll) window.scroll(qp.scroll.x, qp.scroll.y);
  }
};
</script>

<style>
</style>

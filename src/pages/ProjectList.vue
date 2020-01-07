<template>
  <div id="project">
    <div id="main-container">
      <div class="content-section">
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

        <p v-for="(project, index) in projectList" :key="index">
        <YImageCard 
          :title="project.title" 
          :abstract="project.abstract"
          :description="project.description"
          :link="project.link"
          :imgLink="project.imgLink"
        />
        </p>
        
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
  </div>
</template>

<script>
import YImageCard from '../components/yuko-md-components/YImageCard'
import axios from 'axios'

export default {
  data() {
    return {
      pager: {
        total: 0,
        pageSize: 8,
        pageCount: 0,
        currentPage: 1,
      },
      projectList: [],
      loadingInstance: undefined
    }
  },
  components: {
    YImageCard,
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
      axios.post(process.env.VUE_APP_APIURL + '/project/list', {
        page: this.pager.currentPage,
        limit: this.pager.pageSize,
        orderBy: {
          property: 'id'
        },
        status: 1
      })
      .then((response) => {
        window.console.log(response);
        let resData = response.data;
        this.projectList = [];
        this.pager.total = resData.result.totalElements;
        this.pager.pageCount = resData.result.totalPage;
        Array.from(resData.result.content).forEach(d => {
          this.projectList.push({
            title: d.title,
            abstract: d.abs,
            description: d.content,
            link: '#/project/' + d.id,
            imgLink: process.env.VUE_APP_IMGURL + d.coverUrl
          })
        });
        if(resetScroll) window.scroll(0,0);
        this.loadingInstance.close();
      })
      .catch((error) => {
        window.console.log(error);
        const h = this.$createElement;
        this.$notify({
          title: 'ERROR',
          message: h('i', { style: 'color: red'}, 'Obtain article list error.')
        });
        this.loadingInstance.close();
      });
    }
  },
  created(){
    this.loadingInstance = this.$loading({
      lock: true,
      text: "Loading",
      spinner: "el-icon-loading",
      background: "rgba(255, 255, 255, 0.7)"
    });

    window.console.log('this.$router.history.current:', this.$router.history.current)
    let qp = this.$router.history.current.params;
    if(qp.currentPage) this.pager.currentPage = qp.currentPage;
    this.loadData();
    if(qp.scroll) window.scroll(qp.scroll.x, qp.scroll.y);
  }
}
</script>

<style>

</style>

<template>
  <div id="project">
    <div id="main-container">
      <div class="content-section">
        <p v-for="(project, index) in projectList" :key="index">
        <YImageCard 
          :title="project.title" 
          :abstract="project.abstract"
          :description="project.description"
          :link="project.link"
          :imgLink="project.imgLink"
        />
        </p>
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
      projectList: []
    }
  },
  components: {
    YImageCard
  },
  mounted () {
    axios.post(process.env.VUE_APP_APIURL + '/project/list', {
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
      this.projectList = [];
      window.console.log(this);
      window.console.log(this.projectList);
      Array.from(resData.result.content).forEach(d => {
        this.projectList.push({
          title: d.title,
          abstract: d.abs,
          description: d.content,
          link: '#/project/' + d.id,
          imgLink: process.env.VUE_APP_IMGURL + d.coverUrl
        })
      });
      window.console.log(this.projectList.length);
    })
    .catch((error) => {
      window.console.log(error);
    });
  },
}
</script>

<style>

</style>

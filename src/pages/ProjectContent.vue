<template>
  <div id="md-component" class="y-project">
    <FullScreenFrame v-if="project.src && project.src.trim() !== ''" :src="project.src" />
    <div id="main-container">
      <div class="content-section">
        <h4>{{ title }}</h4>
        <p>
          <img :src="project.coverUrl" :alt="project.name" />
        </p>
        <p v-html="project.content"></p>
      </div>
    </div>
  </div>
</template>


<script>
import FullScreenFrame from "../components/FullScreenFrame";
import axios from "axios";
// import { Loading } from 'element-ui';

export default {
  data() {
    return {
      project: {
        src: "",
        name: "",
        title: "",
        content: "",
        coverUrl: ""
      },
      loadingInstance: undefined
    };
  },
  props: ["id"],
  components: {
    FullScreenFrame
  },
  created() {
    this.loadingInstance = this.$loading({
      lock: true,
      text: "Loading",
      spinner: "el-icon-loading",
      background: "rgba(255, 255, 255, 0.7)"
    });
  },
  mounted() {
    window.console.log(this.id);
    axios
      .get(process.env.VUE_APP_APIURL + "/project/?id=" + this.id)
      .then(response => {
        window.console.log(response);
        if (response.data.errorCode === 0) {
          let project = response.data.result;
          this.project.src = project.externalUrl;
          this.project.name = project.name;
          this.project.title = project.title;
          this.project.content = project.content;
          this.project.coverUrl = process.env.VUE_APP_IMGURL + project.coverUrl;
          if (project.externalUrl && project.externalUrl.trim() !== "") {
            axios
              .get(project.externalUrl)
              .then(() => {
                this.loadingInstance.close();
              })
              .catch(() => {
                this.loadingInstance.close();
                const h = this.$createElement;
                this.$notify({
                  title: "ERROR",
                  message: h(
                    "i",
                    { style: "color: #009688" },
                    "We are sorry but we cannot initialize frame content"
                  ),
                  position: "bottom-right",
                  duration: 5000
                });
              });
          } else {
            this.loadingInstance.close()
          }
        }
      })
      .catch(message => {
        window.console.log(message);
        const h = this.$createElement;
        this.$notify({
          title: "ERROR",
          message: h(
            "i",
            { style: "color: #009688" },
            'We are sorry but data missing due to unknown factors ",,ԾㅂԾ,,"'
          ),
          duration: 5000,
          position: "bottom-right"
        });
      });
  }
};
</script>
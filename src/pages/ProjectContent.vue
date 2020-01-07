<template>
  <div id="md-component" class="y-project">
    <FullScreenFrame v-if="project.src !== ''" :src="project.src" />
    <div id="main-container">
      <div class="content-section">
        <h4>{{ title }}</h4>
        <p>
          <img :src="project.coverUrl" :alt="project.name" />
        </p>
        <p>{{ project.content }}</p>
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
                  { style: "color: red" },
                  "Initial frame content error."
                )
              });
            });
        }
      })
      .catch(message => {
        window.console.log(message);
        const h = this.$createElement;
        this.$notify({
          title: "ERROR",
          message: h(
            "i",
            { style: "color: red" },
            "Obtain project content error."
          )
        });
      });
  }
};
</script>
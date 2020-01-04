<template>
  <div id="md-component" class="y-project">
    <FullScreenFrame v-if="src !== ''" :src="src" />
    <div id="main-container">
      <div class="content-section">
        <h4>{{ title }}</h4>
        <p>
          <img :src="coverUrl" :alt="name">
        </p>
        <p>
          {{ content }}
        </p>
      </div>
    </div>
  </div>
</template>


<script>
import FullScreenFrame from "../components/FullScreenFrame";
import axios from "axios";

export default {
  data() {
    return {
      src: '',
      name: '',
      title: '',
      content: '',
      coverUrl: ''
    };
  },
  props: ['id'],
  components: {
    FullScreenFrame
  },
  mounted() {
    window.console.log(this.id);
    axios
      .get(process.env.VUE_APP_APIURL + "/project/?id=" + this.id)
      .then((response) => {
        window.console.log(response);
        if(response.data.errorCode === 0) {
          let project = response.data.result;
          this.src = project.externalUrl;
          this.name = project.name;
          this.title = project.title;
          this.content = project.content;
          this.coverUrl = process.env.VUE_APP_IMGURL + project.coverUrl;
        }
      })
      .catch((message) => {
        window.console.log(message);
      });
  }
};
</script>
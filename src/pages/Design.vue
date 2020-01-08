<template>
  <div id="design">
    <div id="main-container">
      <div class="content-section hide-scrollbar" id="waterflow">
        <vue-waterfall-easy ref="waterfall" :imgsArr="pics" :reachBottomDistance=10 :maxCols=4 @scrollReachBottom="loadImages" @click="handleImgClick">
          <div slot="waterfall-over">NO MORE DESIGN</div>
        </vue-waterfall-easy>
      </div>
      <div id="display-drawer" @click="handleDrawerClick">
        <div id="display-container" class="hide-scrollbar">
          <img class="display-img" :src="designInfo.primarySrc" alt="">
          <p class="display-desc">
            {{designInfo.description}}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import vueWaterfallEasy from 'vue-waterfall-easy'

export default {
  data() {
    return {
      pics: [],
      pager: {
        total: 0,
        pageSize: 20,
        pageCount: 0,
        currentPage: 1,
      },
      designInfo: {}
    }
  },
  components: {
    vueWaterfallEasy
  },
  methods: {
    loadImages() {
      window.console.log('request', process.env.VUE_APP_APIURL + '/design/list');
      axios.post(process.env.VUE_APP_APIURL + '/design/list', {
        page: this.pager.currentPage,
        limit: this.pager.pageSize
      })
      .then((response) => {
        window.console.log(response);
        let resData = response.data;
        this.pager.total = resData.result.totalElements;
        this.pager.pageCount = resData.result.totalPage;
        window.console.log(this.pager.currentPage, this.pager.pageCount);
        if((this.pager.currentPage++) > this.pager.pageCount) {
          this.$refs.waterfall.waterfallOver();
          return;
        }
        Array.from(resData.result.content).forEach(d => {
          this.pics.push({
            id: d.id,
            name: d.name,
            description: d.description,
            imageHeight: d.imageHeight,
            imageWidth: d.imageWidth,
            addedTime: d.added_time,
            src: process.env.VUE_APP_IMGURL + '/images/design/cover/' + d.fileName,
            primarySrc: process.env.VUE_APP_IMGURL + '/images/design/primary/' + d.fileName,
          });
        });
      })
      .catch((error) => {
        window.console.log(error);
        this.$refs.waterfall.waterfallOver();
        const h = this.$createElement;
        this.$notify({
          title: 'ERROR',
          message: h('i', { style: 'color: #009688'}, 'We are sorry but data missing due to unknown factors ",,ԾㅂԾ,,"'),
          position: 'bottom-right',
          duration: 5000
        });
      });
    },
    handleImgClick(event, { index, value }) {
      window.console.log(index, value);
      document.getElementById('display-container').style.marginLeft = (event.x > window.document.documentElement.clientWidth * 0.4) ? 0 : '40%';
      document.getElementById('display-drawer').style.left = 0;
      this.designInfo = value;
    },
    handleDrawerClick(event) {
      if(event.target === document.getElementById('display-drawer')) {
        document.getElementById('display-drawer').style.left = '-100%';
      }
    }
  },
  created () {
    this.loadImages();
  },
  mounted () {
    document.getElementById('waterflow').style.height = (document.documentElement.clientHeight - document.getElementById('r-header').offsetHeight - document.querySelector('footer').offsetHeight - 65*2) + 'px';
  },
}
</script>

<style lang="scss" scope>
@import '../styles/_variables';
@import '../styles/_func';

#display-drawer {
  position: fixed;
  width: 100%;
  height: 100%;
  left: -100%;
  top: 0;
  background: theme(d-text, 0.8);
  transition: all .3s ease-in-out;

  #display-container {
    width: 60%;
    height: 100%;
    background: theme(dark);
    margin-left: 40%;
    overflow-y: scroll;

    .display-img {
      max-width: 100%;
    }
    .display-desc {
      max-width: 100%;
      word-break: break-word;
      text-align: center;
    }
    .display-spec {
      padding: 1.5rem;
      display: flex;

      .display-spec-list {
        margin-left: 2rem;
        
        li {
          line-height: 2rem;
        }

        &.display-spec-list-tag {
          text-align: right
        }
      }
    }
  }
}
</style>

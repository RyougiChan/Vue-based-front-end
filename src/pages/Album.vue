<template>
  <div id="album">
    <div id="main-container">
      <div class="content-section hide-scrollbar" id="waterflow">
        <vue-waterfall-easy ref="waterfall" :imgsArr="pics" :imgWidth=360 :reachBottomDistance=10 :maxCols=3 @scrollReachBottom="loadImages" @click="handleImgClick">
          <div slot="waterfall-over">NO MORE PICTURE</div>
        </vue-waterfall-easy>
      </div>
      <div id="display-drawer" @click="handleDrawerClick">
        <div id="display-container" class="hide-scrollbar">
          <img class="display-img" :src="imgDetail.primarySrc" alt="">
          <p class="display-desc">
          </p>
          <div class="display-spec">
            <ul class="display-spec-list display-spec-list-tag">
              <li><strong>File Name:</strong></li>
              <li><strong>Focal Length:</strong></li>
              <li><strong>Exposure Time:</strong></li>
              <li><strong>ISO Speed Ratings:</strong></li>
              <li><strong>Date/Time Original:</strong></li>
            </ul>
            <ul class="display-spec-list display-spec-list-value">
              <li>{{ imgDetail.fileName||'--' }} </li>
              <li>{{ imgDetail.focalLength||'--' }} </li>
              <li>{{ imgDetail.exposureTime||'--' }} </li>
              <li>{{ imgDetail.isoSpeedRatings||'--' }} </li>
              <li>{{ imgDetail.datetimeOriginal||'--' }} </li>
            </ul>
            <ul class="display-spec-list display-spec-list-tag">
              <li><strong>GPS Longitude:</strong></li>
              <li><strong>GPS Latitude:</strong></li>
              <li><strong>Resolution:</strong></li>
              <li><strong>Model:</strong></li>
              <li><strong>Make:</strong></li>
            </ul>
            <ul class="display-spec-list display-spec-list-value">
              <li>{{ imgDetail.gpsLongitude||'--' }} </li>
              <li>{{ imgDetail.gpsLatitude||'--' }} </li>
              <li>{{ imgDetail.imageWidth||'--' }} x {{ imgDetail.imageHeight||'--' }}</li>
              <li>{{ imgDetail.model||'--' }} </li>
              <li>{{ imgDetail.make||'--' }} </li>
            </ul>
          </div>
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
      imgDetail: {}
    }
  },
  components: {
    vueWaterfallEasy
  },
  methods: {
    loadImages() {
      window.console.log('request', process.env.VUE_APP_APIURL + '/album/list');
      axios.post(process.env.VUE_APP_APIURL + '/album/list', {
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
            fileName: d.fileName,
            focalLength: d.focalLength,
            datetimeOriginal: d.datetimeOriginal,
            exposureTime: d.exposureTime,
            isoSpeedRatings: d.isoSpeedRatings,
            gpsLongitude: d.gpsLongitude,
            gpsLatitude: d.gpsLatitude,
            imageHeight: d.imageHeight,
            imageWidth: d.imageWidth,
            model: d.model,
            make: d.make,
            src: process.env.VUE_APP_IMGURL + '/images/album/cover/c' + d.fileName,
            primarySrc: process.env.VUE_APP_IMGURL + '/images/album/primary/d' + d.fileName,
          });
        });
      })
      .catch((error) => {
        window.console.log(error);
      });
    },
    handleImgClick(event, { index, value }) {
      window.console.log(index, value);
      document.getElementById('display-container').style.marginLeft = (event.x > window.document.documentElement.clientWidth * 0.4) ? 0 : '40%';
      document.getElementById('display-drawer').style.left = 0;
      this.imgDetail = value;
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

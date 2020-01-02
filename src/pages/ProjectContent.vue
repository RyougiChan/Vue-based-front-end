<template>
  <div id="md-component" class="y-project">
    <FullScreenFrame :src="src" />
  </div>
</template>


<script>
import FullScreenFrame from '../components/FullScreenFrame'
import axios from 'axios'

export default {
  data() {
    return {
      src: ''
    }
  },
  
  props: ['id'],
  components: {
    FullScreenFrame
  },
  mounted () {
    axios.get(process.env.VUE_APP_APIURL + '/project/' + this.id)
        .then(function (response) {
          return response
        })
        .error(function (message) {
          return message
        })
        .finally(function () {
          return ''
        });
  },
}
</script>
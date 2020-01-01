<template>
  <div id="y-article">
    <Header />
    <div id="main-container">
      <div class="content-section">
        <YCard 
          title="Google" 
          abstract="On August 10, 2015, Google announced plans to reorganize its various interests as a conglomerate called Alphabet. Google
                    became Alphabet's leading subsidiary, and will continue to be the umbrella company for Alphabet's Internet
                    interests. Upon completion of the restructure, Sundar Pichai became CEO of Google, replacing Larry Page,
                    who became CEO of Alphabet."
                    link="#/article/1"
        />
        <YCard 
          title="Google" 
          abstract="On August 10, 2015, Google announced plans to reorganize its various interests as a conglomerate called Alphabet. Google
                    became Alphabet's leading subsidiary, and will continue to be the umbrella company for Alphabet's Internet
                    interests. Upon completion of the restructure, Sundar Pichai became CEO of Google, replacing Larry Page,
                    who became CEO of Alphabet."
                    link="#/article/1"
        />
        <YCard 
          title="Google" 
          abstract="On August 10, 2015, Google announced plans to reorganize its various interests as a conglomerate called Alphabet. Google
                    became Alphabet's leading subsidiary, and will continue to be the umbrella company for Alphabet's Internet
                    interests. Upon completion of the restructure, Sundar Pichai became CEO of Google, replacing Larry Page,
                    who became CEO of Alphabet."
                    link="#/article/1"
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

export default {
  components: {
    Header,
    Footer,
    YCard
  }
}
</script>

<style>

</style>

<template>
  <div id="article">
    <Header  v-on:log="log($event)"/>
    <div id="main-container">
        <div class="content-section text-align-center">
          <h5>
            INTRO
          </h5>
          <p>
            I'm Jionghuan Zhang from China, or you can call me <strong>Ivan</strong>.
            <br>
            I'm a <strong>Web Developer</strong> employed by <strong>TP-LINK</strong> Technologies Company, 
            <br>
            a global provider of networking devices and accessories.
            <br>
            I am a amateur photographer at the same time.
          </p>
          <h5>
            HOBBY
          </h5>
          <p>
            I like listening to <strong>music</strong>, <strong>photographing</strong>, <strong>painting</strong> and <strong>hiking</strong>. 
            <br>
            Sometimes, I also <strong>play games</strong> with friends on the Steam platform.
            <br>
            I'd like to develop game myself too. Recently I try to rebuild the bonus game on 
            <br>
            Android Device version 5/6 System with Unity <strong><a href="https://github.com/RyougiChan/YukiGO">>> YukiGO</a></strong>.
            <br>
            And I'm trying to develop a framework for Galgame <strong><a href="https://github.com/RyougiChan/PoiGalgame">>> PoiGalgame</a></strong>.
          </p>
          <h5>
            Contact
          </h5>
          <p>
            <strong>E-mail: </strong><br>
            <a href="mailto:ryougi.chan.fire@gmail.com">ryougi.chan.fire@gmail.com</a>
          </p>
          <p>
            <strong>Github: </strong><br>
            <a href="https://github.com/ryougichan">RyougiChan on Github</a>
          </p>
          <p>
            <strong>Personal Space: </strong><br>
            <a href="https://kaga.fun">kaga.fun</a>
          </p>
          <p>
            <strong>WeChat ID: </strong><br>
            <a href="javascript:void(0)">sukurachan</a>
          </p>
        </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'

export default {
  methods: {
    log(e) {
      window.console.log('log', e);
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>

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

export default {
  data() {
    return {
      projectList: [
        {
          title: '64 hexagram in I Ching',
          abstract: 'A JavaScript implement of 64 hexagrams in I Ching',
          description: `This is a JavaScript implement of 64 hexagrams in I Ching. The I Ching book consists of 64 hexagrams. 
                        A hexagram in this context is a figure composed of six stacked horizontal lines (爻 yáo), 
                        where each line is either Yang (an unbroken, or solid line), or Yin (broken, an open line with a gap in the center). 
                        The hexagram lines are traditionally counted from the bottom up, so the lowest line is considered line one while the top line is line six. 
                        Hexagrams are formed by combining the original eight trigrams in different combinations. Each hexagram is accompanied with a description, 
                        often cryptic, akin to parables. Each line in every hexagram is also given a similar description.
                        The Chinese word for a hexagram is 卦 "guà", although that also means trigram.`,
          link: '#/project/hexagram',
          imgLink: require('../images/project/hexagram.png')
        },
        {
          title: 'Yuko Material Design Components',
          abstract: 'A web components library follow Material Design specification',
          description: `This is a JavaScript/CSS implement of web component library follow Material Design specification. 
                        Material Design is a visual language that synthesizes the classic principles of good design with the innovation of technology and science. 
                        Material Design's goals: 1. Create a visual language that synthesizes the classic principles of good design with the innovation and possibility of technology and science. 
                        2. Develop a single underlying system that unifies the user experience across platforms, devices, and input methods. 
                        3. Expand Material’s visual language and provide a flexible foundation for innovation and brand expression.`,
          link: '#/project/md-components',
          imgLink: require('../images/project/md-components.png')
        },
        {
          title: 'Simple Canvas Snow Effect',
          abstract: 'A JavaScript implement of snow effect using canvas',
          description: `A simple implement of snow effect, which take effect on background image and cursor.`,
          link: '#/project/snow-effect',
          imgLink: require('../images/project/canvas-snow-effect.png')
        },
        {
          title: 'Material Design Navigation Drawer',
          abstract: 'A JavaScript implement of Navigation Drawer on mobile device',
          description: `This project is a JavaScript implement of material design Navigation Drawer on mobile device. 
                        As one of my early projects, it is coded with raw javascript without other third-party libraries. 
                        For more information, see https://github.com/RyougiChan/Yuko.js/`,
          link: '#/project/navigation-drawer',
          imgLink: require('../images/project/navigation-drawer.png')
        }
      ]
    }
  },
  components: {
    YImageCard
  },
}
</script>

<style>

</style>

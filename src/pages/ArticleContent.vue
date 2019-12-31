<template>
  <div id="article-content">
    <Header />
    <div id="main-container">
      <div class="content-section">
        <h2>Introduction </h2>
        <p>Material Design is a visual language that synthesizes the classic principles of good design with the innovation of technology and science.</p>
        <h3>Goals</h3>
        <p>Create a visual language that synthesizes the classic principles of good design with the innovation and possibility of technology and science. Develop a single underlying...</p>
        <h4>Create</h4>
        <p>Create a visual language that synthesizes the classic principles of good design with the innovation and possibility of technology and science.</p>
        <h4>Unify</h4>
        <p>Develop a single underlying system that unifies the user experience across platforms, devices, and input methods.</p>
        <h4>Customize</h4>
        <p>Expand Material’s visual language and provide a flexible foundation for innovation and brand expression.</p>
        <h3>Principles</h3>
        <p>Material Design is inspired by the physical world and its textures, including how they reflect light and cast shadows. Material surfaces reimagine the mediums of...</p>
        <h4>Material is the metaphor</h4>
        <p>Material Design is inspired by the physical world and its textures, including how they reflect light and cast shadows. Material surfaces reimagine the mediums of paper and ink.</p>
        <h4>Bold, graphic, intentional</h4>
        <p>Material Design is guided by print design methods — typography, grids, space, scale, color, and imagery — to create hierarchy, meaning, and focus that immerse viewers in the experience.</p>
        <h4>Motion provides meaning</h4>
        <p>Motion focuses attention and maintains continuity, through subtle feedback and coherent transitions. As elements appear on screen, they transform and reorganize the environment, with interactions generating new transformations.</p>
        <h4>Flexible foundation</h4>
        <p>The Material Design system is designed to enable brand expression. It’s integrated with a custom code base that allows the seamless implementation of components, plug-ins, and design elements.</p>
        <h4>Cross-platform</h4>
        <p>Material Design maintains the same UI across platforms, using shared components across Android, iOS, Flutter, and the web.</p>
        <h4>Getting around</h4>
        <p>Our comprehensive guidance helps you make beautiful products, faster. Design and build with new tools for customizing Material and sharing work, find inspiration in the...</p>
        <p>Our comprehensive guidance helps you make beautiful products, faster. Design and build with new tools for customizing Material and sharing work, find inspiration in the Material studies, and express your product’s unique identity with Material Theming.</p>
        <p>Find what you need by navigating across these three sections:</p>
        <h4>Material System</h4>
        <p>Our expanded and enhanced design system is unified with Material tools and components to improve workflow between design and development.</p>
        <h4>Material Foundation</h4>
        <p>Design and strategize how to build your app using Material Design architecture, while learning the principles and theory that underpin Material Design.</p>
        <h4>Material Guidelines</h4>
        <p>Customize and deploy a unique Material theme systematically across your product – from design to code.</p>
        <p>You can still view the previous set of Material Guidelines.</p>
        <h3>Updates</h3>
        <p>See the latest Material updates on our what’s new page, and sign up for the Material newsletter to get releases, announcements, and tips delivered directly...</p>
        <p>See the latest Material updates on our what’s new page, and sign up for the Material newsletter to get releases, announcements, and tips delivered directly to your inbox.</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
// import anime from 'animejs'

export default {
  components: {
    Header,
    Footer
  },
  mounted () {
    window.scroll(0,0);
  },
}
</script>

<style>

</style>

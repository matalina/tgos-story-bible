<template>
  <div class="wrapper">
      <div class="">
          <Nav/>
          <component :is="layout"></component>
          <Footer/>
      </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue';
import Footer from './components/Footer.vue';
import Home from './layouts/Home.vue';
import Character from './layouts/Character.vue';
import Location from './layouts/Location.vue';
import Lore from './layouts/Lore.vue';

export default {
    components: { Nav, Footer, Home, Character, Location, Lore },
    computed: {
        layout() {
          return this.$page.frontmatter.layout || 'Home'
        }
  },
}
</script>

<style lang="stylus">
    @import './styles/style.styl';
</style>

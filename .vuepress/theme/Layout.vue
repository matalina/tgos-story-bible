<template>
  <div class="container lg:container-lg mx-auto bg-gray-100">
    <Header/>
    <component :is="layout"></component>
    <Footer/>
  </div>
</template>

<script>
import Home from './layouts/Home';
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  components: { Home, Header, Footer },
  computed: {
    layout() {
      return this.$page.frontmatter.layout || 'Home'
    }
  },
}
</script>

<style lang="stylus">
  @import './styles/theme.styl';
</style>

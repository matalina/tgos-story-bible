<template>
  <div>
    <Header/>
    <component :is="layout" class="mb-16"></component>
    <Footer/>
  </div>
</template>

<script>
import Home from './layouts/Home';
import Page from './layouts/Page';
import Character from './layouts/Character';
import Location from './layouts/Location';
import Lore from './layouts/Lore';
import Book from './layouts/Book';
import Scene from './layouts/Scene';
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  components: { Home, Page, Header, Footer, Character, Location, Lore, Book, Scene },
  computed: {
    layout() {
      return this.$page.frontmatter.type || 'Home'
    }
  },
}
</script>

<style lang="stylus">
  @import './styles/theme.styl';
</style>

<template>
  <div>
    <component :is="layout"></component>
  </div>
</template>

<script>
import  Home from './layouts/Home';

export default {
  components: { Home },
  computed: {
      layout() {
        return this.$page.frontmatter.layout || 'Home'
      }
    },
}
</script>

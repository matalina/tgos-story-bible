<template>
  <nav class="p-2">
    <router-link v-for="item in links"
                 :to="base + item.link"
                 class="block w-64 p-2"
    >
      <h4 v-if="item.link === ''">{{ item.text }}</h4>
      <span v-else>{{ item.text }}</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
    };
  },
  computed: {
    base() {
      let parts = this.$page.relativePath.split('/');
      let file = parts.pop();

      return '/' + parts[0] + '/';
    },
    links()  {
      return this.$themeConfig.sidebar[this.base];
    }
  }
}
</script>

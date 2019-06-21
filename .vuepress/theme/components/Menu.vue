<template>
  <nav class="block md:flex">
    <router-link v-for="nav in $themeConfig.nav"
       :to="nav.link"
       class="block md:flex-1 text-center"
    >
       {{ nav.text }}
     </router-link>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {

    };
  }
}
</script.

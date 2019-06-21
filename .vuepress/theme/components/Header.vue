<template>

  <header class="block md:flex md:items-center">
    <router-link class="flex items-center text-black"
                 to="/"
    >
      <img :src="$themeConfig.logo"
           :alt="$siteTitle"
           class="h-12 m-2"
      />
      <div class="font-heading text-4xl m-2">
        {{ $siteTitle }}
      </div>
    </router-link>
    <Menu class="flex-1 m-2"/>
    <Search class="flex-initial m-2"/>
  </header>

</template>

<script>
  import Search from '../components/Search';
  import Menu from '../components/Menu';

  export default {
    name: 'Header',
    components: { Search, Menu },
    data() {
      return {}
    }
  }

</script>

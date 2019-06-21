<template>
  <main class="flex">
    <Sidebar class="flex-intial"/>
    <Content class="flex-auto"/>
  </main>
</template>

<script>
import Sidebar from '../components/Sidebar';
export default {
  name: 'Page',
  components: { Sidebar },
  data() {
    return {

    };
  }
}
</script>

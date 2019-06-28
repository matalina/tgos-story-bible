<template>
  <div class="spoiler">
    <slot></slot>
  </div>
</template>

<script>
export defaults {
  name: 'Spoiler',
  props: { 'book' },
  data() {
    return {

    };
  }
}
</script>

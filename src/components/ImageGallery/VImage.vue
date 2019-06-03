<template>
  <v-lazy-image
    :src="url"
    src-placeholder="@/assets/images/blackhole.jpg"
  />
</template>

<script>
export default {
  name: 'VImage',
  props: {
    url: {
      type: String,
      required: true
    },
    isLoading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
  img {
    width: 100%;
  }
  .v-lazy-image {
    filter: blur(10px);
    transition: filter 0.7s;
  }
  .v-lazy-image-loaded {
    filter: blur(0);
  }
</style>

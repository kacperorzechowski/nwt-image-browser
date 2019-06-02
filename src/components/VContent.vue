<template>
  <section>
    <Gallery/>
  </section>
</template>

<script>
import Gallery from '@/components/ImageGallery/Gallery'
export default {
  name: 'VContent',
  components: { Gallery }
}
</script>

<style lang="scss" scoped>
  section {
    width: 90%;
    margin: 0 auto;
  }
</style>

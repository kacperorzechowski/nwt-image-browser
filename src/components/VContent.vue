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
    padding: 25px 5px;
  }
</style>

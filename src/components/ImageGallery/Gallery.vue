<template>
  <div>
    <v-loader v-if="isLoading" class="loader"></v-loader>
    <v-image
      v-for="(image, key) in images"
      :key="key"
      :url="image.previewFormat"
    ></v-image>
  </div>
</template>

<script>
import DataProviderRepository from '@/API/DataProviderRepository'
import VImage from '@/components/ImageGallery/VImage'
import VLoader from '@/components/VLoader'

export default {
  name: 'Gallery',
  components: { VLoader, VImage },
  data: () => ({
    images: [],
    isLoading: false
  }),
  mounted () {
    this.getImages()
  },
  methods: {
    getImages () {
      this.isLoading = true
      DataProviderRepository.get()
        .then((response) => {
          this.isLoading = false
          this.images = response.data.data
        })
        .catch((err) => {
          this.isLoading = false
          console.error(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .loader {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
  }
</style>

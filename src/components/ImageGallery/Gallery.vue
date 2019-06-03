<template>
  <div>
    <transition name="fade">
      <v-loader v-if="isLoading" class="loader"></v-loader>
    </transition>

    <div class="images">
      <v-image
        v-for="(image, key) in images"
        :key="key"
        :url="image.previewFormat"
      ></v-image>
    </div>

  </div>
</template>

<script>
import DataProviderRepository from '@/API/DataProviderRepository'
import VImage from '@/components/ImageGallery/VImage'
import VLoader from '@/components/VLoader'
import { mapGetters } from 'vuex'

export default {
  name: 'Gallery',
  components: {
    VLoader,
    VImage
  },
  data: () => ({
    images: [],
    isLoading: false
  }),
  computed: {
    ...mapGetters({
      searchPhrase: 'gallery/getSearchPhrase'
    })
  },
  watch: {
    'searchPhrase' (phrase) {
      if (phrase !== null) {
        this.searchImages()
      }
    }
  },
  mounted () {
    this.getImages()
  },
  methods: {
    onResponse (response) {
      this.isLoading = false
      this.images = response.data.data
    },
    onError (err) {
      this.isLoading = false
      console.error(err)
    },
    getImages () {
      this.isLoading = true
      DataProviderRepository.get()
        .then((response) => {
          this.onResponse(response)
        })
        .catch((err) => {
          this.onError(err)
        })
    },
    searchImages () {
      this.images = []

      this.isLoading = true
      DataProviderRepository.search(this.searchPhrase)
        .then((response) => {
          this.onResponse(response)
        })
        .catch((err) => {
          this.onError(err)
        })
    }
  }
}
</script>

<style lang="scss" scoped>
  .loader {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }

  .fade-enter, .fade-leave-to {
    position: absolute;
    opacity: 0;
  }
</style>

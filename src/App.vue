<template>
  <div>
    <v-navbar/>
    <v-content class="main-content"/>
    <v-footer/>
  </div>
</template>

<script>
import VNavbar from '@/components/VNavbar'
import VContent from '@/components/VContent'
import VFooter from '@/components/VFooter'
export default {
  name: 'App',
  components: { VFooter, VContent, VNavbar }
}
</script>

<style lang="scss" scoped>
  .main-content {
    min-height: 100vh;
  }
</style>

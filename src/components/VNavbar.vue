<template>
  <nav>
    <div class="logos">
      <div class="main-text">NWT</div>
      <div class="sub-text">
        <span class="image">IMAGE</span>
        <span class="browser">BROWSER</span>
      </div>
    </div>

    <v-search></v-search>
  </nav>
</template>

<script>
import VSearch from '@/components/VSearch'
export default {
  name: 'VNavbar',
  components: { VSearch }
}
</script>

<style lang="scss" scoped>
  .logos {
    display: flex;
    justify-content: center;
    padding: 15px;
    border-bottom: 1px solid $grey-accent;

    .main-text {
      font-weight: 700;
      font-size: 2.5em;
      margin-right: 10px;
    }

    .sub-text {
      display: flex;
      flex-direction: column;
      font-weight: 300;
      font-size: 1.5em;
    }
  }
</style>

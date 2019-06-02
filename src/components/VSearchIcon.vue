<template>
  <div class="search">
    <div class="search__circle"></div>
    <div class="search__rectangle"></div>
  </div>
</template>

<script>
export default {
  name: 'VSearchIcon'
}
</script>

<style lang="scss" scoped>
  $borderColor: $secondary;

  .search {
    position: relative;
    width: 40px;
    margin: 0 auto;
    padding: 10px 0;
    text-align: center;

    &__circle {
      width: 20px;
      height: 20px;
      border: 4px solid $borderColor;
      border-radius: 20px;
    }

    &__rectangle {
      position: absolute;
      right: 0;
      bottom: 7px;
      width: 15px;
      transform: rotate(45deg);
      border: 2px solid $borderColor;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
  }
</style>

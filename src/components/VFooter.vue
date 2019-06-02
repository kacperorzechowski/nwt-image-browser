<template>
  <footer>
    NWT Image Browser &copy; Kacper Orzechowski 2019 - App developed for Schibsted company recruitment process.
  </footer>
</template>

<script>
export default {
  name: 'VFooter'
}
</script>

<style lang="scss" scoped>
  footer {
    position: relative;
    bottom: 0;
    background: $primary;
    color: white;
    text-align: center;
    padding: 15px 25px;
  }
</style>

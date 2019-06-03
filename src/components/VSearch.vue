<template>
  <section>
    <v-search-icon class="search-icon" @click.native="search"></v-search-icon>
    <input
      @keyup.enter="search"
      v-model="phrase"
      id="search-input"
      maxlength="45"
      type="text"
      placeholder="search phrase"
    />
  </section>
</template>

<script>
import VSearchIcon from '@/components/VSearchIcon'
import { mapMutations } from 'vuex'

export default {
  name: 'VSearch',
  components: { VSearchIcon },
  data: () => ({
    phrase: null
  }),
  methods: {
    ...mapMutations({
      setPhrase: 'gallery/setSearchPhrase'
    }),
    search () {
      if (this.validate()) {
        this.setPhrase(this.phrase)
      }
    },
    validate () {
      return this.phrase.length > 0
    }
  }
}
</script>

<style lang="scss" scoped>
  section {
    position: relative;
  }

  #search-input {
    border: 0;
    border-bottom: 1px solid $grey-accent;
    padding: 10px 45px 10px 15px;
    width: 90%;
    min-height: 40px;
    font-size: 1.2em;
    font-weight: 300;

    &::placeholder {
      text-transform: uppercase;
      text-align: center;
    }

    &:focus {
      border: 0;
      outline: none;
      border-bottom: 2px solid $secondary;
    }
  }

  .search-icon {
    position: absolute;
    right: 10px;
  }
</style>

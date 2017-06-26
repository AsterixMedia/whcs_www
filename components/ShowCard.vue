<template lang="pug">
  .root
    v-card(
      height="300px",
      :img="img",
      hover,
      raised
    )
</template>

<script>
  import Types from 'vue-types'

  export default {
    name: 'ShowCard',
    props: {
      img: Types.string.isRequired
    }
  }
</script>

<style lang="stylus" scoped>

</style>

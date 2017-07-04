<template lang="pug">
  .root
    v-card(flat, hover)
      v-card-media(:src="img", height="150px")
      v-card-text.pa-1
        span {{ fname }}
        br
        span {{ lname }}
</template>

<script>
  import Types from 'vue-types'

  export default {
    name: 'HumanCard',
    props: {
      img: Types.string,
      fname: Types.string,
      lname: Types.string
    }
  }
</script>

<style lang="stylus" scoped>
  .root
    min-width 150px
</style>

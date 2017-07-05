<template lang="pug">
  .root
    v-card(
      hover,
      raised,
      flat
    )
      v-card-media(
        src="http://media.npr.org/images/podcasts/primary/icon_381444650-5570d7391fdffd8c38f8e57057b567311fd64bd8-s300-c85.jpg",
      )
      v-card-text.pt-0.pb-0 {{ name }}
</template>

<script>
  import Types from 'vue-types'

  export default {
    name: 'ShowCard',
    props: {
      img: Types.string.isRequired,
      name: Types.string
    }
  }
</script>

<style lang="stylus" scoped>
  .root
    .card__text
      font-size 20px
      font-weight 300
    min-width 150px
    @media screen and (min-width: 600px)
      min-width 300px
    .card__media
      min-height 150px
      @media screen and (min-width: 600px)
        min-height 300px
</style>

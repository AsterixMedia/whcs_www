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
      v-card-text.truncate {{ name }}
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
    min-width 120px
    @media screen and (min-width: 1230px)
      min-width 300px
    .card__media
      min-height 120px
      @media screen and (min-width: 1230px)
        min-height 300px
    .truncate
      width 120px
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
      @media screen and (min-width: 1230px)
        width 300px
</style>

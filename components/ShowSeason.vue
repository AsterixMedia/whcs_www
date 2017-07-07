<template lang="pug">
  .root.seasons
    h3 {{ name }}
    .season-container
      template(v-for="(show, i) in shows")
        nuxt-link(:to="{ path : `shows/${show.slug}`}")
          ShowCard(
            :img="show.cover",
            :name="show.name"
          ).pa-1
</template>

<script>
  import Types from 'vue-types'
  import ShowCard from './ShowCard.vue'

  export default {
    name: 'ShowSeason',
    props: {
      name: Types.string,
      n: Types.number,
      shows: Types.array
    },
    components: {
      ShowCard
    }
  }
</script>

<style lang="stylus" scoped>
  .root
    .season-container
      display: flex
      flex-wrap wrap
      justify-content center
    a
      text-decoration none
</style>

<template lang="pug">
  .root.seasons
    h3 {{ name }}
    .season-container
      ShowCard(
        v-for="i in n", :key="i",
        :img="`https://dummyimage.com/300x300/dbdbdb/000000.png&text=${i}`",
        :name="`Show Name ${i}`"
      ).pa-1
</template>

<script>
  import Types from 'vue-types'
  import ShowCard from './ShowCard.vue'

  export default {
    name: 'ShowSeason',
    props: {
      name: Types.string,
      n: Types.number
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
</style>

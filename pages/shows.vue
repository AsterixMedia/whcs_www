<template lang="pug">
  .root
    .seasons
      h3 Summer 2017 Season
      v-layout(row, wrap)
        v-flex.pt-2.pb-2(
          xs12, sm4, md3, lg3, xl2,
          v-for="i in 8", :key="i"
        )
          ShowCard(
            :img="`https://dummyimage.com/300x300/dbdbdb/000000.png&text=${i}`"
          )
    .seasons
      h3.pt-4.pb-1 Fall 2017 Season
      v-layout(row, wrap)
        v-flex.pt-2.pb-2(
          xs12, sm4, md3, lg3, xl2,
          v-for="i in 30", :key="i"
        )
          ShowCard(
            :img="`https://dummyimage.com/300x300/dbdbdb/000000.png&text=${i}`"
          )
</template>

<script>
  import { mapActions } from 'vuex'
  import { ShowCard } from '~components'

  export default {
    name: 'ShowsPage',
    head: () => ({
      title: 'Shows'
    }),
    components: {
      ShowCard
    },
    methods: {
      ...mapActions(['setLocation'])
    },
    created () {
      this.setLocation('Shows')
    }
  }
</script>

<style lang="stylus" scoped>
  .root
    .seasons
      /**/
</style>

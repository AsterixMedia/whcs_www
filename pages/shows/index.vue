<template lang="pug">
  .root
    show-season(name="Summer 2017", :shows="summer17")
</template>

<script>
  import { mapActions } from 'vuex'
  import { ShowSeason } from '~components'

  import { Shows } from '~/data'

  export default {
    name: 'ShowsPage',
    head: () => ({
      title: 'Shows'
    }),
    components: {
      ShowSeason
    },
    data: () => ({
      summer17: [],
      fall17: []
    }),
    methods: {
      ...mapActions(['setLocation'])
    },
    created () {
      this.setLocation('Shows')
      this.summer17 = Shows.filter(show => show.season === 'Summer 2017')
      this.fall17 = Shows.filter(show => show.season === 'Fall 2017')
    }
  }
</script>

<style lang="stylus" scoped>
  .root
    .seasons:not(:first-child)
      padding-top 20px
</style>

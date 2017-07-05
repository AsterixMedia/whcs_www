<template lang="pug">
  .root
    show-season(name="Summer 2017", :n="10")
    show-season(name="Fall 2017", :n="30")
</template>

<script>
  import { mapActions } from 'vuex'
  import { ShowSeason } from '~components'

  export default {
    name: 'ShowsPage',
    head: () => ({
      title: 'Shows'
    }),
    components: {
      ShowSeason
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
    .seasons:not(:first-child)
      padding-top 20px
</style>

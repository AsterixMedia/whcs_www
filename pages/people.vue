<template lang="pug">
  .root: v-content
    team(name="Executives", :n="4")
    team(name="Ambassadors", :n="4")
    team(name="Music")
    team(name="News", :n="20")
    team(name="Production", :n="14")
</template>

<script>
  import { mapActions } from 'vuex'
  import { Team } from '~components'

  export default {
    name: 'PeoplePage',
    head: () => ({
      title: 'People'
    }),
    components: {
      Team
    },
    methods: {
      ...mapActions(['setLocation'])
    },
    created () {
      this.setLocation('People')
    }
  }
</script>

<style lang="stylus" scoped="">
  .root
    /**/
</style>

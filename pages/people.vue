<template lang="pug">
  .root
    team(name="Executives", :n="4")
    team(name="Ambassadors", :n="4")
    team(name="Music")
    team(name="News", :n="20")
    team(name="Production", :n="14")
    people-profile
</template>

<script>
  import { mapActions } from 'vuex'
  import { Team, PeopleProfile } from '~components'

  export default {
    name: 'PeoplePage',
    head: () => ({
      title: 'People'
    }),
    components: {
      Team,
      PeopleProfile
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
    .team:not(:first-child)
      padding-top 20px
</style>

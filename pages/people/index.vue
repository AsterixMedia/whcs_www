<template lang="pug">
  .root
    team(name="Executives", :humans="executives")
    team(name="Ambassadors", :humans="ambassadors")
</template>

<script>
  import { mapActions } from 'vuex'

  import { Team } from '~components'
  import { People } from '~/data'

  export default {
    name: 'PeoplePage',
    head: () => ({
      title: 'People'
    }),
    components: {
      Team
    },
    data () {
      return {
        executives: [],
        ambassadors: []
      }
    },
    methods: {
      ...mapActions(['setLocation'])
    },
    created () {
      this.setLocation('People')
      this.executives = People.filter(human => human.team === 'Executive')
      this.ambassadors = People.filter(human => human.team === 'Ambassadors')
    }
  }
</script>

<style lang="stylus" scoped="">
  .root
    .team:not(:first-child)
      padding-top 20px
</style>

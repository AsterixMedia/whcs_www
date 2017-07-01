<template lang="pug">
  .root
    h1 Team
</template>

<script>
  import { mapActions } from 'vuex'

  const query = `
  {
    allMembers {
      id
      name
      team
    }
  }`
  export default {
    name: 'TeamPage',
    head: () => ({
      title: 'Team'
    }),
    methods: {
      ...mapActions(['setLocation'])
    },
    created () {
      this.setLocation('Team')
      this.$graphql.request(query).then(data => console.log(data))
    }
  }
</script>

<style lang="stylus" scoped="">
  .root
    /**/
</style>

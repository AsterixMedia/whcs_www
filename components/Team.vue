<template lang="pug">
  .root.team
    h3 {{ name }}
    .team-container
      human-card(v-for="i in n", :key="i",
        img="https://randomuser.me/api/portraits/men/83.jpg",
        fname="John",
        lname="Killer"
      ).pa-1
</template>

<script>
  import Types from 'vue-types'
  import HumanCard from './HumanCard'

  export default {
    name: 'Team',
    props: {
      name: Types.string,
      n: Types.number.def(10)
    },
    components: {
      HumanCard
    }
  }
</script>

<style lang="stylus" scoped>
  .root
    .team-container
      display: flex
      flex-wrap wrap
      justify-content source
</style>

<template lang="pug">
  .root.team
    h3 {{ name }}
    template(v-for="(human, i) in humans")
      .team-container
        nuxt-link(:to="`people/${human.slug}`")
          human-card(
            :img="human.pic",
            :fname="human.fname",
            :lname="human.lname"
          ).pa-1
</template>

<script>
  import Types from 'vue-types'
  import HumanCard from './HumanCard'

  export default {
    name: 'Team',
    props: {
      name: Types.string,
      n: Types.number.def(10),
      humans: Types.array
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
    a
      text-decoration none
</style>

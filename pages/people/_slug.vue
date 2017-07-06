<template lang="pug">
  .root
    h1 {{ `${human.fname} ${human.lname}`}}
    h2 slug {{ $route.params.slug }}
</template>

<script>
  import { People } from '~/data'
  export default {
    name: 'PeopleProfile',
    data: () => ({
      human: {},
      slug: ''
    }),
    created () {
      this.slug = this.$route.params.slug
      this.human = People.filter(humans => humans.slug === this.slug)[0]
    }
  }
</script>

<style lang="stylus" scoped>
  .root
    /* styles */
</style>

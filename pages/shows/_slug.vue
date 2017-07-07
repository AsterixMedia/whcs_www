<template lang="pug">
  .root
    h1 ShowProfile
    h4 {{ slug }}
</template>

<script>
  import { mapActions } from 'vuex'
  import { Shows } from '~/data'

  export default {
    name: 'ShowProfile',
    components: {},
    data: () => ({
      slug: '',
      show: {},
      location: ''
    }),
    methods: {
      ...mapActions(['setLocation'])
    },
    created () {
      this.slug = this.$route.params.slug
      this.show = Shows.filter(show => show.slug === this.slug)[0]
      this.location = this.show.name
      this.setLocation(this.location)
    }
  }
</script>

<style lang="stylus" scoped>
  .root
    /* styles */
</style>

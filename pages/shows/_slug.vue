<template lang="pug">
  .root
    show-profile-card(
      :name="show.name",
      :season="show.season",
      :hostSlugs="show.hostSlugs",
      :cover="show.cover",
      :day="show.day",
      :time="show.time",
      :slots="show.slots",
      :hosts="hosts",
      :description="show.description"
    )
</template>

<script>
  import { mapActions } from 'vuex'
  import { Shows, People } from '~/data'

  import { ShowProfileCard } from '~components'

  export default {
    name: 'ShowProfile',
    head () {
      return {
        title: this.location
      }
    },
    components: {
      ShowProfileCard
    },
    data: () => ({
      slug: '',
      show: {},
      location: '',
      hosts: []
    }),
    methods: {
      ...mapActions(['setLocation']),
      getHosts (slugs) {
        for (let i = 0; i < slugs.length; i++) {
          this.hosts.push(
            People.filter(person => person.slug === slugs[i])[0]
          )
        }
      }
    },
    created () {
      this.slug = this.$route.params.slug
      this.show = Shows.filter(show => show.slug === this.slug)[0]
      this.location = this.show.name
      this.setLocation(this.location)
      this.getHosts(this.show.hostSlugs)
    }
  }
</script>

<style lang="stylus" scoped>
  .root
    /* styles */
</style>

<template lang="pug">
  .root
    human-profile(
      :fname="human.fname",
      :lname="human.lname",
      :pic="human.pic",
      :team="human.team",
      :position="human.position",
      :bio="human.bio",
      :facebook="human.facebook",
      :twitter="human.twitter",
      :instagram="human.instagram",
      :snapchat="human.snapchat",
      :email="human.email"
    )
</template>

<script>
  import { mapActions } from 'vuex'

  import { HumanProfile } from '~components'
  import { People } from '~/data'

  export default {
    name: 'PeopleProfile',
    head () {
      return {
        title: this.location
      }
    },
    components: {
      HumanProfile
    },
    data: () => ({
      human: {},
      slug: '',
      location: ''
    }),
    methods: {
      ...mapActions(['setLocation'])
    },
    created () {
      this.slug = this.$route.params.slug
      this.human = People.filter(humans => humans.slug === this.slug)[0]
      this.location = this.human.fname + ' ' + this.human.lname
      this.setLocation(this.location)
    }
  }
</script>

<style lang="stylus" scoped>
  .root
    /* styles */
</style>

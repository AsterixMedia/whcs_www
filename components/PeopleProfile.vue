<template lang="pug">
  .root
    v-dialog(
      :overlay="false",
      v-model="profileStatus",
    )
      v-card
        v-toolbar
          v-btn(@click.native="closeProfile")
            v-icon close
          v-toolbar-title DumbassName
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'PeopleProfile',
    methods: {
      ...mapActions('people', [
        'closeProfile',
        'setProfileStatus'
      ])
    },
    computed: {
      ...mapGetters('people', ['isProfileOpen']),
      profileStatus: {
        get () {
          return this.isProfileOpen
        },
        set (value) {
          this.setProfileStatus(value)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .root
    /* styles */
</style>

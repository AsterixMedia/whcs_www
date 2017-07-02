<template lang="pug">
  v-navigation-drawer.root.grey.lighten-4.pb-0(
    persistent,
    height='100%',
    light,
    right,
    clipped,
    hide-overlay,
    v-model="drawerStatus",
    enable-resize-watcher
  )
    player

</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  import Player from './Player'
  export default {
    name: 'DrawerPlayer',
    components: {
      Player
    },
    methods: {
      ...mapActions(['setPlayerDrawerStatus'])
    },
    computed: {
      ...mapGetters(['isPlayerDrawerOpen']),
      drawerStatus: {
        get () {
          return this.isPlayerDrawerOpen
        },
        set (value) {
          this.setPlayerDrawerStatus(value)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped="">
  .root
    /**/
</style>

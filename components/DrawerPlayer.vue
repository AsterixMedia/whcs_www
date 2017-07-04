<template lang="pug">
  v-navigation-drawer(
    persistent,
    height='100%',
    light,
    right,
    clipped,
    hide-overlay,
    v-model="drawerStatus",
    enable-resize-watcher
  ).white.root.pb-0
    player(
      :sources="source",
      :html5="true"
    )

</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  import Player from './Player'
  export default {
    name: 'DrawerPlayer',
    components: {
      Player
    },
    data () {
      return ({
        source: [
          'http://streams.museter.com:8629/stream'
        ]
      })
    },
    methods: {
      ...mapActions(['setPlayerDrawerStatus'])
    },
    computed: {
      ...mapGetters([
        'isPlayerDrawerOpen',
        'getAudioSources'
      ]),
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

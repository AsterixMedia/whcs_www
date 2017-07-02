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
        source: ['http://live-radio01.mediahubaustralia.com/PBW/mp3/']
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

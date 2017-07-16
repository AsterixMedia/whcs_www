<template lang="pug">
  v-app.root(footer, :fixedFooter="true")
    app-drawer
    drawer-player
    app-bar(
      :location="getLocation",
      :toggleDrawer="toggleSidebar",
      :togglePlayer="togglePlayerDrawer"
    )
    main: v-container(fluid): nuxt
    v-footer.primary
      span.white--text Asterix*Designs
      v-spacer
      span.white--text WHCS Radio © {{ new Date().getFullYear() }}
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import {
    AppBar,
    AppDrawer,
    DrawerPlayer
  } from '../components'

  export default {
    name: 'DefaultLayout',
    components: {
      DrawerPlayer,
      AppBar,
      AppDrawer
    },
    methods: {
      ...mapActions([
        'toggleSidebar',
        'togglePlayerDrawer'
      ])
    },
    computed: {
      ...mapGetters(['getLocation'])
    }
  }
</script>

<style lang="stylus" scoped>
  .root
    /**/
</style>

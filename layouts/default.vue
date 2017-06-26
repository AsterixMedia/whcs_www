<template lang="pug">
  v-app.root
    app-drawer
    app-bar(
      :location="getLocation",
      :toggleDrawer="toggleSidebar"
    )
    main: v-container(fluid): nuxt
    v-footer
      span Asterix*Designs
      v-spacer
      span WHCS Radio © {{ new Date().getFullYear() }}
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import { AppBar, AppDrawer } from '../components'

  export default {
    name: 'DefaultLayout',
    components: {
      AppBar,
      AppDrawer
    },
    methods: {
      ...mapActions(['toggleSidebar'])
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

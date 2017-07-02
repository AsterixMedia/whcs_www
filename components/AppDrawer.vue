<template lang="pug">
  v-navigation-drawer.root.grey.lighten-4.pb-0(
    persistent,
    height='100%',
    light,
    v-model="drawerStatus",
    enable-resize-watcher,
    clipped,
    hide-overlay
  )
    v-list
      v-list-tile.mt-4.logo(
        avatar,
        tag='div'
      )
        v-list-tile-avatar
          img(
            src="~assets/images/logo.png"
          )
        v-list-tile-content.pl-3
          v-list-tile-title.text WHCS Radio

      template(v-for='(item, i) in items')

        v-layout(
          row,
          v-if='item.heading',
          align-center,
          :key='i'
        )
          v-flex(xs6)
            v-subheader(v-if='item.heading')
              | {{ item.heading }}

        v-divider.my-4(
          dark,
          v-else-if='item.divider',
          :key='i'
        )

        v-list-item(
          :key='i',
          v-else
        )
          v-list-tile(
            :to="item.to",
            :router="item.router",
            :nuxt="item.nuxt"
          )
            v-list-tile-action
              v-icon(v-if="item.icon") {{ item.icon }}
              i.mdi.material-icons.icon--dark(
                v-else-if="item.micon",
                :class="`mdi-${item.micon}`"
              )
            v-list-tile-content
              v-list-tile-title
                | {{ item.text }}
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  const nuxt = {
    nuxt: true,
    router: true
  }

  export default {
    name: 'AppDrawer',
    data: () => ({
      items: [
        { divider: true },
        { heading: 'Main' },
        {
          icon: 'home',
          text: 'Home',
          to: '/',
          router: true,
          nuxt: true
        },
        {
          icon: 'schedule',
          text: 'Schedule'
        },
        {
          icon: 'radio',
          text: 'Shows',
          to: '/shows',
          router: true,
          nuxt: true
        },
        {
          icon: 'event',
          text: 'Events'
        },
        {
          icon: 'people',
          text: 'Team',
          to: '/team',
          ...nuxt
        },
        { icon: 'help', text: 'About' },
        { divider: true },
        { heading: 'Social' },
        {
          micon: 'facebook',
          text: 'Facebook'
        },
        {
          micon: 'twitter',
          text: 'Twitter'
        },
        {
          micon: 'instagram',
          text: 'Instagram'
        },
        {
          micon: 'snapchat',
          text: 'Snapchat'
        }
      ]
    }),
    methods: {
      ...mapActions(['setSidebarStatus'])
    },
    computed: {
      ...mapGetters(['isSidebarOpen']),
      drawerStatus: {
        get () {
          return this.isSidebarOpen
        },
        set (value) {
          this.setSidebarStatus(value)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .root
    .logo
      img
        height 60px
        width 60px
      .text
        font-size 2em
        font-weight 800
</style>

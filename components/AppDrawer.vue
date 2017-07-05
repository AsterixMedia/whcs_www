<template lang="pug">
  v-navigation-drawer(
    persistent,
    height='100%',
    light,
    v-model="drawerStatus",
    enable-resize-watcher,
    clipped,
    hide-overlay
  ).root.pb-0.white
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
            :nuxt="item.nuxt",
            :target="item.target",
            :href="item.href"
          )
            v-list-tile-action
              v-icon(v-if="item.icon") {{ item.icon }}
              v-icon(v-else-if="item.micon", mdi) {{ item.micon }}
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
          ...nuxt
        },
        {
          icon: 'schedule',
          text: 'Schedule',
          to: '/schedule',
          ...nuxt
        },
        {
          icon: 'radio',
          text: 'Shows',
          to: '/shows',
          ...nuxt
        },
        {
          icon: 'event',
          text: 'Events',
          to: '/events',
          ...nuxt
        },
        {
          icon: 'people',
          text: 'People',
          to: '/people',
          ...nuxt
        },
        {
          icon: 'help',
          text: 'About',
          to: '/about',
          ...nuxt
        },
        { divider: true },
        { heading: 'Social' },
        {
          micon: 'facebook',
          text: 'Facebook',
          href: 'https://www.facebook.com/WHCSHunterRadio/',
          target: '__blanks'
        },
        {
          micon: 'twitter',
          text: 'Twitter',
          href: 'https://twitter.com/whcsradio',
          target: '__blank'
        },
        {
          micon: 'instagram',
          text: 'Instagram',
          href: 'https://www.instagram.com/whcsradio',
          target: '__blank'
        },
        {
          micon: 'snapchat',
          text: 'Snapchat',
          href: 'https://www.snapchat.com/add/whcsradio',
          target: '__blank'
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

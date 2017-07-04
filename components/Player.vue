<template lang="pug">
  .root.pt-4
    v-layout(
      align-center,
      column
    )
      v-flex(xs8).pt-2.pb-2
        img(src="~assets/images/image.jpg")

      v-flex(xs12).text-xs-center.pt-4.pb-4
        Strong WHCS Radio
        br
        em Where Hunter College Speaks

      v-flex(xs12).pt-2.pb-2
        v-btn(icon, large, disabled): v-icon shuffle
        v-btn(icon, large, disabled): v-icon skip_previous
        v-btn(
          floating,
          primary,
          @click.native="togglePlayback"
        )
          v-icon(light)
            | {{ playing ? 'pause_circle_outline' : 'play_circle_outline'}}
        v-btn(icon, large, disabled): v-icon skip_next
        v-btn(icon, large, disabled): v-icon loop

    v-list
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
  import VueHowler from 'vue-howler'

  export default {
    name: 'Player',
    mixins: [VueHowler],
    data: () => ({
      items: [
        { divider: true },
        { heading: 'Currently Playing' },
        {
          icon: 'play_circle_outline',
          text: 'Some Shitty SHow'
        },
        { heading: 'Coming Up Next' },
        {
          icon: 'add_to_queue',
          text: 'What is Lorem Ipsum?'
        },
        {
          icon: 'queue_play_next',
          text: 'Contrary to popular belief,'
        },
        {
          icon: 'add_to_queue',
          text: 'Some Shitty SHow'
        },
        {
          icon: 'queue_play_next',
          text: 'There are many variations '
        }
      ]
    })
  }
</script>

<style lang="stylus" scoped>
  .root
    height 100%
    img
      width 100%
</style>

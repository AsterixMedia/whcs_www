<template lang="pug">
  .root
    v-layout(
      align-center,
      justify-center,
      wrap
    )
      v-flex(xl6, lg6, md12, sm12, xs12).text-xs-center.cover
        img(:src="cover").pa-4
      v-flex(xl6, lg6, md12, sm12, xs12).in.text-xs-center
        .headline.pa-4 {{ name }}
        .body-2.pr-4.pl-4.desc {{ description }}
      v-flex(xs12)
        v-layout(
          align-center,
          justify-center,
          wrap
        ).text-xs-center.pb-4
          v-flex.text-xs-center(xs12).pa-4: h4 Hosts
          template(v-for="(host, i) in hosts")
            v-flex(xs12, sm6, md4, lg3)
              nuxt-link(:to="{path: `/people/${host.slug}`}").pa-2
                img(:src="host.pic").host
                .body-2 {{ host.fname + ' ' + host.lname }}
</template>

<script>
  import Types from 'vue-types'

  export default {
    name: 'ShowProfileCard',
    props: {
      name: Types.string,
      season: Types.string,
      hosts: Types.array,
      description: Types.string,
      cover: Types.string,
      day: Types.string,
      time: Types.string,
      slots: Types.number
    }
  }
</script>

<style lang="stylus" scoped>
  .root
    margin 0 auto
    max-width 800px
    .cover > img
      width 100%
      min-height 150px
      min-width 150px
      max-height 300px
      max-width 300px
    .host
      border-radius 50%
    a
      text-decoration none
    .desc
      text-align left
      @media screen and (max-width: 1410px)
        margin 0 70px
      @media screen and (max-width: 700px)
        margin 0 10px
    .in
      /*margin */
</style>

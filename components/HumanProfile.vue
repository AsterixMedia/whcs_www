<template lang="pug">
  .root.pa-4
    v-layout(justify-center)
      v-flex(
        xs12, md8, lg6, xl6,
      ).text-xs-center
        .profile-pic.pt-4: img(:src="pic", :alt="profilePicAlt")
        .display-1.pt-2 {{ fname + ' ' + lname}}
        .title.pb-3 {{ position }}
        .socials.pt-3.pb-3
          v-btn(
            icon,
            tag="a",
            target="__blank",
            :href="facebookLink",
            v-if="facebook"
          ): v-icon(mdi) facebook
          v-btn(
            icon,
            tag="a",
            target="__blank",
            :href="twitterLink",
            v-if="twitter"
          ): v-icon(mdi) twitter
          v-btn(
            icon,
            tag="a",
            target="__blank",
            :href="instagramLink",
            v-if="instagram"
          ): v-icon(mdi) instagram
          v-btn(
            icon,
            tag="a",
            target="__blank",
            :href="snapchatLink",
            v-if="snapchat"
          ): v-icon(mdi) snapchat
          v-btn(
            icon,
            tag="a",
            target="__blank",
            :href="emailLink",
            v-if="email"
          ): v-icon(mdi) email
          .bio.text-xs-left.body-2.pa-4
           | {{ bio }}
</template>

<script>
  import Types from 'vue-types'

  export default {
    name: 'HumanProfile',
    props: {
      fname: Types.string,
      lname: Types.string,
      pic: Types.string,
      team: Types.string,
      position: Types.string,
      bio: Types.string,
      facebook: Types.string,
      twitter: Types.string,
      instagram: Types.string,
      snapchat: Types.string,
      email: Types.string
    },
    computed: {
      profilePicAlt: () => `${this.fname}'s profile picture`,
      facebookLink: () => `http://facebook.com/${this.facebook}`,
      twitterLink: () => `https://twitter.com/${this.twitter}`,
      instagramLink: () => `https://www.instagram.com/${this.instagram}`,
      snapchatLink: () => `https://www.snapchat.com/add/${this.snapchat}`,
      emailLink: () => `mailto:${this.email}`
    }
  }
</script>

<style lang="stylus" scoped>
  .root
    .profile-pic > img
      border-radius 50%
    .bio
      max-width 500px
      margin 0 auto
</style>

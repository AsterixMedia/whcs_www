<template lang="pug">
  v-toolbar(
    fixed,
    dark
  ).root.primary
    v-toolbar-side-icon(
      @click.native.stop="toggleDrawer"
    )

    v-toolbar-title {{ location }}

    v-spacer

    v-text-field(
      prepend-icon="search",
      label="Search...",
      hide-details,
      single-line,
      disabled,
      dark
    ).hidden-sm-and-down

    v-spacer

    v-btn(
      icon,
      light,
      disabled
    ).hidden-md-and-up
      v-icon search

    v-btn(
      icon,
      light,
      @click.native.stop="togglePlayer"
    ).toolbar__side-icon
      v-icon play_circle_outline
</template>

<script>
  import Types from 'vue-types'
  export default {
    name: 'AppBar',
    props: {
      toggleDrawer: Types.func.isRequired,
      togglePlayer: Types.func.isRequired,
      location: Types.string.isRequired
    }
  }
</script>

<style lang="stylus" scoped>
  .root
    /**/
</style>

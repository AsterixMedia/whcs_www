<template lang="pug">
  v-toolbar.root(
    fixed,
    light
  )
    v-toolbar-side-icon(
      light,
      @click.native.stop="toggleDrawer"
    )

    v-toolbar-title {{ location }}

    v-text-field(
      prepend-icon="search",
      label="Search...",
      hide-details,
      single-line,
      light,
      disabled
    )
</template>

<script>
  import Types from 'vue-types'
  export default {
    name: 'AppBar',
    props: {
      toggleDrawer: Types.func.isRequired,
      location: Types.string.isRequired
    }
  }
</script>

<style lang="stylus" scoped>
  .root
    /**/
</style>

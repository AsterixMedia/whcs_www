<template lang="pug">
  .root
    h1 Admin
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'AdminPage',
    middleware: 'authenticated',
    methods: {
      ...mapActions(['setLocation'])
    },
    created () {
      this.setLocation('Admin')
    }
  }
</script>

<style lang="stylus" scoped>
  // .root
</style>

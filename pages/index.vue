<template lang="pug">
  .root
    h1  Hello Home
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'HomePage',
    head: () => ({
      title: 'Home'
    }),
    data () {
      return {}
    },
    methods: {
      ...mapActions(['setLocation'])
    },
    created () {
      this.setLocation('Home')
    }
  }
</script>

<style lang="stylus">
  .root
    /**/
</style>

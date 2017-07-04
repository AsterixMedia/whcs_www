<template lang="pug">
  .root
    h1  Hello Home
    h1 h2
    h3 h3
    h4 h4
    h5 h5
    h6 h6
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

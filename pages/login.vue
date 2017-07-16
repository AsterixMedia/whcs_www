<template lang="pug">
  .root
    login-card(
      :email="getEmail",
      :password="getPassword",
      :setEmail="emailChanged",
      :submitForm="loginUser",
      :error="getError",
      :setPassword="passwordChanged",
      :loading="isLoading"
    ).form
</template>

<script>
  import { LoginCard } from '~components'
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'LoginPage',
    components: {
      LoginCard
    },
    data: () => ({}),
    methods: {
      ...mapActions('user', [
        'emailChanged',
        'passwordChanged',
        'loginUser'
      ]),
      ...mapActions(['setLocation'])
    },
    created () {
      this.setLocation('Admin Login')
    },
    computed: {
      ...mapGetters('user', [
        'getEmail',
        'getPassword',
        'getError',
        'isLoading',
        'isSignedIn'
      ])
    },
    watch: {
      isSignedIn (value) {
        if (value === true) this.$router.push({ name: 'admin' })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .form
    margin 0 auto
    @media screen and (min-width: 992px) {
      margin-top 40px
    }
</style>

<template lang="pug">
  v-card.root.pa-4-mt-2.mb-2
    v-card-text.text-xs-center
      .display-2 Admin Login
    v-card-text
      v-text-field(
        required,
        label="Email",
        :value="email",
        @input="setEmail",
        :rules="[rules.required, rules.email]"
      )
      v-text-field(
        required,
        label="Password",
        hint="At least 8 characters",
        min="8",
        type="password",
        counter,
        :value="password",
        @input="setPassword",
        :rules="[rules.required]"
      )
      .body-2.error--text.text-xs-center(v-if="error")
        | Authentication Failed
      v-btn(
        block,
        primary,
        :loading="loading",
        @click.native="submitForm"
      ) Login
</template>

<script>
  import Types from 'vue-types'

  export default {
    name: 'LoginCard',
    props: {
      email: Types.string,
      password: Types.string,
      setEmail: Types.func,
      error: Types.string,
      setPassword: Types.func,
      submitForm: Types.func,
      loading: Types.bool
    },
    data () {
      return {
        rules: {
          required: value => !!value || 'Required.',
          email: value => {
            const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          }
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .root
    max-width 400px
    min-width 300px
</style>

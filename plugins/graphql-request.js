import { GraphQLClient } from 'graphql-request'
import Vue from 'vue'

const endPoint = process.env.graphqlUrl
const token = `Bearer ${process.env.graphqlToken}`

Vue.prototype.$graphql = new GraphQLClient(endPoint, {
  headers: {
    Authorization: token
  }
})

import Vue from 'vue'
import Vuetify from 'vuetify'
import { play } from 'vue-play'

import '../assets/styles/app.styl'

import ShowCard from '../components/ShowCard'
import HumanCard from '../components/HumanCard'

Vue.use(Vuetify)

play('MyButton')
  .add('with text', {
    template: `<v-btn @click="$log('123')">Hello</v-btn>`
  })

play(ShowCard)
  .add('Base', `
    <show-card 
      img="https://static1.squarespace.com/static/5589bd79e4b09ddbc3965c58/t/592f318bff7c50723c99c87b/1496266154333/serial-itunes-logo.png"
    />
  `)

play(HumanCard)
  .add('Base', `
    <v-layout row wrap>
      <v-flex xs4 sm3 md2 lg1
        v-for="n in 12" :key="i" 
      >
        <human-card 
          img="https://randomuser.me/api/portraits/men/83.jpg"
          fname="John" lname="Killer"
        />
      </v-flex>
    </v-layout>
  `)

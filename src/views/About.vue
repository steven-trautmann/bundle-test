<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-card>
      <v-card-subtitle>
        about page-ből, ami külön componens !!!! : {{ counter }}
      </v-card-subtitle>
      <v-card-text>
        axios fetch updates this: {{ message }}
      </v-card-text>
      <v-btn @click="showCounterState">
        counter state from vuex (console)
      </v-btn>
    </v-card>
  </div>
</template>

<script>
import store from '@/store/share'

export default {
  name: "About",
  data () {
    return {
      counter: null
    }
  },
  computed: {
    message () {
      return store.getters.dynamicMessage
    }
  },
  methods: {
    showCounterState () {
      console.log(store.getters.counterState)
    }
  },
  created () {
    this.unwatch = store.watch(
        (state, getters) => getters.counterState,
        (newValue, oldValue) => {
          console.log(oldValue, newValue)
          this.counter = newValue
        }
    )
  },
  beforeDestroy () {
    this.unwatch()
  }
}
</script>

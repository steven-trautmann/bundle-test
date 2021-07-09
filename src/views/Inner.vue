<template>
  <div>
    <v-btn color="primary" @click="addToCounter">add</v-btn>
  </div>
</template>

<script>
import store from '@/store/share'

export default {
  name: "Inner",
  methods: {
    addToCounter () {
      store.dispatch('addToCounter')
    }
  }
}
</script>

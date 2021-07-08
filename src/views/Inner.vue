<template>
  <div>
    <h1>Inner component with little logic: {{ counter }}</h1>
    <v-btn color="primary" @click="addToCounter">add</v-btn>
  </div>
</template>

<script>

export default {
  name: "Inner",
  data () {
    return {
      counter: 0
    }
  },
  methods: {
    addToCounter () {
      this.counter++
    }
  }
}
</script>

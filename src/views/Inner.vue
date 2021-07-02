<template>
  <div>
    <h1>Inner component with little logic: {{ counter }}</h1>
    <button @click="addToCounter">add</button>
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

<style scoped>

</style>
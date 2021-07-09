<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <h1>{{ msg }}</h1>
    <Inner/>
  </div>
</template>

<script>
import Inner from '@/views/Inner'
import store from '@/store/share'

export default {
  name: "App2",
  components: {
    Inner
  },
  data () {
    return {
      msg: 'alma'
    }
  },
  computed: {
  },
  created () {
    store.dispatch('getMessage').then((msg) => {
      this.msg = msg
    })
  }
};
</script>


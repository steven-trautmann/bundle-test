<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <h1>{{ msg }}</h1>
    <Inner/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Inner from './Inner'

export default {
  name: "App2",
  components: {
    Inner
  },
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    ...mapActions(['getMessage'])
  },
  created () {
    this.getMessage().then((msg) => {
      this.msg = msg
    })
  }
};
</script>


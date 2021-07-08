<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <h1>{{ msg }}</h1>
    <Inner/>
  </div>
</template>

<script>
// import { mapActions } from 'vuex'
import Inner from '@/views/Inner'
import axios from "axios";

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
  methods: {
    // ...mapActions(['getMessage'])
  },
  created () {
    // this.getMessage().then((msg) => {
    //   this.msg = msg
    // })
    axios.get('https://jsonplaceholder.typicode.com/posts/1').then(({ data }) => {
      this.msg = data.title
    })
  }
};
</script>


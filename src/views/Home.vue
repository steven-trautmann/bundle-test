<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png" />-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App" />-->
<!--    <Inner/>-->
    <App2/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Inner from "@/views/Inner.vue";
import App2 from '@/views/App2'

export default {
  name: "Home",
  components: {
    HelloWorld,
    Inner,
    App2
  },
};
</script>

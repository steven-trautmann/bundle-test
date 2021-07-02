<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Inner/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Inner from "@/views/Inner.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Inner
  },
};
</script>

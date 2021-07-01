<template>
  <div class="hello">
    <v-card class="d-flex justify-center">
      <v-card-text class="colored">
        alma
      </v-card-text>
      <h1>{{ msg }}</h1>
    </v-card>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "HelloWorld",
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

<style lang="scss">
$primary-color: var(--v-primary-base);

.colored {
  background-color: $primary-color !important;
}

.hello {
  width: 100%;
}
</style>

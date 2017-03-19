<template>
  <div>
    <h1>Step 1</h1>
    <router-link to="/step2">
      <p>{{  $t("question.1")  }}</p>
      <button >{{$t("forward")}}</button>
    </router-link>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
</style>

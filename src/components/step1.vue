<template>
  <div>
    <h1>Step 1</h1>
      <p>{{  $t("joke.1")  }}</p>
      <p>{{  $t("joke.2")  }}</p>
      <p>{{  $t("joke.3")  }}</p>  
    <router-link to="/step2">
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

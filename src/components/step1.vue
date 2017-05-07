<template>
  <div>
    <h1>{{  $t("informed.1")  }}</h1>
      <p>{{  $t("informed.2")  }}</p>
      <p>{{  $t("informed.7")  }}</p>
      <p>{{  $t("informed.3")  }}</p>
      <p>{{  $t("informed.4")  }}</p>
      <p>{{  $t("informed.5")  }}</p>
      <br><br><hr>
      <p>{{  $t("informed.6")  }}</p>
      <input type="checkbox" v-model="disableButton">
    <router-link to="/step2">
      <button v-bind:disabled="!disableButton">{{$t("forward")}}</button>
    </router-link>
  </div>
</template>

<script>
  export default {
    data () {
      return {
  "disableButton": false
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
</style>

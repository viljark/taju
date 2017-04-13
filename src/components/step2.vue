<template>
  <div>
    <h1>{{$t("perf.1")}}</h1>
    <p>{{$t("perf.2")}}</p>
    <p>{{$t("perf.3")}}</p>
    </br>
    <router-link :to="{name: 'trial'}">
      <button >{{$t("forward")}}</button>
    </router-link>
  </div>
</template>

<script>
  import {data} from "@/userdata";

  export default {
    data () {
      return {
      }
    },
    created() {
     // console.log("data", data.getData());
    },
    methods: {
    }
  }
</script>

<style scoped>
</style>

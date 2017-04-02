<template>
  <div class="wrap">
    <h1>{{$t("tutorial.1")}}</h1>
    <p>{{$t("tutorial.2")}}</p>
    <p>{{$t("tutorial.3")}}</p>
    <div>
      <span ref="ball" class="ball" :style="{width: ballSize, height: ballSize}"></span>
    </div>
    <p>
      <button @click="next">{{$t("forward")}}</button>
    </p>
  </div>
</template>

<script>
  export default {
    props: ["size"],
    data () {
      return {
        ballSize: 0
      }
    },
    created() {
      var height = window.innerHeight;
      var unit = Math.floor(height / 100);

      this.ballSize = this.size * unit + "px"
    },
    methods: {
        next() {
            this.$emit("next");
        }
    }
  }
</script>

<style scoped>
  .wrap {
    font-size: 16px;
    margin: auto;
    max-width: 800px;
  }
  .ball {
    display: inline-block;
    border-radius: 50%;
    background-color: #1ce;
  }
</style>

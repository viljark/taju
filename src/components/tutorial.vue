<template>
  <div class="wrap">
    <h1>Tutorial</h1>
    <p>Sisu</p>
    <p>Sellise suurusega pallide põrkeid loe!</p>
    <div>
      <span ref="ball" class="ball" :style="{width: ballSize, height: ballSize}"></span>
    </div>
    <p>
      <button @click="next">Jätka</button>
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

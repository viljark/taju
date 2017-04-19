<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import screenfull from "screenfull";
  import Vue from "vue";

  export default {
    name: 'app',
    data: function() {
        return {
        }
    },
    created() {
      Vue.config.lang = localStorage.getItem("language") || "et";
    },
    mounted: function() {
      document.addEventListener("keydown", function (e) {
        console.log(e.keyCode);
        if (e.keyCode == 13) {
            console.log(screenfull.enabled, screenfull);

          if (screenfull.enabled) {
            screenfull.toggle()
          }
        }
      }, false);

    },
    methods: {
    }
  }
</script>

<style lang="scss">
  body {
    margin: 0;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>

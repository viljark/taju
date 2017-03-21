<template>
  <div>
    <test :cross="false" :modifiers="[1, 5, 10]"></test>
  </div>
</template>

<script>
  import test from "@/components/test"
  export default {
    data () {
      return {
      }
    },
    methods: {
    },
    components: {
      test
    },
  }
</script>

<style scoped>
</style>

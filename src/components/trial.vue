<template>
  <div>
    <tutorial v-if="!testActive" @next="testActive = true" :size="5"></tutorial>
    <test v-if="testActive" :cross="false" @data="parseTestResults" :cross-size="0.5" :modifiers="[5, 2, 10]"></test>
  </div>
</template>

<script>
  import test from "@/components/test"
  import {data} from "@/userdata";
  import tutorial from "@/components/tutorial"

  export default {
    data () {
      return {
        allowedMargin: 2,
        testActive: false
      }
    },
    created: function () {

    },
    methods: {
      parseTestResults(trialData) {
        console.log("got data", trialData);
        let counted = trialData.collisionsCounted;
        console.log("int counted", counted);

        if (Math.abs(trialData.collisionsCounted - trialData.collisionsReal) <= this.allowedMargin) {
          alert("Tubli, jätkamiseks vajuta OK!");
          this.$router.push({name: 'run', params: {id: 1}});
        } else {
          alert("Sa tegid halvasti, suuname sind õpetuse juurde tagasi!");
          this.$router.push({path: 'step2'});
        }
        trialData.name = "trial";
        data.addRunData(trialData);
      }
    },
    components: {
      test,
      tutorial
    },
  }
</script>

<style scoped>
</style>

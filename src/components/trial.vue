<template>
  <div>
    <test :cross="true" @data="parseTestResults" :cross-size="0.5" :modifiers="[5, 2, 10]"></test>
  </div>
</template>

<script>
  import test from "@/components/test"
  import {data} from "@/userdata";

  export default {
    data () {
      return {
        allowedMargin: 2
      }
    },
    created: function () {
    },
    methods: {
      parseTestResults(trialData) {
        console.log("got data", trialData);
        let counted = Number.parseInt(trialData.collisionsCounted);
        console.log("int counted", counted);

        if (Math.abs(trialData.collisionsCounted - trialData.collisionsReal) <= this.allowedMargin) {
          alert("You rock");
        } else {
          alert("Sa tegid halvasti, suuname sind õpetuse juurde tagasi!");
          data.addTrialData(trialData);
          this.$router.push({path: 'step2'});
        }
      }
    },
    components: {
      test
    },
  }
</script>

<style scoped>
</style>

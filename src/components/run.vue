<template>
  <div>
    <tutorial :key="$route.path" v-if="!testActive" @next="testActive = true" :size="stimulusSize"></tutorial>
    <test :key="$route.path" v-if="testActive" :cross="crossVisible" @data="parseTestResults" :cross-size="crossSize"
          :modifiers="currentModifier"></test>
  </div>
</template>

<script>
  import test from "@/components/test"
  import tutorial from "@/components/tutorial"
  import {data, modifiers} from "@/userdata";

  export default {
    data () {
      return {
        allowedMargin: 2,
        testActive: false,
        id: Number.parseInt(this.$route.params.id),
        currentModifier: [],
        crossVisible: false,
        crossSize: 0,
        stimulusSize: 0
      }
    },
    created: function () {
      //console.log("route params", this.$route.params.id);
      
      this.initModifiers()

      if (this.id === 3 || this.id === 6) {
        this.crossVisible = true;
      } else {
        this.crossVisible = false;
      }
    },
    methods: {
      parseTestResults(runData) {
        runData.name = "run" + this.id;
        runData.crossSize = this.crossSize;
        runData.modifiers = this.currentModifier;
        runData.stimulusSize = this.stimulusSize;
        data.addRunData(runData);
//      this.$t("hello") nii saab tõlkida

        if (Math.abs(runData.collisionsCounted == runData.collisionsReal)) {
          alert(runData.collisionsReal + " - " + this.$t("alert.2"));
        } else {alert(this.$t("alert.4") + runData.collisionsReal + "x")};
        // console.log(this.id);
        if (this.id === 6) {
          this.$router.push({name: 'survey1', params: {visited: true}});
          return;
        }
        if (this.id !== 3) {
          this.initModifiers();
          this.startRun(this.id + 1);
          return;
        }
        if (this.id === 3) {
          //remove current modifier from modifiers
          let index = modifiers.indexOf(this.currentModifier);
          //console.log("index is", index);
          modifiers.splice(index, 1);
          //console.log("modifiers now", modifiers);
          this.$router.push({name: 'survey1'});
        }

      },
      startRun(id) {
        this.testActive = false;

        if (id === 3 || id === 6) {
            this.crossVisible = true;
        } else {
            this.crossVisible = false;
        }
        this.$router.push({name: 'run', params: {id: id}});
        this.id = id;
      },
      initModifiers() {
        this.currentModifier = this.getRandomModifier();
        //console.log("currentModifier", this.currentModifier)

        //change cross size here
        this.crossSize = this.currentModifier[3];
        this.stimulusSize = this.currentModifier[0];
      },
      getRandomModifier() {
        return modifiers[this.random(0, modifiers.length)];
      },

      random(min, max) {
        var num = Math.floor(Math.random() * (max - min)) + min;
        return num;
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

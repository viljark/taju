<template>
  <div>
    <h1>Survey 2</h1>
    <p>
      <button @click="saveData">{{$t("forward")}}</button>
    </p>
  </div>
</template>

<script>
  import {data} from "@/userdata";
  import {store} from "@/store";

  export default {
    data () {
      return {
          vastus: {

          }
      }
    },
    created() {
      console.log("data", data.getData());
    },
    methods: {
        saveData() {
            data.addSurveyData(this.vastus, 3);
            var allData = data.getData();

            store.addAnswer(allData);
            this.$router.push({name: 'end'});
        }
    }
  }
</script>

<style scoped>
</style>

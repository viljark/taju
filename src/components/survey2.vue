<template>
  <div>
    <h1>Survey 2</h1>
    <section v-if="step == 1">
        <p>{{$t("questionRaal.1")}}</p>
        <p>
          <select v-model="vastus.device" name="" id="">
            <option selected value="null" disabled>--- Vali -----</option>
            <option value="Sülearvuti">{{$t("answerRaal.11")}}</option>
            <option value="Lauaarvuti">{{$t("answerRaal.12")}}</option>
            <option value="Nutitelefon">{{$t("answerRaal.13")}}</option>
            <option value="Tahvelarvuti">{{$t("answerRaal.14")}}</option>
          </select>
        </p>
      <p v-if="vastus.device !== null">
        <button @click="step = 2">{{$t("forward")}}</button>
      </p>
    </section>
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
          step: 1,
          vastus: {
            device: null,

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
